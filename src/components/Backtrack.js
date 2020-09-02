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
          createNewGrid(grid, dispatch);
        }}
      >
        New Game
      </Button>
      <Button>Steps Remaining: {listCount ? listCount : "Unknown"}</Button>
    </React.Fragment>
  );
};

export default Backtrack;
