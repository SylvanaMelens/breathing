/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

import React, { useState } from 'react'

import StartButton from './components/StartButton'
import SpanData from './components/SpanData'
import Square from './components/Square'
import RadioBtn from './components/RadioBtn'
import SoundIcon from './components/SoundIcon'
import VisibilityIcon from './components/VisibilityIcon'
import OptionTitle from './components/OptionTitle'
import { sound4, sound5, sound6 } from './utils/sound'
import soundUnmute from './utils/soundUnmute'
import soundMute from './utils/soundMute'

import './App.css'
import useVisibility from './hooks/useVisibility'

const App = () => {
  // DEMARRAGE ET DONNEES GLOBALES DE DUREE AVANT LE DEMARRAGE

  // start = quand on a appuyé sur play
  const [start, setStart] = useState(true)

  // options de durée, options principales à sélectionner avant de pouvoir appuyer sur play
  const [durationOptions, setDurationOptions] = useState(true)

  // class attribuée à la ball pour déterminer sa position initiale
  const [dotClass, setDotClass] = useState('start-position')

  // durées possibles en secondes pour les boutons radio; permet d'assigner la class pour l'animation en fonction des secondes sélectionnées
  const durations = [4, 5, 6]

  // option radio sélectionnée à comparer avec durations dans RadioBtn
  // initialisée à zéro pour obliger l'user à faire un choix pour que play s'affiche
  const [selectedDuration, setSelectedDuration] = useState(0)

  // récupère la valeur de l'option sélectionnée
  const handleChange = e => {
    setSelectedDuration(e.target.value)
  }

  // OPTIONS QUAND APPLI DEMARREE

  // AFFICHAGE TEXTES
  const [visibilityOption, breathingAction, handleVisibility] = useVisibility()

  // SON - ACTIVATION / DESACTIVATION
  // déclencheur de condition
  const [soundOption, setSoundOption] = useState(true)

  // sons de différentes durées importés du Howler (utils/sounds)
  const [sound4sec, setSound4sec] = useState(sound4)
  const [sound5sec, setSound5sec] = useState(sound5)
  const [sound6sec, setSound6sec] = useState(sound6)
  // const [sound6secCustom, setSound6secCustom] = useState(sound6Custom)

  // activation du son en fonction de la sélection de l'icone
  const handleSound = () => {
    if (soundOption) {
      setSoundOption(false)
      soundMute(selectedDuration, setSound4sec, sound4)
      soundMute(selectedDuration, setSound5sec, sound5)
      soundMute(selectedDuration, setSound6sec, sound6)
    } else {
      setSoundOption(true)
      soundUnmute(selectedDuration, setSound4sec, sound4)
      soundUnmute(selectedDuration, setSound5sec, sound5)
      soundUnmute(selectedDuration, setSound6sec, sound6)
    }
  }

  const handleClick = () => {
    if (start) {
      setStart(false)
      setDotClass(`animateBall-${selectedDuration}sec`)
      setDurationOptions(false)
      setSoundOption(true)
      // A REFACTORER
      switch (selectedDuration) {
        case '4' :
          setSound4sec(sound4.play())
          setSound4sec(sound4.mute(false))
          break
        case '5' :
          setSound5sec(sound5.play())
          setSound5sec(sound5.mute(false))
          break
        case '6' :
          setSound6sec(sound6.play())
          setSound6sec(sound6.mute(false))
          break
        default:
          console.log(sound4sec, sound5sec, sound6sec)
      }
    } else {
      setStart(true)
      setDotClass('start-position')
      setDurationOptions(true)
      // A REFACTORER
      switch (selectedDuration) {
        case '4' :
          setSound4sec(sound4.stop())
          break
        case '5' :
          setSound5sec(sound5.stop())
          break
        case '6' :
          setSound6sec(sound6.stop())
          break
        default:
          console.log(sound4sec, sound5sec, sound6sec)
      }
      setSelectedDuration(0)
    }
  }

  return (
    <div className='App'>
      <div className='main'>
        <SpanData />
        <div className='options'>
          {durationOptions
            ? (
              <div className='options-title'>
                <OptionTitle
                  title='sélectionner la durée (par côté) puis appuyer sur play'
                />
                <RadioBtn
                  durations={durations}
                  onChange={handleChange}
                  selected={selectedDuration}
                />
              </div>
              )
            : (
              <div className='square-options'>
                <SoundIcon
                  option={soundOption}
                  handleSound={handleSound}
                />{' '}
                <VisibilityIcon
                  option={visibilityOption}
                  handleVisibility={handleVisibility}
                />
              </div>
              )}
        </div>
        <Square
          inspirer={breathingAction.inspirer}
          expirer={breathingAction.expirer}
          bloquer={breathingAction.bloquer}
          dotClass={dotClass}
        />
        {selectedDuration > 3 && (<StartButton handleClick={handleClick} start={start} />)}

      </div>
    </div>
  )
}

export default App
