import React, { useState } from "react";
import backTrack from "../utils/backTrack";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  solveGrid,
  createBacktrackActionListCount,
  createGrid,
} from "../redux/action";

import Button from "../styles/Button";
import Row from "../styles/Row";
import DummyButton from "../styles/DummyButton";
import SideMessage from "../styles/SideMessage";

function myListDispatch(grid, dispatch) {
  const delay = 6;
  const lists = [];
  backTrack(grid, 0, lists);
  const actionLists = lists.map((a) => solveGrid(a));
  dispatch(createBacktrackActionListCount(actionLists.length));
  for (let i = 0; i < actionLists.length; i++) {
    setTimeout(() => dispatch(actionLists[i]), delay);
  }
}

function createNewGrid(grid, dispatch) {
  dispatch(createGrid());
}

const Backtrack = () => {
  const [status, setStatus] = useState("Solve");
  const [guidelineFlag, setGuidelineFlag] = useState(false);
  const dispatch = useDispatch();
  const grid = useSelector((state) =>
    state.grid
      ? state.grid.slice().map(function (row) {
          return row.slice();
        })
      : null
  );
  let listCount = useSelector((state) => state.listCount);

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setStatus("Solving...");
          myListDispatch(grid, dispatch);
        }}
        disabled={listCount > 0}
        colorDisabled={
          listCount > 0 ? { background: "#D3D3D3", fontColor: "#808080" } : null
        }
      >
        {listCount === 0 ? "Solved!" : status}
      </Button>
      <Button
        disabled={listCount > 0}
        colorDisabled={
          listCount > 0 ? { background: "#D3D3D3", fontColor: "#808080" } : null
        }
        onClick={() => {
          setStatus("Solve");
          createNewGrid(grid, dispatch);
        }}
      >
        New Game
      </Button>
      <Row>
        <DummyButton>
          Steps Remain: {listCount ? listCount : "Unknown"}
        </DummyButton>
        <DummyButton onClick={() => setGuidelineFlag(!guidelineFlag)}>
          {!guidelineFlag ? "Show Guidelines" : "Hide Guidlines"}
        </DummyButton>
      </Row>
      {guidelineFlag && (
        <Row>
          <SideMessage>
            <strong>Solve button</strong>{" "}
            <p>
              This will start the game. You cannot interrupt the game in the
              middle. You can start a new game only after the current game is
              finished.
            </p>
            <strong>New Game</strong>{" "}
            <p>
              Every time you click "New Game" button, a new setting of numbers
              will show to play with. You can then click "Solve" button to start
              the game. The button "New Game" will be disabled if a game is
              already in progress. You can also click on a block to insert numbers 
              from your keyboard and play the game. Press ESC to undo.
            </p>
            <strong>Step Remain</strong>{" "}
            <p>
              It is here to show the steps remaining before your current game
              finishes.
            </p>
          </SideMessage>
        </Row>
      )}
    </React.Fragment>
  );
};

export default Backtrack;
