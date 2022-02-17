import { Component } from "react";
import {
    Image,
    Box,
    Text,
    UnorderedList,
    ListItem
} from "../../chakra";
import SolManImg from "../../images/SolManCollage.png";

class SolMan extends Component {
    get commonProps() {
        return {
            fontSize: { base: "lg", md: "xl" }
        };
    }
    get listCommonProps() {
        return {
            marginLeft: "30px"
        }
    }
    renderFAQ = () => {
        const { commonProps, listCommonProps } = this;

        return (
            <>
                <Text fontWeight="bold" {...commonProps}>
                    What is Sol Man?
                </Text>
                <Text>
                    This will serve as the foundation of multiple Experiments that we have planned.
                    The main focus of this project will allow the Mad Scientists to start their Experiments.
                    <br />
                    <br />
                    A portion of the Experiment’s mint launch and royalties will be used to fulfill
                    these lost souls' dreams.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    The total supply?
                </Text>
                <Text>
                    TBD.
                </Text>
                <br />
                {/* <Text fontWeight="bold" {...commonProps}>
                    Mint price?
                </Text>
                <Text>
                    0.666 SOL.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Mint date?
                </Text>
                <Text>
                    TBD.
                </Text>
                <br /> */}
                <Text fontWeight="bold" {...commonProps}>
                    Utilities?
                </Text>
                <Text>
                    10% accrued from each Experiment’s mint launch and 50% royalties earned will
                    go into Lost Soul fund.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is Lost Soul fund?
                </Text>
                <Text>
                    When the Lost soul fund has accumulated enough, it will start fulfilling
                    Sol Man’s dreams and help them rest in peace, so they will no longer
                    wander the world with regrets(burned), which will reduce the supply of
                    Sol Man and create liquidity for all Sol Man NFTs. It will start with the
                    cheapest Sol Man in Solana marketplaces.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Mint launch breakdown:
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        37% (20-37%) will be withheld for tax purposes. Unused funds will go
                        back into the Lost Soul fund.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        12% will go to the team.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        46% will go into developing Experiments.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        5% will go into the Lost Soul fund.
                    </ListItem>
                </UnorderedList>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Royalties:
                </Text>
                <Text>
                    6%
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        3% will go to the Lost Soul fund
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        3% to team*
                    </ListItem>
                </UnorderedList>
                <br />
                <Text as='em'>
                    * The team’s royalties will be used to cover income tax for wallets 
                    to both The Lost Soul fund and the team wallet.
                </Text>
                <br />
            </>
        )
    }
    render() {
        const { commonProps, renderFAQ } = this;

        return (
            <Box px={{ base: '8', md: '40' }} paddingBottom="8" maxWidth='1200px' marginX='auto'>
                <Text fontSize="5xl" align="left" fontWeight="bold">Sol Man</Text>
                <br />
                <br />
                <Text align="left" {...commonProps}>
                    Lost souls have escaped from our labs. They are wandering the world filled
                    with regrets and we are here to fulfill their dreams! Help us resolve their
                    regrets and rest in peace.
                </Text>
                <br />
                <br />
                <Image src={SolManImg} alt="Sol Man Collage" objectFit="cover" />
                <br />
                <br />
                {renderFAQ()}
            </Box>
        )
    }
};

export default SolMan;
