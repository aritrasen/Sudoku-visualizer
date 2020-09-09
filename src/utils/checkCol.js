function checkCol(grid,colIdx,val)
{    
     const col = Array(9).fill(0)
     for(let i=0; i<9;i++)
       col[i] = grid[i][colIdx]
     return !col.includes(val) 
}

export default checkCol;