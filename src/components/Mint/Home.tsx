import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import {
  Box,
  Button,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "../../chakra";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";
import Counter from "../Counter";

const ConnectButton = styled(WalletDialogButton)`
  background-color: #45E3FF;
  font-weight: bold;
`;

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  //startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  //const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();
  const [passphrase, setPassphrase] = useState("");
  const [isPassphraseValid, setIsPassphraseValid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onModalClose = () => {
    setIsPassphraseValid(false);
    setPassphrase("");
    onClose();
  }

  const updatePassphrase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e

    setPassphrase(value);
    if (value === process.env.REACT_APP_MINT_PASSPHRASE) {
      setIsPassphraseValid(true);
      onOpen();
    }
  }

  const refreshCandyMachineState = () => {
    (async () => {
      console.log('second')

      if (!wallet) return;

      const {
        candyMachine,
        //goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      //setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      console.log('first')
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  const commonProps = {
    fontSize: { base: "lg", lg: "2xl" }
  };

  return (
    <Box>
      {
        wallet && isPassphraseValid && (
          <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box textAlign="center" {...commonProps}>
                  <Text><b>Wallet</b> {shortenAddress(wallet.publicKey.toBase58() || "")}</Text>
                  <Text><b>Total Available: </b>{itemsAvailable}</Text>
                  <Text><b>Redeemed: </b>{itemsRedeemed}</Text>
                  <Text><b>Remaining: </b>{itemsRemaining}</Text>
                </Box>
              </ModalBody>

              <ModalFooter margin="0 auto">
                <Button
                  isDisabled={isMinting}
                  onClick={onMint}
                  size="md"
                  colorScheme="blue"
                  color="white"
                  mr={3}
                  {...commonProps}
                >
                  {
                    isMinting
                      ? <CircularProgress />
                      : "MINT"
                  }
                </Button>
                <Button onClick={onModalClose} {...commonProps}>CLOSE</Button>
              </ModalFooter>
              <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({ ...alertState, open: false })}
              >
                <Alert
                  onClose={() => setAlertState({ ...alertState, open: false })}
                  severity={alertState.severity}
                >
                  {alertState.message}
                </Alert>
              </Snackbar>
            </ModalContent>
          </Modal>
        )
      }
      {
        !wallet && isActive
          ? <ConnectButton>Connect Wallet</ConnectButton>
          : isSoldOut
            ? (
              <Box>
                <Text>SOLD OUT</Text>
              </Box>
            )
            : isActive
              ? !isPassphraseValid && <Input
                variant="outline"
                placeholder="Passphrase"
                value={passphrase}
                onChange={updatePassphrase}
                focusBorderColor="blue.500"
                size="lg"
                autoFocus
                isRequired
              />
              : (
                <Box
                  backgroundColor="blue.500"
                  color="white"
                  fontWeight="bold"
                  padding={{ base: "10px 15px", lg: "15px 20px" }}
                  borderRadius="10px"
                  {...commonProps}
                >
                  <Counter
                    activateMint={() => setIsActive(true)}
                  />
                </Box>
              )
      }
    </Box>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export default Home;
