import './startButton.scss'

export default function StartButton ({ callback }) {
  return (
    <button onClick={callback}>Start game</button>
  )
}
