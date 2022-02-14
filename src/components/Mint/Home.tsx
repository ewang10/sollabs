import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircularProgress, Snackbar, Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Paper from '@material-ui/core/Paper';
import * as anchor from "@project-serum/anchor";
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
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
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";
import { AlertState, toDate } from './utils';
import { Header } from './Header';
import { MintButton } from './MintButton';
import { GatewayProvider } from '@civic/solana-gateway-react';
import { MintCountdown } from "./MintCountdown";

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #45E3FF !important;
  color: white;
  font-size: 18px !important;
  font-weight: bold !important;
`;

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });
  const [passphrase, setPassphrase] = useState("");
  const [isPassphraseValid, setIsPassphraseValid] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const rpcUrl = props.rpcHost;
  const wallet = useWallet();

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

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection,
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log('There was a problem fetching Candy Machine state');
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true,
          );
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
          onModalClose();
          navigate("/mint_completed");
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

  const commonProps = {
    fontSize: { base: "lg", lg: "2xl" }
  };

  const {
    isActive,
    itemsAvailable,
    itemsRedeemed,
    itemsRemaining,
    goLiveDate,
    isPresale,
    isSoldOut,
    gatekeeper
  } = candyMachine?.state || {};


  return (
    <Box>
      {
        wallet.connected && isPassphraseValid && (
          <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Box textAlign="center" {...commonProps}>
                  <Text><b>Wallet</b> {shortenAddress(wallet?.publicKey?.toBase58() || "")}</Text>
                  <Text><b>Total Available: </b>{itemsAvailable}</Text>
                  <Text><b>Redeemed: </b>{itemsRedeemed}</Text>
                  <Text><b>Remaining: </b>{itemsRemaining}</Text>
                </Box>
              </ModalBody>

              <ModalFooter margin="0 auto">
                <Box
                  mr={3}
                  {...commonProps}
                >
                  {isActive &&
                    gatekeeper &&
                    wallet.publicKey &&
                    wallet.signTransaction ? (
                    <GatewayProvider
                      wallet={{
                        publicKey:
                          wallet.publicKey ||
                          new PublicKey(CANDY_MACHINE_PROGRAM),
                        //@ts-ignore
                        signTransaction: wallet.signTransaction,
                      }}
                      gatekeeperNetwork={
                        candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                      }
                      clusterUrl={rpcUrl}
                      options={{ autoShowModal: false }}
                    >
                      <MintButton
                        candyMachine={candyMachine}
                        isMinting={isUserMinting}
                        onMint={onMint}
                      />
                    </GatewayProvider>
                  ) : (
                    <MintButton
                      candyMachine={candyMachine}
                      isMinting={isUserMinting}
                      onMint={onMint}
                    />
                  )}
                </Box>
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
        !wallet.connected
          ? <ConnectButton>Connect Wallet</ConnectButton>
          : isSoldOut
            ? (
              <Box
                backgroundColor="blue.500"
                color="white"
                fontWeight="bold"
                padding={{ base: "10px 15px", lg: "15px 20px" }}
                borderRadius="10px"
                {...commonProps}
              >
                <Text>SOLD OUT</Text>
              </Box>
            )
            : isActive
              ? !isPassphraseValid && (
                <Input
                  variant="outline"
                  placeholder="Passphrase"
                  value={passphrase}
                  onChange={updatePassphrase}
                  focusBorderColor="blue.500"
                  size="lg"
                  autoFocus
                  isRequired
                />
              )
              : (
                <MintCountdown
                  date={toDate(
                    goLiveDate
                      ? goLiveDate
                      : isPresale
                        ? new anchor.BN(new Date().getTime() / 1000)
                        : undefined,
                  )}
                  style={{ justifyContent: 'flex-end' }}
                  onComplete={refreshCandyMachineState}
                />
              )
      }
    </Box>
  );
};


export default Home;
