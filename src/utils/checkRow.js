function checkRow(grid,rowIdx,val)
{
     return !grid[rowIdx].includes(val)
}

export default checkRow;