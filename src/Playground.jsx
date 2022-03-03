
// hooks
import { useState } from 'react'
// styles
import './playground.scss'
// helpers
import { createStage } from './helpers/gameHelpers'
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

  const [player, updatePlayerPos, resetPlayer] = usePlayer()
  const [stage, setStage] = useStage(player)

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 })
  }

  const startGame = () => {
    // reset everything
    setStage(createStage())
    resetPlayer()
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
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
