// !!!!!!!!!!!!!!!! en test !!!!!!!!!!!!!!!!!!!!!

const soundOptions = (soundDuration, selectedDuration, setSoundDuration, mute) => {
  switch (selectedDuration) {
    case '4' :
      setSoundDuration(soundDuration[0].mute(mute))
      break
    case '5' :
      setSoundDuration(soundDuration[1].mute(mute))
      break
    case '6' :
      console.log(soundDuration[2])
      setSoundDuration(soundDuration[2])
      break
    default:
      console.log(soundDuration[2])
  }
}

export default soundOptions
