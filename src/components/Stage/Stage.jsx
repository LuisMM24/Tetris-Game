import Cell from '../Cell'
import './stage.scss'
export default function Stage ({ stage }) {
  console.log(stage[0].length)
  // receives array with rows and cols
  return (
    <>
      {stage.map((row, i) => (
        row.map((cell, j) => (
          <Cell key={j} type='L' />
        ))
      ))}
    </>
  )
}
