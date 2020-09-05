import createNewGrid from "../utils/createNewGrid.js";
import createGrid from "./action.js";
import removeElems from "../utils/removeElems.js";
import checkCol from "../utils/checkCol.js";
import checkRow from "../utils/checkRow.js";
import checkSquare from "../utils/checkSquare.js";
function reducer(state = {}, action) {
  switch (action.type) {
    case "CREATE_GRID":
      let fullGrid = createNewGrid();
      let newGrid = removeElems(fullGrid);
      return {
        ...state,
        grid: newGrid.slice().map(function (row) {
          return row.slice();
        }),
        solGrid: newGrid.slice().map(function (row) {
          return row.slice();
        }),
        activeRow: 9,
        activeCol: 9,
      };
    case "CHANGE_GRID": {
      let gridNew = [...state.grid];
      let solGrid = [...state.solGrid];

      let row = action.payload.row;
      let col = action.payload.col;
      let val = action.payload.val;
      //console.log(action.payload.row);
      if (val === 0) {
        gridNew[row][col] = val;
        //console.log("Action", solGrid[row][col]);
        return { ...state, grid: gridNew, solGrid: solGrid };
      } else if (
        checkCol(gridNew, col, val) &&
        checkRow(gridNew, row, val) &&
<<<<<<< HEAD
        checkSquare(gridNew, row, col, val)&&0<=val&&val<=9
=======
        checkSquare(gridNew, row, col, val)
>>>>>>> 295564cff99b3e7c1dad5ec40fb46a3a23abf9a6
      ) {
        gridNew[row][col] = val;
        //console.log("Action", solGrid[row][col]);
        return {
          ...state,
          grid: gridNew,
          solGrid: solGrid,
          activeRow: 9,
          activeCol: 9,
        };
      } else {
        alert("Incorrect Option");
        return {
          ...state,
          grid: gridNew,
          solGrid: solGrid,
          activeRow: 9,
          activeCol: 9,
        };
      }
    }
    case "BACKTRACK": {
      let gridNew = state.grid.slice().map(function (row) {
        return row.slice();
      });
      let solGrid = state.solGrid.slice().map(function (row) {
        return row.slice();
      });
      let newListCount = state.listCount - 1;
      let row = action.payload.row;
      let col = action.payload.col;
      let val = action.payload.val;
      //console.log(action.payload.row);
      gridNew[row][col] = val;
      return {
        ...state,
        grid: gridNew,
        solGrid: solGrid,
        activeRow: row,
        activeCol: col,
        listCount: newListCount,
      };
    }
    case "CREATE_ACTION_LIST_COUNT":
      return {
        ...state,
        listCount: action.payload.listCount,
      };
    default:
      return state;
  }
}

export default reducer;
