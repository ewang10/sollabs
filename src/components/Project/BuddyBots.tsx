import { Component } from "react";
import {
    Image,
    Box,
    Text,
    UnorderedList,
    ListItem,
    Link
} from "../../chakra";
import BuddyBotsImg from "../../images/BuddyBotsCollage.png";

class BuddyBots extends Component {
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
                    What is Buddy Bots?
                </Text>
                <Text>
                    The Mad Scientists from Sol Labs got lonely while working on deflationary Experiments,
                    therefore 200 Buddy Bots were created. Buddy Bots can be minted for free by anybody
                    with a Solana wallet.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    The total supply?
                </Text>
                <Text>
                    200
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        180 is the mint supply.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        20 is used for giveaways or collaborations.
                    </ListItem>
                </UnorderedList>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Mint price?
                </Text>
                <Text>
                    Finished minting.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Utilities?
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        Weekly lotto will be held for Buddy Bots holders.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        Buddy Bots will be cycled through until they have all been picked.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        4 Buddy Bots will be chosen for a chance to win 0.1 SOL
                        per week (Must be delisted!)
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        A portion of sales from Sol Labs mint launch will go into
                        the lottery fund.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        There could be an increase of Buddy Bots participants per week based
                        on how well royalties have done.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        Pre-sale access to all Experiments.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        As Sol Labs grows as a community, more utilities will be added on for Buddy Bots holders!
                    </ListItem>
                </UnorderedList>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Royalties:
                </Text>
                <Text>
                    8%
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        3% goes to Buddy Bots bonus giveaway (This will go to increasing the
                        Buddy Bots participants on a weekly basis).
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        2% goes to the team.
                    </ListItem>
                    <ListItem {...listCommonProps}>
                        3% withheld for tax.
                    </ListItem>
                </UnorderedList>
                <br />
            </>
        )
    }
    render() {
        const { commonProps, renderFAQ } = this;
        const magicEdenLink = "https://magiceden.io/marketplace/buddy_bots";

        return (
            <Box px={{ base: '8', md: '40' }} paddingBottom="8" maxWidth='1200px' marginX='auto'>
                <Text fontSize="5xl" align="left" fontWeight="bold">Buddy Bots</Text>
                <br />
                <br />
                <Text align="left" {...commonProps}>
                    Feeling lonely?? Do not fret, Buddy Bots are here to keep you company!
                    Bring them with you on a journey of limitless potential with Sol Labs!!
                    <br />
                    <br />
                    Get your Buddy Bots from {" "}
                    <Link color="blue.500" href={magicEdenLink} isExternal><b>Magic Eden</b></Link>.
                </Text>
                <br />
                <br />
                <Image src={BuddyBotsImg} alt="Buddy Bots Collage" objectFit="cover" />
                <br />
                <br />
                {renderFAQ()}
            </Box>
        )
    }
};

export default BuddyBots;
