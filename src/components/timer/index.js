import React from 'react'
import './styles.css'

class Timer extends React.Component {
    constructor (props) {
       super(props);
     this.state = {
        isButtonDisabled: false,
     secondsElapsed: 1500000 / 1000
    };
}
    getMinutes() {
        return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(
          -2
        );
      }
    
      getSeconds() {
        return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
      }
    
    startTime = () => {
        
        this.setState({ isButtonDisabled: true });
        this.countdown = setInterval(() => {
          this.setState(({ secondsElapsed }) => ({
            secondsElapsed: secondsElapsed - 1
          }));
        }, 1000);
      };
      resetTime() {
        clearInterval(this.countdown);
        this.setState({
          secondsElapsed: 1500000 / 1000,
          isButtonDisabled: false
        });
      }
      stopTime() {
        clearInterval(this.countdown);
        this.setState({ isButtonDisabled: false });
      }
   
    render () {
      return (
        <div className='timer'>
          <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
         <div>
            <startbutton onClick={this.startTime.bind(this)} disabled={this.state.isButtonDisabled}>Start</startbutton>
            <stopbutton onClick={this.stopTime.bind(this)}>Stop</stopbutton>
            <resetbutton onClick={this.resetTime.bind(this)}>Reset</resetbutton>
          </div>
        </div>
      )
    }
  }
  
        
    


export default Timer