import { useState } from 'react'

export default function () {
  const [recording, setRecording] = useState(false)

  return {
    recording,
    setRecording,
  }
}
