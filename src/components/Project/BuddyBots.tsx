import { Component } from "react";
import {
    Image,
    Box,
    Text,
    UnorderedList,
    ListItem
} from "../../chakra";
import BuddyBotsImg from "../../images/BuddyBotsCollage.png";

class BuddyBots extends Component {
    get commonProps() {
        return {
            fontSize: { base: "lg", md: "xl" }
        };
    }
    renderFAQ = () => {
        const { commonProps } = this;

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
                    <ListItem marginLeft="30px">
                        180 is the mint supply.
                    </ListItem>
                    <ListItem marginLeft="30px">
                        20 is used for giveaways or collaborations.
                    </ListItem>
                </UnorderedList>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Mint price?
                </Text>
                <Text>
                    0 (Just have enough for the gas fee)
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Utilities?
                </Text>
                <Text>
                    As Sol Labs grows as a community, the privileges will grow as well for Buddy Bots.
                </Text>
                <br />
            </>
        )
    }
    render() {
        const { commonProps, renderFAQ } = this;

        return (
            <Box px={{ base: '8', md: '40' }} paddingBottom="8" maxWidth='1200px' marginX='auto'>
                <Text fontSize="5xl" align="left" fontWeight="bold">Buddy Bots</Text>
                <br />
                <br />
                <Text align="left" {...commonProps}>
                    Feeling lonely?? Do not fret, Buddy Bots are here to keep you company!
                    Bring them with you on a journey of limitless potential with Sol Labs!!
                </Text>
                <br />
                <br />
                <Image src={BuddyBotsImg} alt="Buddy Bots" objectFit="cover" />
                <br />
                <br />
                {renderFAQ()}
            </Box>
        )
    }
};

export default BuddyBots;
