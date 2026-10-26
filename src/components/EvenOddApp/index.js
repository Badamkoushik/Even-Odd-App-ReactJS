import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {countValue: 0}

  onClicked = () => {
    this.setState(prevState => ({
      countValue: prevState.countValue + Math.ceil(Math.random() * 100),
    }))
  }

  changeType = () => {
    const {countValue} = this.state
    if (countValue % 2 === 0 || countValue === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {countValue} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Count {countValue}</h1>
          <p className="main-paragraph">Count is {this.changeType()}</p>
          <button className="btn" onClick={this.onClicked} type="button">
            Increment
          </button>
          <p className="sub-paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
