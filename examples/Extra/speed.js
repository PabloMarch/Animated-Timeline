import React from 'react'

import { boxStyles } from '../styles'

import { Timeline, helpers } from '../../src'

const timeline = Timeline({
  direction: 'alternate',
  easing: 'easeInOutSine',
  iterations: Infinity,
  speed: 0.5
})

export class ChangeSpeed extends React.Component {
  timer = null

  componentDidMount() {
    timeline.animate({
      element: '#speed-one',
      scale: helpers.transition({
        from: 2,
        to: 1
      })
    }).animate({
      element: '#speed-two',
      rotate: '360deg',
      offset: helpers.startBefore(1200)
    }).start()

    // Change the speed after 3s
    setTimeout(() => {
      timeline.getAnimations().forEach(animation => {
        animation.setSpeed(0.2)
      })
    }, 3000)
  }

  render() {
    return (
      <div>
        <div id='speed-one' style={boxStyles} />
        <div id='speed-two' style={boxStyles} />
      </div>
    )
  }
}