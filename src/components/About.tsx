import { Component } from "react";
import { Text, Box, Image, Flex, Grid } from "../chakra";
import MissionImg from "../images/Mission.png";
import RoadmapImg from "../images/Roadmap.png";
import MemberOneImg from "../images/Member1.png";
import MemberTwoImg from "../images/Member2.png";
import MemberThreeImg from "../images/Member3.png";


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
    renderMission = () => (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={{ base: '0', md: '20' }} paddingBottom="8">
            <Image src={MissionImg} alt="lab" objectFit='cover' display={{ base: 'none', lg: 'block' }} height="100%" />
            <Box margin="auto">
                <Text fontSize="4xl" align="center" fontWeight="bold">Mission</Text>
                <hr style={{ height: "3px", width: "180px", margin: "0 auto", background: "black" }} />
                <br />
                <Text fontSize={{ base: "md", md: "lg" }}>
                    We have been part of the NFT community for some time now and we truly believe
                    it is a great place to create something amazing. Our developers and entrepreneurs
                    want to create a brand to symbolize what NFT can be, a space to help others.
                    We see NFT as a digital canvas that encapsulates our limitless imaginations and
                    allows us to use it as a vehicle to create quality projects that will change
                    the way NFT is utilized, and simultaneously build a prosperous community.
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
        const { commonProps } = this;

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
                </Text>
                <br />
                <Text>
                    We are here to focus on long-term play. As people get invested more and more
                    into us. The short and medium term holders will eventually be bought out.
                    Diamond hands will be benefiting greatly for understanding our vision.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    When is an Experiment?
                </Text>
                <Text>
                    An Experiment created and worked on by us and anyone we partner with will be
                    deflationary by default. It will mainly have a focus type of business,
                    whether it be merchandising, clothing, transportation and warehousing, or technology.
                    We plan to take a portion of the royalties and net income from the business to fund
                    {' '}<b>The Grant</b>.
                </Text>
                <br />
                <Text>
                    We already have in the works some Experiments. To further increase the value of these
                    Experiment NFTs, we plan to make sure our mint launches end within a timeframe.
                    For people who are late to this will miss out. For diamond hands that understand how our
                    process will work, will benefit immensely in the long-term.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    How will we make it deflationary?
                </Text>
                <Text>
                    We will make it deflationary by announcing the royalties and net income that will go
                    into The Grant. The Grant will buy the cheapest token available from the respective
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
                    2/20/22 (The time will be announced in discord and twitter).
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Where can I buy Sol Labs NFT?
                </Text>
                <Text>
                    We would prefer to get listed on Magiceden and Solanary. 
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
