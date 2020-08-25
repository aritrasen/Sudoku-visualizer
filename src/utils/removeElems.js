import shuffle from './shuffle'
import solveGridSol from './solveGridSol'
function removeElems(grid)
{
    const positions = Array(81).fill(0)
     for (let i = 0; i <81; i++) {
           positions[i]= i+1
        }
    shuffle(positions)
    for(let i=0 ; i<81; i++)
    {
        const row = Math.floor(i/9)
        const col = i%9
        let backup = grid[row][col]
        grid[row][col] = 0
        const counter = {count:0}
        solveGridSol(grid,i,counter)
        if(counter.count===2)
        {
               grid[row][col] = backup
        }


    }
    
    return grid
}

export default removeElems;