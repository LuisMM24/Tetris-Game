import { useState, useEffect } from 'react'
import { createStage } from '../helpers/gameHelpers'

export function useStage (player, resetPlayer) {
  const [stage, setStage] = useState(createStage())
  useEffect(() => {
    const updateStage = prevStage => {
      // first flush the stage
      const newStage = prevStage.map(row => (
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      ))
      // then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`
            ]
          }
        })
      })
      // then check if we collided
      if (player.collided) {
        resetPlayer()
      }
      return newStage
    }
    setStage(prevStage => updateStage(prevStage))
  }, [player])
  return [stage, setStage]
}
