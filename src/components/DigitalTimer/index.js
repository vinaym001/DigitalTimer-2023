import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {runningStatus: false, timer: 25}

  onClickBtn = () => {
    this.setState(prevState => ({
      runningStatus: !prevState.runningStatus,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1,
    }))
  }

  onIncrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  render() {
    const {runningStatus, timer} = this.state
    const startOrPauseImgUrl = runningStatus
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const startOrPauseAltText = runningStatus ? 'play icon' : 'pause icon'
    const playOrPauseText = runningStatus ? 'start' : 'Pause'
    return (
      <div className="bg-container">
        <div className="timer-img-container">
          <p className="timer-counter">25:00</p>
        </div>
        <div className="start-pause-container">
          <div className="start-pause-container">
            <button type="button" className="btn" onClick={this.onClickBtn}>
              <img
                src={startOrPauseImgUrl}
                alt={startOrPauseAltText}
                className="img-btn"
              />
            </button>
            <p className="text">{playOrPauseText}</p>
          </div>
          <div className="start-pause-container">
            <button
              type="button"
              className="btn"
              onClick={this.onClickResetBtn}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="img-btn"
              />
            </button>
            <p className="text">Reset</p>
          </div>
        </div>

        <div>
          <p className="text">Set Timer limit </p>
          <div className="start-pause-container">
            <button
              className="incre btn"
              type="button"
              onClick={this.onDecrement}
            >
              -
            </button>
            <p className="timer-box">{timer}</p>
            <button
              className="decre btn"
              type="button"
              onClick={this.onIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
