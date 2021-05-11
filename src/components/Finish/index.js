import React from "react";
import "./style.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  StylesProvider,
} from "@material-ui/core";

const Finish = ({ showModal, moves, bestScore, handleRestart }) => {
  return (
    <>
      <StylesProvider>
        <Dialog
          open={showModal}
          disableBackdropClick
          disableEscapeKeyDown
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <h2>🙂 Memory Game ⚛️</h2>
          <DialogTitle id="alert-dialog-title">
            Hurray !!! You completed the game !! 👏👏👏
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You got {moves} moves. Your best score is {bestScore}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRestart} color="primary">
              Restart
            </Button>
          </DialogActions>
        </Dialog>
      </StylesProvider>
    </>
  );
};

export default Finish;
