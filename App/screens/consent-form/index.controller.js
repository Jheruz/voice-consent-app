import { useEffect, useState } from 'react'
import Voice from '@react-native-community/voice'

export default function () {
  const [recording] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults

    return () => {
      Voice.destroy()
    }
  }, [])

  const onSpeechResults = (data) => {
    console.log('recording end', data)
  }

  const setRecording = () => {
    console.log('recording...')
    Voice.start('en-US')
  }

  return {
    playing,
    recording,
    setPlaying,
    setRecording,
  }
}
