import { useState } from 'react'

import routeList from '../../routes/list'

export default function ({ navigation, route }) {
  const [name, setName] = useState('')
  const [language, setLanguage] = useState('')
  const doneForm = route.params?.doneForm || false

  const onNext = () => {
    navigation.navigate(routeList.CONSENT_FORM)
  }

  const onAddAgain = () => {
    navigation.navigate(routeList.HOME_TAB)
  }

  const onViewConsents = () => {
    navigation.navigate(routeList.HOME_TAB) // reset home route params
    navigation.navigate(routeList.CONSENTS_TAB) // navigate to all consents screen
  }

  return {
    doneForm,
    language,
    name,
    onAddAgain,
    onNext,
    onViewConsents,
    setLanguage,
    setName,
  }
}
