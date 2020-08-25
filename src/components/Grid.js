import React,{useCallback, useEffect} from 'react'

import Block from './Block'
import Container from '../styles/Container'
import Row from '../styles/Row'
import { useDispatch } from 'react-redux'
import createGrid from '../redux/action'

const Grid = ()=> {
  // Other stuff on the way
  console.log("I am being called")
  const dispatch = useDispatch()
  const create = useCallback(() => dispatch(createGrid()),[dispatch])
  useEffect(() => {
    create()
  })
  return (
    <Container>
      {[...Array(9)].map((_, rowIndex) => (
          <Row >
            {[...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            }
          </Row>
        ))
      }
    </Container>
  )
}

export default Grid;