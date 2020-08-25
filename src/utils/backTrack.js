import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {changeGrid} from '../redux/action'
import checkRow from './checkRow'
import checkSquare from './checkSquare'
import checkCol from './checkCol'

function backTrack(grid,index,arr)
{
    let pos = -1
    
    
    for(let i= index; i<81; i++)
    {
        
        let row = Math.floor(i/9) 
        let col = i%9

        if(grid[row][col]===0)
         {
             pos = i
             break
         }    
         
    }
    if(pos===-1)
    {
       return true
    }
    const row = Math.floor(pos/9) 
    const col = pos%9
    

  for(let i=1; i<=9; i++)
  {
        if(checkCol(grid,col,i)&&checkRow(grid,row,i)&&checkSquare(grid,row,col,i))
        {
            grid[row][col] = i
            arr.push({row:row,col:col,val:i})
            if(backTrack(grid,index+1,arr))
            {
                return true
            }
            else
            {
            grid[row][col] =0
            arr.push({row:row,col:col,val:0})
            }
        }
  }
  return false    
}

export default backTrack;