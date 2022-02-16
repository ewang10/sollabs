import { Component } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image, Flex, Grid, List, ListItem, UnorderedList } from "../chakra";
import MissionImg from "../images/Mission.png";
import RoadmapImg from "../images/Roadmap.png";
import MemberOneImg from "../images/Member1.png";
import MemberTwoImg from "../images/Member2.png";
import MemberThreeImg from "../images/Member3.png";
import TicketAttribute from "../images/TicketAttribute.png";
import SolanaAttribute from "../images/SolanaAttribute.png";
import ExperimentAttribute from "../images/ExperimentAttribute.png";

class About extends Component {
    get teamInfo() {
        return (
            [
                {
                    image: MemberOneImg,
                    title: "Developer",
                    discordName: "Kuu",
                    funFact: "I love sushi."
                },
                {
                    image: MemberTwoImg,
                    title: "Logistics",
                    discordName: "Nye",
                    funFact: "I love chicken wings!"
                },
                {
                    image: MemberThreeImg,
                    title: "Marketing/Designer",
                    discordName: "Sttark",
                    funFact: "I love makgeolliiiiii."
                }
            ]
        );
    }
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
    renderMission = () => (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={{ base: '0', md: '20' }} paddingBottom="8">
            <Image src={MissionImg} alt="lab" objectFit='cover' display={{ base: 'none', lg: 'block' }} height="100%" />
            <Box margin="auto">
                <Text fontSize="4xl" align="center" fontWeight="bold">Mission</Text>
                <hr style={{ height: "3px", width: "180px", margin: "0 auto", background: "black" }} />
                <br />
                <Text fontSize={{ base: "md", md: "lg" }}>
                    We have been part of the NFT community for some time now and we truly believe it is a
                    great place to create something amazing. Our developers and entrepreneurs want to create
                    a brand to symbolize what NFT can be. We see NFT as a digital canvas that encapsulates
                    our limitless imaginations and allows us to use it as a vehicle to create quality
                    projects and simultaneously build a prosperous community.
                </Text>
            </Box>
        </Grid>
    )
    renderTeam = () => (
        <Box backgroundColor="lightGray" padding="8">
            <Text fontSize="4xl" align="center" fontWeight="bold">Team</Text>
            <hr style={{ height: "3px", width: "180px", margin: "0 auto", background: "black" }} />
            <br />
            <Flex
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                alignItems="center"
            >
                {
                    this.teamInfo.map(({ image, title, discordName, funFact }) => (
                        <Box marginTop="15px" width="250px">
                            <Image src={image} margin="0 auto" alt={`${title} profile`} objectFit='cover' width="150px" borderRadius="20" />
                            <Text {...this.commonProps} textAlign="center" fontWeight="bold">{discordName}</Text>
                            <Text fontSize={{ base: "md", md: "lg" }} textAlign="center" fontWeight="bold">{title}</Text>
                            <Text fontSize={{ base: "md", md: "lg" }} textAlign="center">{funFact}</Text>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
    )
    renderRoadmap = () => (
        <Box>
            <Text fontSize="4xl" align="center" fontWeight="bold">Roadmap</Text>
            <hr style={{ height: "3px", width: "180px", margin: "0 auto", background: "black" }} />
            <br />
            <Image src={RoadmapImg} alt="roadmap" objectFit="cover" />
        </Box>
    )
    renderFAQ = () => {
        const { commonProps, listCommonProps } = this;

        return (
            <Box backgroundColor="lightGray" padding="8">
                <Text fontWeight="bold" align="center" fontSize="4xl">FAQ</Text>
                <hr style={{ height: "3px", width: "130px", margin: "0 auto", background: "black" }} />
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is Sol Labs?
                </Text>
                <Text>
                    This is an early access project that will allow holders to participate
                    in upcoming Experiments. We are an organization that focuses on creating
                    deflationary <b>Experiments</b>, which will be created and worked on one
                    after another. We plan to build a portfolio like no other in the Solana NFT
                    community, and every holder that is with us will benefit at either a micro
                    or macro scale.
                    <br />
                    <br />
                    We are here to focus on long-term play. Diamond hands who understand our vision will
                    benefit greatly from this. Sol Labs NFT is meant to give control to the early adopters
                    as they will be the only ones with the power to be in future whitelists.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Utilities?
                </Text>
                <Text>
                    10% accrued from each Experiment’s mint launch and 50% royalties earned
                    will go into Lost Soul fund.
                    <br />
                    <br />
                    The type of utility holders have is based on the product attribute you
                    receive on your NFT. All Sol Labs NFT holders will be on the whitelist
                    for Sol Man.
                    <br />
                    <br />
                    <List>
                        <ListItem {...listCommonProps}>
                            <Text fontWeight="bold">Ticket attribute:</Text>
                            <br />
                            <Image src={TicketAttribute} alt="ticket attribute" objectFit='cover' width="150px" borderRadius="20" />
                            <br />
                            <Text>
                                Those holding onto the Ticket development attribute will be whitelisted
                                to all Experiment Projects of all NFTs created from Sol Labs.
                            </Text>
                            <br />
                            <Text>
                                NFT must be delisted in order to join the whitelist!
                            </Text>
                            <br />
                            <Text as="em">
                                * The Sol Labs NFTs with the Ticket development will be the only
                                way people can get onto the whitelist for future Experiments.
                                People who have OG roles will get level 1 (25%) whitelist,
                                while people who have the Sol Labs NFT with the Ticket development
                                will get level 2 whitelist (48%).
                            </Text>
                        </ListItem>
                        <br />
                        <ListItem {...listCommonProps}>
                            <Text fontWeight="bold">Experiment attribute:</Text>
                            <br />
                            <Image src={ExperimentAttribute} alt="experiment attribute" objectFit='cover' width="150px" borderRadius="20" />
                            <br />
                            <Text>
                                Those holding onto the Experiment development attribute will receive an
                                airdrop of all Experiment Project Token created from Sol Labs.
                            </Text>
                            <br />
                            <Text>
                                NFT must be delisted in order to receive airdrop!
                            </Text>
                        </ListItem>
                        <br />
                        <ListItem {...listCommonProps}>
                            <Text fontWeight="bold">Solana attribute:</Text>
                            <br />
                            <Image src={SolanaAttribute} alt="solana attribute" objectFit='cover' width="150px" borderRadius="20" />
                            <br />
                            <Text>
                                Those holding onto the Solana development attribute will
                                receive an airdrop of our {" "}
                                <Link to="/projects/sol_man" className="link">Sol Man</Link>
                                {" "} (Core Utility NFT).The value of this NFT will increase
                                by 0.5 SOL with every project launch, including Experiment
                                Projects and Test Projects.
                                <br />
                                <UnorderedList>
                                    <ListItem {...listCommonProps}>
                                        4 Buddy Bots will be chosen for a chance to win 0.1 SOL
                                        per week (Must be delisted!)
                                    </ListItem>
                                    <ListItem {...listCommonProps}>
                                        A portion of sales from Sol Labs mint launch will go into
                                        the lottery fund.
                                    </ListItem>
                                </UnorderedList>
                            </Text>
                            <br />
                            <Text as="em">
                                * Sol Man will be given to the holder before Sol Man mint launch.
                                Must be delisted to receive!
                            </Text>
                        </ListItem>
                    </List>
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Mint launch breakdown:
                </Text>
                <UnorderedList>
                    <ListItem {...listCommonProps}>
                        37% (20-37%) will be withheld for tax purposes. Unused funds will
                        go back into the Lost Soul fund, and developing Experiments.
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
                <Text fontWeight="bold" {...commonProps}>
                    What is an Experiment?
                </Text>
                <Text>
                    An Experiment created and worked on by us and anyone we partner with will be
                    deflationary by default. It will mainly have a business type of focus,
                    whether it be merchandising, clothing, transportation and warehousing, or technology.
                    We plan to take a portion of the royalties and net income from the business to fund
                    {' '}<b>The Grant</b>.
                </Text>
                <br />
                <Text>
                    We already have some Experiments in the works. To further increase the value of these
                    Experiment NFTs, we plan to make sure our mint launches end within a timeframe.
                    People who are late to this will miss out. For diamond hands that understand how our
                    process will work, will benefit immensely in the long-term.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    How will we make it deflationary?
                </Text>
                <Text>
                    We will make it deflationary by announcing the royalties and net income that will go
                    into The Grant. The Grant will buy the cheapest token available from each respective
                    Experiment (Sweeping the floor).
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is The Grant?
                </Text>
                <Text>
                    A portion of the revenue stream from each respective Experiment including 40% of royalties
                    from market sales are deposited into “The Grant “(account). As soon as The Grant accumulates
                    enough funding it will award Experiments for their valuable data (Experiment Project NFTs
                    Collection) to continue the research. This action will sweep the floor through Solana
                    marketplaces, burning the tokens and reducing the overall supply. This will in turn create
                    deflationary Experiments and reward diamond hands!
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    When is mint date?
                </Text>
                <Text>
                    February 18th 2022 23:00 PST / 07:00 +1 UTC.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Where can I buy Sol Labs NFTs?
                </Text>
                <Text>
                    We would prefer to get listed on Magiceden and Solanart.
                    If requested for more, we will consider.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is the total supply?
                </Text>
                <Text>
                    1,111.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is the mint supply?
                </Text>
                <Text>
                    1,096.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Why are 15 Sol Labs NFTs not minted?
                </Text>
                <Text>
                    They will be used for giveaways and collaborations.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is the mint price?
                </Text>
                <Text>
                    1.25 SOL.
                </Text>
            </Box>
        )
    }

    render() {
        const { renderMission, renderFAQ, renderRoadmap, renderTeam } = this;

        return (
            <Box px={{ base: '8', md: '40' }} paddingBottom="8" maxWidth='1200px' marginX='auto'>
                {renderMission()}
                <br />
                {renderTeam()}
                <br />
                {renderRoadmap()}
                <br />
                {renderFAQ()}
            </Box>
        );
    }
}

export default About;
