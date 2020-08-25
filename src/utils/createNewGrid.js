import shuffle from './shuffle'
import checkRow from './checkRow'
import checkSquare from './checkSquare'
import checkCol from './checkCol'

function backtrackNewGrid(grid, index)
{    if(index===81)
        return true; 
     //console.log(index)
     const onenine = Array(9).fill(0)
     //console.log("back tracking")
     for (let i = 0; i <9; i++) {
           onenine[i]= i+1
           //console.log(vals[i])
        }
     const vals = shuffle(onenine)   
     const row = Math.floor(index/9)
     const col = index%9 
     
    
               
     for(let i=0; i<vals.length; i++)
     {
         
         

          if(checkCol(grid,col,vals[i])&&checkRow(grid,row,vals[i])&&checkSquare(grid,row,col,vals[i]))
          {
           //if(row===1&&col===0)
             //console.log("check"+grid[0][0]+grid[0][1]+grid[0][2]+grid[0][3]+vals[i])

          grid[row][col] = vals[i]
          if(backtrackNewGrid(grid,index+1))
               return true
          grid[row][col] =0     
          }     
     }
      
    return false
}

function createNewGrid()
{
     const grid =  [...Array(9)].map( ()=> [...Array(9).fill(0)])
     backtrackNewGrid(grid,0)
     return grid

}

export default createNewGrid;