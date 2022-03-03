import { StyledCell } from './StyledCell'
import { TETROMINOS } from '../../helpers/tetrominos'

export default function Cell ({ type }) {
  return (
    <StyledCell type='L' color={TETROMINOS.L.color} />
  )
}
