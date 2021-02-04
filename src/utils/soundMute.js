/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

const soundMute = (selectedDuration, setSound, howlerSound) => {
  switch (selectedDuration) {
    case '4' :
    case '5' :
    case '6' :
      setSound(howlerSound.mute(true))
      break
    default:
      console.log('mute option not found')
  }
}

export default soundMute
