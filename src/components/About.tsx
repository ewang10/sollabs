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
                    discordName: "BigBoss",
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
            <br/>
            <Flex
                direction={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                alignItems="center"
            >
                {
                    this.teamInfo.map(({ image, title, discordName, funFact }) => (
                        <Box marginTop="15px" width="250px">
                            <Image src={image} margin="0 auto" alt={`${title} profile`} objectFit='cover' width="150px" borderRadius="full"/>
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
            <Image src={RoadmapImg} alt="roadmap" objectFit='cover' height="100%" />
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
                <Text {...commonProps}>
                    Sol Labs are an exclusive collection of 1,111 lab NFTs on Solana.
                    We are working with developers, NFT collectors, and entrepreneurs
                    to bring a change to the NFT community. This project is designed
                    to kickstart a new way of utilizing NFTs.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    When is mint date?
                </Text>
                <Text {...commonProps}>
                    TBD.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Where can I buy the Sol Labs?
                </Text>
                <Text {...commonProps}>
                    You can buy Sol labs on (Selected marketplaces).
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is the mint supply?
                </Text>
                <Text {...commonProps}>
                    1,100.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    Why is 11 lab NFTs not minted?
                </Text>
                <Text {...commonProps}>
                    They will be used for giveaways and collaborations.
                </Text>
                <br />
                <Text fontWeight="bold" {...commonProps}>
                    What is the mint price?
                </Text>
                <Text {...commonProps}>
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
