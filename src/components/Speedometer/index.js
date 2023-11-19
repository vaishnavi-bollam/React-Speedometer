// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerateButton = () => {
    this.setState(prevState => {
      const newSpeed = prevState.count + 10
      return {count: newSpeed <= 200 ? newSpeed : 200}
    })
  }

  brakeButton = () => {
    this.setState(prevState => {
      const newSpeed = prevState.count - 10
      return {count: newSpeed >= 0 ? newSpeed : 0}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1>
          Speed is <span>{count}</span>mph
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" onClick={this.accelerateButton}>
            Accelerate
          </button>
          <button type="button" onClick={this.brakeButton}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
