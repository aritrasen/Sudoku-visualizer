const createGrid = ()=> ({type: "CREATE_GRID"})
const changeGrid = (props) => ({type: "CHANGE_GRID", payload:{row: props.row,col: props.col,val: props.val}})
const solveGrid = (props) => ({type: "BACKTRACK", payload:{row: props.row,col: props.col,val: props.val}})

export default createGrid;
export {changeGrid};
export {solveGrid};