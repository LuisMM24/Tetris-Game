
// hooks
import { useState } from 'react'
// styles
import './playground.scss'

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

  const [player] = usePlayer()
  const [stage, setStage] = useStage(player)

  return (
    <>
      <main>
        <div className='playgroundContainer'>
          <Stage stage={createStage()} />
        </div>
        <aside>
          <div>
            <Display text='Score' />
            <Display text='Rows' />
            <Display text='Level' />
          </div>
          <StartButton />
        </aside>
      </main>
    </>
  )
}
