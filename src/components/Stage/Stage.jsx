import Cell from '../Cell'
import './stage.scss'
export default function Stage ({ stage }) {
  // receives array with rows and cols
  return (
    <div>
      {stage.map((row, i) => (
        <div key={i} className='row'>
          {row.map((cell, j) => (
            <Cell key={j} type={cell[0]} />
          ))}
        </div>
      ))}
    </div>
  )
}
