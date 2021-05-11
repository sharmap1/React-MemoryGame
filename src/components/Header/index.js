import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";
// import { RiRestartLine } from "react-icons/ri";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <>
      <h1>Memory Game</h1>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          <div className="reshuffle">
            <button onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span> {bestScore}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Header;
