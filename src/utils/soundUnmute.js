/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

const soundUnmute = (selectedDuration, setSound, howlerSound) => {
  switch (selectedDuration) {
    case '4' :
    case '5' :
    case '6' :
      setSound(howlerSound.mute(false))
      break
    default:
      console.log('unmute option not found')
  }
}

export default soundUnmute
