import { useState } from 'react'

import { randomTetromino } from '../helpers/tetrominos'

export function usePlayer () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  })
  const resetPlayer = () => {
    setPlayer({
      pos: { x: 0, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false

    })
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    const { pos } = player
    const newPos = {
      newX: pos.x += x,
      newY: pos.y += y

    }
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: newPos.newX,
        y: newPos.newY
      },
      collided: collided
    }))
  }

  return [player, updatePlayerPos, resetPlayer]
}
