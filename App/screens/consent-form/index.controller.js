import { useState } from 'react'

export default function () {
  const [recording, setRecording] = useState(false)
  const [playing, setPlaying] = useState(false)

  return {
    playing,
    recording,
    setPlaying,
    setRecording,
  }
}
