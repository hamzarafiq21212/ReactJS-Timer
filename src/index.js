import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal'
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveSettings: false,
      isButtonDisabled: false,
      isActiveLog: false,
      isActiveFaq: false,
      isTimerStop: true,
      play: false,
      pause: true,

      value: 25,
      value2: 5,
      value3: 10,
      seconds: '00',  seconds2: '00', seconds3: '00', url: '',
      isClicked : false,
    }
    this.baseState = this.state;
    this.tick = this.tick.bind(this);
    this.tick2 = this.tick2.bind(this);
    this.tick3 = this.tick3.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleMusic = this.handleMusic.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.resetinput = this.resetinput.bind(this);
    this.url = "https://www.tones7.com/media/old_telephone.mp3"
    this.audio = new Audio(this.url);
  } 

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      })
    }

    if (min === 0  & sec === 0) {
      this.play();
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
  }

  tick2() {
    var min2 = Math.floor(this.secondsRemaining2 / 60);
    var sec2 = this.secondsRemaining2 - (min2 * 60);

    this.setState({
      value2: min2,
      seconds2: sec2,
    })
    if (sec2 < 10) {
      this.setState({
        seconds2: "0" + this.state.seconds2,
      })
    }
    if (min2 < 10) {
      this.setState({
        value2: "0" + min2
      })
    }
    if (min2 === 0  & sec2 === 0) {
      this.play();
      clearInterval(this.intervalHandle2);
    }
    this.secondsRemaining2--
  }


  tick3() {
    var min3 = Math.floor(this.secondsRemaining3 / 60);
    var sec3 = this.secondsRemaining3 - (min3 * 60);
   
    this.setState({
      value3: min3,
      seconds3: sec3,
    }) 
    if (sec3 < 10) {
      this.setState({
        seconds3: "0" + this.state.seconds3,
      })
    }
    if (min3 < 10) {
      this.setState({
        value3: "0" + min3
      })
    }
    if (min3 === 0  & sec3 === 0) {
      this.play();
      clearInterval(this.intervalHandle3);
    }
    
    this.secondsRemaining3-- 
  }

  startCountDown() {
    if (this.state.isButtonDisabled === false) {
        this.setState({ isButtonDisabled: true
    });
  
    this.intervalHandle = setInterval(this.tick);
    let time = this.state.value
    this.secondsRemaining = time * 60; 


    this.intervalHandle2 = setInterval(this.tick2);
    let time2 = this.state.value2
    this.secondsRemaining2 = time2 * 60; 

   
    this.intervalHandle3 = setInterval(this.tick3, 1000);
    let time3 = this.state.value3
    this.secondsRemaining3 = time3 * 60; 

    this.setState({
      isClicked : true
    })
   }
   }
    
   stopTime() {
    clearInterval(this.intervalHandle);
    clearInterval(this.intervalHandle2);
    clearInterval(this.intervalHandle3);
    this.setState({ isButtonDisabled: false,
      pause: true
    });
  }

  resetinput ()  {
    this.setState(this.baseState);
    // clearInterval(this.intervalHandle);
    // clearInterval(this.intervalHandle2);
    // clearInterval(this.intervalHandle3);


    this.setState({  isButtonDisabled: false
    });
  }

  toggleModal0 = () => {  //OpenModalSettings
    this.setState({
      isActiveSettings: !this.state.isActiveSettings
    });
  }
  
  toggleModal00 = () => {  //CloseModalSettings
  this.setState({
    isActiveSettings: false
  });
  }
  
  toggleModal1 = () => {
    this.setState({
      isActiveFaq: !this.state.isActiveFaq
    });
  }
  
  toggleModal11 = () => {
    this.setState({
     isActiveFaq: false
    });
  }
  
  toggleModal2 = () => {
    this.setState({
    isActiveLog: !this.state.isActiveLog
    });
  }
  
  toggleModal22 = () => {
    this.setState({
    isActiveLog: false
    });
  }
  componentWillMount() {
    Modal.setAppElement('body');
   } 

   handleMusic(event) {
    console.log(event.target.value)
    this.setState({
        url: event.target.value,
    })

    this.audio = new Audio(event.target.value);
  }

    handleChange(event) {
      // console.log(event.target.value,this.state.value,this.baseState.value)
      
      this.setState({
        value: event.target.value,
      })
      this.baseState.value=event.target.value;
    }

    handleChange2(event) {
      this.setState({
        value2: event.target.value
      })
      this.baseState.value2=event.target.value;
    }

    handleChange3(event) {
      this.setState({
        value3: event.target.value
      })
      this.baseState.value3=event.target.value;
    }

    handlesChange = () => {
      this.setState({isActiveSettings: false
      })
    }

    Reset  = () => {
      this.basestate = this.state;
    }

    play = () => {
      this.setState({ play: true})
        this.audio.play();
      }

      onKeyPressed (event) {
        if(event.altKey && event.keyCode ===  82) { 
          this.resetinput()
        } 
        if (event.keyCode ===  32) {
           if(this.isButtonDisabled === true)  {
            this.stopTime()
           }else{  this.startCountDown()
           }
          }
         }
         componentDidMount() {
          document.addEventListener("keydown", this.onKeyPressed.bind(this));
         }
        
         componentWillUnmount() {
          document.removeEventListener("keydown", this.onKeyPressed.bind(this));
         }
  

  render() {
      return (
        
      <div className='timer'>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tomato Timer <navbar>
      <buttons class="button"> <a href ="https://bit.ly/sharetomatotimer">Tweet about us!</a></buttons>
      <buttons class="button" onClick={this.toggleModal0}>Settings</buttons>
      <buttons class="button" onClick={this.toggleModal1}>FAQ</buttons> 
       <buttons class="button" onClick={this.toggleModal2}>LOG</buttons>
      </navbar>
     </h1>

     <div>

     <section>
   <Modal isOpen = {this.state.isActiveLog}>
   <div className="modal" >
   <button class="button" onClick={this.toggleModal22}>x</button>
    <h3>Time log</h3>
      <div class="flex-container flex-center-items margin-large-bottom ">
       <div class="margin-small-right">Pomodoro goal tracker:</div>
       <div id="tracker-goal-pomodoros" class="flex-container"><div class="pom-goal-circle"></div></div>
       </div> <div><br></br></div>
       <div class="margin-large-bottom"><pomobutton id="pomodoroGoalClear" class="button disabled" onclick="clearPomodoroGoalTracker();" disabled="">Clear pomodoro's done today</pomobutton></div>
       <div><br></br></div>
        <table id="tracker-time-list">nothing logged yet</table>
        <div><br></br></div>
       <div class="margin-large-bottom"><pomobutton id="pomodoroTimerClear" class="button disabled" onclick="clearPomodoroLog();" disabled="">Clear timer log</pomobutton></div>
    </div>
    </Modal>
    </section>
       
    <section>  
    <Modal isOpen = {this.state.isActiveFaq}>
    <div className="modal" >
    <button class="button" onClick={this.toggleModal11}>x</button>
        <div>
         Q. What is Pomodoro Technique?
        </div>
        <div>
          A. The time management technique created by Francesco Cirillo for a	more productive way to work and study. For more information,&nbsp;<a href="http://www.pomodorotechnique.com">click here</a>.
        </div>
        <div>
          <br></br>
        </div>
        <div>
          Q. Can you tell me the story without having to visit the website?
        </div>
        <div>
        <div>
          A. Well, it comprises of the following basic steps:
        </div>
           <ul>
            <li>Decide on the task at hand</li>
             <li>Set the <strong>Pomodoro</strong> (timer) to 25 minutes</li>
            <li>Work on the task until the timer expires; Record with an X</li>
            <li>Take a <strong>Short Break</strong> (5 minutes)</li>
            <li>Every four "<em>pomodoros</em>", take a <strong>Long Break</strong> (10 minutes)</li>
           </ul>
        </div>
        <div>
           Q. What is TomatoTimer?
        </div>
        <div>
           A. It's an easy to use, flexible Pomodoro Technique timer. It was inspired by Tomatoi.st and it uses jQuery and HTML5 features like Desktop Notifications, Audio API and Local Storage instead of relying on Adobe Flash and other such technologies.
        </div>
        <div>
         <br></br>
         </div>
        <div>
           Q. Why use TomatoTimer?
        </div>
        <div>
           A.&nbsp;Here's why:
           <ul>
            <li>Clean and Crisp interface with a Mobile friendly layout.</li>
            <li>Ability to Pause or Reset the timer intervals.</li>
            <li>Audio notifications at the end of a timer period.</li>
            <li>Desktop notifications. (Only supported in Google Chrome)</li>
            <li>Keyboard shortcuts.</li>
            <li>Ability to change the alert sound + volume via Settings</li>
            <li>Custom Timer Intervals</li>
            <li>A history of your activity. (Coming soon.)</li>
           </ul>
         <br></br>
        </div>
        <div>
           Q. I've got some feedback. How do I get in touch with you?
        </div>
        <div>
           A. <a href="hamzarafiq2121@gmail.com">Email me</a>.
        </div>
        <div>
         <br></br>
        </div>
        <div>
           Receive early access to our new platform and news about feature updates to TomatoTimer! Signup for our mailing list: <a href="http://eepurl.com/c5uCuz"> Sign up!</a>
        </div></div>
     </Modal>
     </section>

      <section>
        <Modal isOpen = {this.state.isActiveSettings}>
        <div className="modal" >
        <button class="button" onClick={this.toggleModal00}>x</button>
        <div id="settingsModal" class="reveal-modal medium open" style={{top: '100px', opacity: '1', visibility: 'visible', display: 'block'}}>
          <h2>Options</h2>
          <h3>User preferences</h3>
          <p class="flex-container flex-center-items"> </p>
          <input id="checkBoxTimerIndication" type="checkbox"></input>
          <label for="checkBoxTimerIndication">Timer indication in title?</label>
          <p class="flex-container flex-center-items"> </p>
          <input id="checkBoxTimerIndication" type="checkbox"></input>
          <label for="checkBoxTimerIndication">Browser notifications?</label>
          <p class="flex-container flex-center-items"> </p>
          <input id="checkBoxTimerIndication" type="checkbox"></input>
          <label for="checkBoxTimerIndication">Auto start pomodoro and breaks?</label>
          <p class="flex-container flex-center-items ">
          <label for="pomodoro_goal">Pomodoro goal for the day</label>
          <input class="small-input" type="number" id="pomodoro_goal" step="1" min="1" name="pomodoro_goal">
          </input></p>
          <h3>Select Sound</h3>
            <select id="alertoption" onChange = {this.handleMusic} size="5">
               <option value="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3" >80s Alarm</option>
               <option value="https://www.tones7.com/media/old_telephone.mp3" >Alarm Clock</option>
               <option value="https://www.tones7.com/media/rock_sms.mp3">Wristwatch Alarm</option>
               <option value="https://www.tones7.com/media/nokia_scratch_sms.mp3">Elevator Ding</option>
               <option value="https://www.tones7.com/media/Perfect_Ring_Tone.mp3">Door Bell</option>
             </select>
          <h3>Select Volume</h3>
             <select id="volume" size="5">
               <option value="0">Mute</option>
               <option value="0.25">25%</option>
               <option value="0.5">50%</option>
               <option value="0.75">75%</option>
               <option value="1.0">100%</option> 
             </select>
             <h3>Set Custom Times <small>(in minutes)</small></h3>
             <div class="row">
               <div class="pomoinput">
              <label for="time_pomodoro">Pomodoro</label>
              <input type="number" value = {this.state.value} onChange={this.handleChange} required />
               </div>
             <div class="shortinput">
              <label for="time_shortbreak">Short Break</label>
              <input type="number" value = {this.state.value2} onChange={this.handleChange2} required />
              </div>
             <div class="longinput">
              <label for="time_longbreak">Long Break</label>
              <input type="number" value = {this.state.value3} onChange={this.handleChange3} required />
              </div>
              <button class="button" onClick={this.handlesChange}>Save</button>
              <button class="button" onclick={this.Reset}>Reset</button>
              <button  onclick={this.play}>Sound Test</button>
              </div>
              </div> </div>
            </Modal>
        </section>
          </div>

        <div className="row">
               <Timer value = {this.state.value} value2 = {this.state.value2} value3={this.state.value3}
                seconds = {this.state.seconds} seconds2 = {this.state.seconds2} seconds3 = {this.state.seconds3}/>
        </div>

           <div>  
          <startbutton class="button" onClick={this.startCountDown}>Start</startbutton>
          <stopbutton class="button" onClick={this.stopTime}>Stop</stopbutton>
          <resetbutton class="button" onClick={this.resetinput}>Reset</resetbutton>
          </div>
        

<div class="panel">
<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keyboard Shortcuts</h4>
<div class="disc1">
<li><strong>SPACE</strong>&nbsp;&nbsp;&nbsp; Start or Stop the timer</li>
<li><strong>ALT + P</strong>&nbsp;&nbsp;&nbsp;Pomodoro</li>
<li><strong>ALT + S</strong>&nbsp;&nbsp;Short Break</li>
<li><strong>ALT + L</strong>&nbsp;&nbsp;Long Break</li>
<li><strong>ALT + R</strong>&nbsp;&nbsp;Reset Timer</li>
</div>
</div>

<div class="panel2">
<h4>Notifications</h4>
<div class="disc2">
<div>You can change the audio tone and volume via Settings</div>
<div><br></br></div>
<div>Desktop Notifications are currently supported in Chrome, Firefox and Safari</div>
<div><br></br></div>
<div><br></br></div>
<pomo class="button" onClick={this.toggle}>Enable Desktop Alerts</pomo>
</div>
</div>

<div class="panel3">
<h4>Settings</h4>
<div class="disc2">
<div >You can set custom times, audio tone and volume via Settings.</div>
<div><br></br></div>
<div><br></br></div>
<div id="carbonads">
 <img src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png" alt="ads via Carbon" border="0" height="100" width="130"></img>
   </div>
 </div>
 </div>
 </div>

    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: false,
      showButton: true
    }
  }
    
   stopTime() {
    clearInterval(this.intervalHandle);
    clearInterval(this.intervalHandle2);
    clearInterval(this.intervalHandle3);
    this.setState({ isButtonDisabled: false
    });
  }

  resetinput ()  {
    this.baseState = this.setState
    clearInterval(this.intervalHandle);
    clearInterval(this.intervalHandle2);
    clearInterval(this.intervalHandle3);
    this.setState({  isButtonDisabled: false
    });
  }

  toggle = () => {
    this.resetinput()
    this.setState({ showButton: true, showButton2: false, showButton3: false });
  };

  toggle2 = () => {
    this.resetinput()
    this.baseState = this.setState
    this.setState({ showButton: false, showButton2: true, showButton3: false, });
  };
  
  toggle3 = () => {
   this.resetinput()
    this.setState({ showButton: false, showButton2: false, showButton3: true, });
  };

  onKeyPressed (event) {
    if(event.altKey && event.keyCode ===  80) { 
      this.toggle()
    } 
    if(event.altKey && event.keyCode ===  83) { 
      this.toggle2()
    } 
    if(event.altKey && event.keyCode ===  76) { 
      this.toggle3()
    } 
  }
     componentDidMount() {
      document.addEventListener("keydown", this.onKeyPressed.bind(this));
     }
    
     componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
     }
  
  render() {
    return (
      <div classname='timer'>
      <div>   
      <pomobutton class="button" onClick={this.toggle}>Pomodoro</pomobutton>
      <shortbutton class="button" onClick = {this.toggle2}>Short Break</shortbutton>
      <longbutton class="button" onClick = {this.toggle3}>Long Break</longbutton>
      </div>
      
      <div>
      {this.state.showButton ? <h2>{this.props.value}:{this.props.seconds}</h2> : null} 
      {this.state.showButton2 ? <h2>{this.props.value2}:{this.props.seconds2}</h2> : null}
      {this.state.showButton3 ? <h2>{this.props.value3}:{this.props.seconds3}</h2> : null}
      </div>

      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
