/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

// !!!!!EN TEST!!!!

import { useState } from 'react'
import { sound4, sound5, sound6, sound6Custom } from '../utils/sound'
import soundUnmute from '../utils/soundUnmute'
import soundMute from '../utils/soundMute'


const useSound = () => {
  // option radio sélectionnée à comparer avec durations dans RadioBtn
  // initialisée à zéro pour obliger l'user à faire un choix pour que play s'affiche
  const [selectedDuration, setSelectedDuration] = useState(0)

  // récupère la valeur de l'option sélectionnée
  const handleChange = e => {
    setSelectedDuration(e.target.value)
  }

  // déclencheur de condition
  const [soundOption, setSoundOption] = useState(true)

  // sons de différentes durées importés du Howler (utils/sounds)
  const [sound4sec, setSound4sec] = useState(sound4)
  const [sound5sec, setSound5sec] = useState(sound5)
  const [sound6sec, setSound6sec] = useState(sound6)
  const [sound6secCustom, setSound6secCustom] = useState(sound6Custom)

  // activation du son en fonction de la sélection de l'icone
  const handleSound = () => {
    if (soundOption) {
      setSoundOption(false)
      soundMute(selectedDuration, setSound4sec, sound4)
      soundMute(selectedDuration, setSound5sec, sound5)
      // soundMute(selectedDuration, setSound6sec, sound6)
      soundMute(selectedDuration, setSound6secCustom, sound6Custom)
    } else {
      setSoundOption(true)
      soundUnmute(selectedDuration, setSound4sec, sound4)
      soundUnmute(selectedDuration, setSound5sec, sound5)
      // soundUnmute(selectedDuration, setSound6sec, sound6)
      soundUnmute(selectedDuration, setSound6secCustom, sound6Custom)
    }
  }
  return [selectedDuration, handleChange, soundOption, sound4sec, sound5sec, sound6sec, handleSound]
}

export default useSound
