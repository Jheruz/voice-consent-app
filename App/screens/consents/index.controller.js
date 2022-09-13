import { useState } from 'react'

export default function () {
  const [playing, setPlaying] = useState(null)

  const data = []

  const keyExtractor = (item, index) => index.toString()

  return {
    data,
    playing,
    setPlaying,
    keyExtractor,
  }
}
