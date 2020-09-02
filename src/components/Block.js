import React,{useState,useEffect} from 'react'
import BlockContainer from '../styles/BlockContainer'
import Input from '../styles/InputContainer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {changeGrid} from '../redux/action'
import useKeypress from '../hooks/useKeypress'

const Block = ({ rowIndex, colIndex }) => {
  const [isInputActive, setIsInputActive] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const val = useSelector(state=> state.grid? state.grid[rowIndex][colIndex]:0)
  const solVal = useSelector(state=> state.solGrid? state.solGrid[rowIndex][colIndex]:1)
  const activeRow = useSelector(state => state.activeRow)
  const activeCol = useSelector(state => state.activeCol)
  const isEditable = solVal===0
  const selected = activeRow===rowIndex&&activeCol===colIndex
  console.log("row",rowIndex,"col",colIndex,"edit",isEditable)
  console.log("activeRow", activeRow, "activeCol",activeCol,"selected",selected)
  const dispatch = useDispatch()
  const enter = useKeypress('Enter');
  const esc = useKeypress('Escape');
  useEffect(() => {

    if (isInputActive) {

      // if Enter is pressed, save the text and case the editor

      if (enter) {

        
        dispatch(changeGrid({row:rowIndex,col:colIndex, val:inputValue}))
        setIsInputActive(false);

      }

      // if Escape is pressed, revert the text and close the editor

      if (esc) {

        

        setIsInputActive(false);

      }

    }

  }, [enter, esc]);
  return isInputActive?<Input type='number' value={inputValue}

  onChange={(e) => setInputValue(parseInt(e.target.value))}/>:<BlockContainer chosen = {selected} isPuzzle ={!isEditable} onClick= {()=>isEditable?setIsInputActive(!isInputActive): null}>{val===0 ? "":val}</BlockContainer>
}

export default Block