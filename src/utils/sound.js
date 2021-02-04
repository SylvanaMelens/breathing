/**
 * Application d'aide à la respiration
 * @author: Sylvana MELENS - https://sylvanamelens.com
 */

import { Howl, Howler } from 'howler'

import FourSeconds from '../audio/4sec.mp3'
import FiveSeconds from '../audio/5sec.mp3'
import SixSeconds from '../audio/6sec.mp3'
import SixSecondsCustom from '../audio/6secCustom.mp3'

export const sound4 = new Howl({
  src: [FourSeconds],
  loop: true,
  muted: false
})

export const sound5 = new Howl({
  src: [FiveSeconds],
  loop: true,
  muted: false
})

export const sound6 = new Howl({
  src: [SixSeconds],
  loop: true,
  muted: false
})

export const sound6Custom = new Howl({
  src: [SixSecondsCustom],
  loop: true,
  muted: false
})

Howler.volume(0.7)
