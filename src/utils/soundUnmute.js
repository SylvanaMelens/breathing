const soundUnmute = (selectedDuration, setSound, howlerSound) => {
  switch (selectedDuration) {
    case '4' :
      setSound(howlerSound.mute(false))
      break
    case '5' :
      setSound(howlerSound.mute(false))
      break
    case '6' :
      setSound(howlerSound.mute(false))
      break
    default:
      console.log('unmute option not found')
  }
}

export default soundUnmute
