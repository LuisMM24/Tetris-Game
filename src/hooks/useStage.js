import { useState } from 'react'
import { createStage } from '../helpers/gameHelpers'

export default function useStage () {
  const [stage, setStage] = useState(createStage())
  return [stage, setStage]
}
