import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getLocation } from "../actions";

// Styles
import styled from "styled-components";

const ActionLog = () => {
  const [{ gameState }, dispatch] = useStateValue();
  let errorMsg = gameState.location.error_msg;
  let bus = gameState.bus;

  const renderMessage = () => {
    if (errorMsg) {
      return `WARNING: ${errorMsg}`;
    } else if (bus) {
      return `${bus}`;
    }
  };

  useEffect(() => {
    getLocation(dispatch);
  }, [dispatch]);

  return (
    <ActionLogContainer>
      
    </ActionLogContainer>
  );
};

export default ActionLog;

export const ActionLogContainer = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 20rem;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  margin: 20px 0;
  color: ${({ theme }) => theme.primaryColor};
  overflow-y: auto;
  grid-column: 1 / span 9;
  grid-row: 6 / 8;
  align-self: end;

  ::-webkit-scrollbar {
    width: 1.5rem;
    background-color: ${({ theme }) => theme.darkColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    width: 0.5rem;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    height: 1rem;
    margin-right: 1rem;
  }
`;

const ActionLogText = styled.div`
  padding: 0 2%;
  font-family: ${({ theme }) => theme.secondaryFont};
`;

const GameError = styled.div`
  color: red;
  padding: 1% 2% 2% 2%;
  height: ${({ theme }) => theme.tinyFont};
  font-size: ${({ theme }) => theme.tinyFont};
  font-family: "roboto";
`;

const ActionLine = styled.div`
  margin-bottom: 1%;
  opacity: 0.35;
`;

const CurrentActionLine = styled.div`
  margin-bottom: 1%;
  opacity: 1;
`;

const ActionTitle = styled.span`
  font-family: "roboto";
  font-size: ${({ theme }) => theme.tinyFont};
`;

const ActionDescription = styled.span``;
