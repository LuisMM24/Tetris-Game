import { useState } from 'react'
import { checkCollision } from '../helpers/gameHelpers'

import { randomTetromino, TETROMINOS } from '../helpers/tetrominos'

export function usePlayer () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  })
  const resetPlayer = () => {
    setPlayer({
      pos: { x: 5, y: 0 },
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

  const rotate = (matrix, dir) => {
    // make the rows to become cols
    const rotatedTetro = matrix.map((_, index) => (
      matrix.map(col => col[index])
    ))
    // reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map(row => row.reverse())
    return rotatedTetro.reverse()
  }

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player))
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)
    const pos = clonedPlayer.pos.x
    let offset = 1
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset
      offset = -(offset + (offset > 0 ? 1 : -1))
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir)
        clonedPlayer.pos.x = pos
      }
    }
    setPlayer(clonedPlayer)
  }

  return [player, updatePlayerPos, resetPlayer, playerRotate]
}
