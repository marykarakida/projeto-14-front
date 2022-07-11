import styled from "styled-components";
import Navbar from "../elements/Header/Navbar";
import Footer from "../elements/Footer";
import FAQ from "../elements/FAQ";
import HowItWorks from "../elements/HowItWorks";

export default function HowItWorksPage() {
    return (
        <>
            <Navbar />
            <Container>
                <Title className="bg-dark text-white">How it Works</Title>
                <HowItWorks />
                <FAQ />
                <Footer />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding-top: 60px;
`;

const Title = styled.h1`
    padding: 20px;
    font-size: 46px;
    font-weight: 700;
    text-align: center;
`;
