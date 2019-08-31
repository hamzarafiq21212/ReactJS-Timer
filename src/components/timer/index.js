import React from 'react'
import './styles.css'  

class Timer extends React.Component {
    constructor (props) {
       super(props);

     this.state = {
       showButton: true,
        isButtonDisabled: false,
       
          secondsElapsed: 1500000 / 1000,
          secondsElapsed2: 300000 / 1000,
          secondsElapsed3: 600000 / 1000 
    };
}

toggle = () => {
  this.resetTime()
  this.setState({ showButton: true, showButton2: false, showButton3: false });
};

toggle2 = () => {
  this.resetTime()
  this.setState({ showButton: false, showButton2: true, showButton3: false, });
};

toggle3 = () => {
  this.resetTime()
  this.setState({ showButton: false, showButton2: false, showButton3: true, });
};

    getMinutes() {
        return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(
          -2
        );
      }
    
      getSeconds() {
        return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
      }

      getMinutes2() {
        return ("0" + Math.floor((this.state.secondsElapsed2 % 3600) / 60)).slice(
          -2
        );
      }
    
      getSeconds2() {
        return ("0" + (this.state.secondsElapsed2 % 60)).slice(-2);
      }

      getMinutes3() {
        return ("0" + Math.floor((this.state.secondsElapsed3 % 3600) / 60)).slice(
          -2
        );
      }
    
      getSeconds3() {
        return ("0" + (this.state.secondsElapsed3 % 60)).slice(-2);
      }
    
    
    startTime = (event) => {
      if (this.state.isButtonDisabled) {
        return; 
      }
      this.setState({isButtonDisabled: true});
        this.countdown = setInterval(() => {
          this.setState(({ secondsElapsed, secondsElapsed2,secondsElapsed3 }) => ({
            secondsElapsed: secondsElapsed - 1, secondsElapsed2: secondsElapsed2 - 1,
            secondsElapsed3: secondsElapsed3 - 1
          }));
        }, 1000);
      };
      resetTime() {
        clearInterval(this.countdown);
        this.setState({
          secondsElapsed: 1500000 / 1000,
          secondsElapsed2: 300000 / 1000,
          secondsElapsed3: 600000 / 1000,
          isButtonDisabled: false
        });
      }
      stopTime() {
        clearInterval(this.countdown);
        this.setState({ isButtonDisabled: false })
      }

   
    render () {
      return (
      
        <div className='timer'>
           <h1>Tomato Timer</h1>
           
            <div>   
          <pomobutton class="button" onClick={this.toggle}>Pomodoro</pomobutton>
          <shortbutton class="button" onClick = {this.toggle2}>Short Break</shortbutton>
          <longbutton class="button" onClick = {this.toggle3}>Long Break</longbutton>
          </div>
          
         <div>
        {this.state.showButton ? <h2>{this.getMinutes()}:{this.getSeconds()}</h2> : null}
        {this.state.showButton2 ? <h2>{this.getMinutes2()}:{this.getSeconds2()}</h2> : null}
        {this.state.showButton3 ? <h2>{this.getMinutes3()}:{this.getSeconds3()}</h2> : null}
        </div>
         
         <div>
            <startbutton class="button" onClick={this.startTime.bind(this)} disabled={this.state.isButtonDisabled}>Start</startbutton>
            <stopbutton class="button" onClick={this.stopTime.bind(this)}>Stop</stopbutton>
            <resetbutton class="button" onClick={this.resetTime.bind(this)}>Reset</resetbutton>
          </div>
        </div>
      )
    }
  }
        
    


export default Timer
