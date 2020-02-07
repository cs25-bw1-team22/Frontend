import React, { useEffect } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { getMap } from "../../actions";
import styled from "styled-components";

import Room from "./Room";
import Player from "../player/Player";
import Bus from "./Bus";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  return (
    <GameMapContainer>
      <Player />
      {mapState["map"].length > 0 &&
        mapState["map"].map(room => {
          return <Room key={room.id} room={room} />;
        })}
      <Bus x={1} y={1} />
      <Bus x={6} y={0} />
      <Bus x={6} y={9} />
      <Bus x={2} y={7} />
      <Bus x={3} y={5} />
      <Bus x={6} y={5} />
    </GameMapContainer>
  );
};

export default GameMap;

const GameMapContainer = styled.div`
  width: 640px;
  height: 640px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(10, 64px);
  grid-template-rows: repeat(10, 64px);
  grid-columns: 1 / 6;
  grid-rows: 1 / 6;
`;
