import React, { Component } from 'react'

import { Timeline, helpers } from '../src'

import { boxStyles } from './styles'

const { transition } = helpers

const Animated = Timeline({
  direction: 'alternate',
  iterations: 2,
})

// or if you prefer shorthand ver.

// Timeline({ ...timingProps }).value({ ...animationProps })

export class Basic extends Component {
  componentDidMount() {
    Animated.value({
      elements: this.one,
      opacity: transition({ from: 0.2, to: 0.8 }),
      width: '30%',
      height: '20%',
      rotate: {
        value: transition({ from: 360, to: 180 }),
      },
    }).start()

    console.log(helpers.getEasings())
  }

  render() {
    return (
      <div>
        <div
          ref={one => (this.one = one)}
          style={{ margin: '0 auto', width: '50%', ...boxStyles }}
        />
      </div>
    )
  }
}
