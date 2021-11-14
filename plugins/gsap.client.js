import { gsap } from 'gsap'
// Nuxt throws an error if Draggable uses import syntax
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger')
const { EasePack } = require('gsap/dist/EasePack')
// Must register the plugin within process.client or Nuxt crashes because `gsap.registerPlugin` requires the DOM
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(EasePack)
}

export default ({ app }, inject) => {
  inject('gsap', gsap)
  inject('scrollTrigger', ScrollTrigger)
}
