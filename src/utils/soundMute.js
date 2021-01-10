const soundMute = (selectedDuration, setSound, howlerSound) => {
  switch (selectedDuration) {
    case '4' :
      setSound(howlerSound.mute(true))
      break
    case '5' :
      setSound(howlerSound.mute(true))
      break
    case '6' :
      setSound(howlerSound.mute(true))
      break
    default:
      console.log('mute option not found')
  }
}

export default soundMute
