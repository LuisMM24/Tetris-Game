
import './playground.scss'
// components
import Stage from '../Stage'
import StartButton from '../StartButton'
import Display from '../Display/Display'

export default function Playground () {
  const blockTypes = ['L', 'J', 'I', '0', 'S', 'T', 'Z']
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
        <div className='playgroundContainer' />
      </main>
    </>
  )
}
