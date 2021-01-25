import { useState } from 'react'

const useVisibility = () => {

  // AFFICHAGE TEXTES
  // déclencheur de condition
  const [visibilityOption, setVisibilityOption] = useState(true)
    // nom des classes affichant le texte au démarrage
  const [breathingAction, setBreahingAction] = useState({
    inspirer: 'inspirer',
    expirer: 'expirer',
    bloquer: 'bloquer'
  })
  // event permettant de changer le nom des classes au clic sur l'icone oeil
  const handleVisibility = () => {
    if (visibilityOption) {
      setVisibilityOption(false)
      setBreahingAction({
        inspirer: '',
        expirer: '',
        bloquer: 'bloquer-invisible'
      })
    } else {
      setVisibilityOption(true)
      setBreahingAction({
        inspirer: 'inspirer',
        expirer: 'expirer',
        bloquer: 'bloquer'
      })
    }
  }
  return [visibilityOption, breathingAction, handleVisibility]
}

export default useVisibility
