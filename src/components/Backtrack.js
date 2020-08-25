import React from 'react'
import backTrack from '../utils/backTrack'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {solveGrid} from '../redux/action'

import Button from '../styles/Button'
function myListDispatch(grid,dispatch) {
    const lists = []
    backTrack(grid,0,lists)
    const actionLists = lists.map(a=> solveGrid(a))
    for(let i=0; i<actionLists.length;i++)
    {
      setTimeout(() =>  dispatch(actionLists[i]), 60000)
    }
    
    
  }
const Backtrack = ()=> {
    
    const grid = useSelector(state=> state.grid?state.grid.slice().map( function(row){ return row.slice(); }):null)
    const dispatch  = useDispatch()
    return(<Button onClick={() => myListDispatch(grid,dispatch)} > Solve </Button>)
}

export default Backtrack;