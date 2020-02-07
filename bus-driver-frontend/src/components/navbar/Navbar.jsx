import React from "react";
import styled from "styled-components";
import './NavBar.css'

function NavBar() {
    return (
        <div className="bgimg">
            <div className="topnav">
                <div className="header">Crazy Bus Driver Game</div>
                <TheNav>
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                </TheNav>
            </div>
        </div>
    );
}

export default NavBar;

const TheNav = styled.nav`
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 30px;
`;