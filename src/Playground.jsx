
// hooks
import { useState } from 'react'
// styles
import './playground.scss'
// helpers
import { createStage, checkCollision } from './helpers/gameHelpers'
// custom hooks
import { useStage } from './hooks/useStage'
import { usePlayer } from './hooks/usePlayer'
// components
import Stage from './components/Stage'
import StartButton from './components/StartButton'
import Display from './components/Display/Display'

export default function Playground () {
  const [dropTime, setDroptime] = useState(null)
  const [gameOver, setGameover] = useState(false)

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
  const [stage, setStage] = useStage(player, resetPlayer)

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  const startGame = () => {
    // reset everything
    setGameover(false)
    setStage(createStage())
    resetPlayer()
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER')
        setGameover(true)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        return movePlayer(-1)
      }
      if (keyCode === 39) {
        return movePlayer(1)
      }
      if (keyCode === 40) {
        return dropPlayer()
      }
      if (keyCode === 38) {
        return playerRotate(stage, 1)
      }
    }
  }

  return (
    <>
      <main className='tetrisWrapper' role='button' tabIndex='0' onKeyDown={e => move(e)}>
        <div className='playgroundContainer'>
          <Stage stage={stage} />
        </div>
        <aside>
          {gameOver
            ? (
              <Display gameOver text='Game over' />
              )
            : (
              <div>
                <Display text='Score' />
                <Display text='Rows' />
                <Display text='Level' />
              </div>
              )}
          <StartButton callback={startGame} />
        </aside>
      </main>
    </>
  )
}
