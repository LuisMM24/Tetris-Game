
import './playground.scss'

import { createStage } from '../../helpers/gameHelpers'
// components
import Stage from '../Stage'
import StartButton from '../StartButton'
import Display from '../Display/Display'

export default function Playground () {
  return (
    <>
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton />
      </aside>
      <main>
        <div className='playgroundContainer'>
          <Stage stage={createStage()} />
        </div>
      </main>
    </>
  )
}
