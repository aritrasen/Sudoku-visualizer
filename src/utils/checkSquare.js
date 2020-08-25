function checkSquare(grid,rowIdx,colIdx,val)
{
       let startR = Math.floor(rowIdx/3)*3
       let startC= Math.floor(colIdx/3)*3
       for(let i=0; i<=2; i++)
       for(let j=0; j<=2; j++)
       {
            if(grid[startR+i][startC+j]===val)
              return false
       }

       return true
}

export default checkSquare;