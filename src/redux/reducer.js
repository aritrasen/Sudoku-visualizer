import createNewGrid from '../utils/createNewGrid.js'
import createGrid from './action.js'
import removeElems from '../utils/removeElems.js'
import checkCol from '../utils/checkCol.js'
import checkRow from '../utils/checkRow.js'
import checkSquare from '../utils/checkSquare.js'
function reducer( state={}, action)
{
    switch(action.type)
    {
        case "CREATE_GRID" : 
        let fullGrid = createNewGrid()
        let newGrid = removeElems(fullGrid)
        return{ ...state, grid: newGrid.slice().map( function(row){ return row.slice(); }),solGrid:newGrid.slice().map( function(row){ return row.slice(); }), activeRow:9,activeCol:9 }
        case "CHANGE_GRID":{ 
                            let gridNew = [...state.grid]
                            let solGrid = [...state.solGrid]

                            let row = action.payload.row
                            let col = action.payload.col
                            let val = action.payload.val
                            console.log(action.payload.row)
                            if(val===0)
                            {
                                gridNew[row][col] = val
                                console.log("Action",solGrid[row][col])
                                return {...state, grid: gridNew, solGrid: solGrid} 
                            }
                            else if( checkCol(gridNew,col,val)&&checkRow(gridNew,row,val)&&checkSquare(gridNew,row,col,val))
                            {
                                   gridNew[row][col] = val
                                   console.log("Action",solGrid[row][col])
                                   return {...state, grid: gridNew, solGrid: solGrid, activeRow: 9, activeCol: 9}   
                            }
                            else
                            {
                                alert("Incorrect Option")
                                return {...state, grid: gridNew, solGrid: solGrid,activeRow:9 , activeCol: 9} 
                            }
                            
                        }
        case "BACKTRACK": { 
        let gridNew = state.grid.slice().map( function(row){ return row.slice(); })
        let solGrid = state.solGrid.slice().map( function(row){ return row.slice(); })

        let row = action.payload.row
        let col = action.payload.col
        let val = action.payload.val
        console.log(action.payload.row)
        gridNew[row][col] = val
        return {...state, grid: gridNew, solGrid: solGrid,activeRow:row,activeCol:col} 
         }                      
        default:
            return state
    }
} 

export default reducer;