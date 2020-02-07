import React from "react";
import styled from "styled-components";


// 

const Landing = () => {
  return (
    <LandingContainer>
      <LandingHeader>Welcome to Crazy Bus Driver!</LandingHeader>
      <LandingParagraph>
        Crazy Bus Driver is a game where you are navigating the bus.  The goal of the game is to pick and drop off passengers without any errors.  Good luck!
      </LandingParagraph>
      <LandingImgContainer>
        
      </LandingImgContainer>
      
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.smallFont};
  margin-bottom: 20px;
`;

const LandingHeader = styled.h2`
  font-size: ${({ theme }) => theme.mediumFont};
  font-family: "Roboto";
  margin: 20px 0;
`;

const LandingParagraph = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: ${({ theme }) => theme.mediumFont};
`;


const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;


