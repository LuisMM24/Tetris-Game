import './display.scss'

export default function Display ({ gameOver, text }) {
  return (
    <div className={gameOver ? 'display gameOver' : 'display'}>{text}</div>
  )
}
