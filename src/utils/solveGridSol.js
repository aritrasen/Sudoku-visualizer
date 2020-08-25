import checkRow from './checkRow'
import checkSquare from './checkSquare'
import checkCol from './checkCol'

function solveGridSol(grid, index, counter)
{     let pos = -1
      for(let i= index; i<81; i++)
      {
          
          const row = Math.floor(index/9) 
          const col = index%9
          if(grid[row][col]===0)
           {
               pos = i
               break
           }    
           
      }
      if(pos===-1)
      {
         counter.count++
         return
      }
      const row = Math.floor(pos/9) 
      const col = pos%9
      

    for(let i=1; i<=9; i++)
    {
          if(checkCol(grid,col,i)&&checkRow(grid,row,i)&&checkSquare(grid,row,col,i))
          {
              grid[row][col] = i;
              solveGridSol(grid,index+1,counter)
              if(counter.count===2)
                 break
              grid[row][col] = 0
          }
    }    

}

export default solveGridSol;