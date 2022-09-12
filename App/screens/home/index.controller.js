import { useState } from 'react'

import routeList from '../../routes/list'

export default function (navigation) {
  const [name, setName] = useState('')
  const [language, setLanguage] = useState('')

  const onNext = () => {
    navigation.navigate(routeList.CONSENT_FORM)
  }

  return {
    language,
    name,
    onNext,
    setLanguage,
    setName,
  }
}
