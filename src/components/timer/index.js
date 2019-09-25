import './styles.css' 
import React from 'react' 
import Modal from 'react-modal'


class Timer extends React.Component {
    constructor (props) {
       super(props);

     this.state = {

       isActiveSettings: false,
       isButtonDisabled: false,
       isActiveLog: false,
       isActiveFaq: false,
       isTimerStop: true,
       showButton: true,
       play: false,
       pause: true,
     
          secondsElapsed: 1500000 / 1000,
          secondsElapsed2: 300000 / 1000,
          secondsElapsed3:  600000 / 1000
    };
    this.url = "https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3";
    this.audio = new Audio(this.url);
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
        return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(-2);
      }
    
      getSeconds() {
        return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
      }

      getMinutes2() {
        return ("0" + Math.floor((this.state.secondsElapsed2 % 3600) / 60)).slice(-2);
        }

      getSeconds2() {
          return ("0" + (this.state.secondsElapsed2 % 60)).slice(-2)
      }

      getMinutes3() {
        return ("0" + Math.floor((this.state.secondsElapsed3 % 3600) / 60)).slice(-2);
      }
    
      getSeconds3() {
        return ("0" + (this.state.secondsElapsed3 % 60)).slice(-2);
      }

      startTime = () => {
        if (!this.state.isButtonDisabled) {
          this.setState({ isButtonDisabled: true});
        this.countdown = setInterval(() => {
          if (this.state.secondsElapsed > 0 ) {
           this.setState (({ secondsElapsed }) => ({secondsElapsed: secondsElapsed - 1})) }else { this.play() };

          if (this.state.secondsElapsed2 > 0 ) { 
           this.setState (({ secondsElapsed2 }) => ({secondsElapsed2: secondsElapsed2 - 1}))}else { this.play() };;
          
          if (this.state.secondsElapsed3 > 0 ) {
            this.setState (({ secondsElapsed3 }) => ({secondsElapsed3: secondsElapsed3 - 1})) }else { this.play() };;
                  
      } 1000,); 
      }
    }


      resetTime() {
        clearInterval(this.countdown);
        this.setState({
          isTimerStop: false,
          secondsElapsed: 1500000 / 1000,
          secondsElapsed2: 300000 / 1000,
          secondsElapsed3: 600000 / 1000,
          isButtonDisabled: false
        });
      }

      stopTime() {
        clearInterval(this.countdown);
        this.setState({ isButtonDisabled: false
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

  componentDidMount() {
   document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
   document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }

onKeyPressed (event) {
  if(event.altKey && event.keyCode ===  82) { 
    this.resetTime()
  } 
  if(event.altKey && event.keyCode ===  80) { 
    this.toggle()
  } 
  if(event.altKey && event.keyCode ===  83) { 
    this.toggle2()
  } 
  if(event.altKey && event.keyCode ===  76) { 
    this.toggle3()
  } 
  if (event.keyCode ===  32) {
     if(!this.startTime) {
      this.resetTime()
     }else{  this.startTime()
     }
    }
}

play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  render () {
    return (
      <div className='timer'>

         <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tomato Timer <navbar>
         <buttons class="button" onClick={this.toggleModal}>Tweet about us</buttons>
         <buttons class="button" onClick={this.toggleModal0}>Settings</buttons>
         <buttons class="button" onClick={this.toggleModal1}>FAQ</buttons> 
          <buttons class="button" onClick={this.toggleModal2}>LOG</buttons>
         </navbar>
        </h1>
   <section>
   <Modal isOpen = {this.state.isActiveLog}>
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
    </Modal>
    </section>
       
    <section>  
    <Modal isOpen = {this.state.isActiveFaq}>
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
        </div>
     </Modal>
     </section>

      <section>
        <Modal isOpen = {this.state.isActiveSettings}>
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
            <select id="alertoption" size="5">
               <option value="80sAlarm">80s Alarm</option>
               <option value="alarmclock">Alarm Clock</option>
               <option value="alarmwatch">Wristwatch Alarm</option>
               <option value="ding">Elevator Ding</option>
               <option value="doorbell">Door Bell</option>
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
               <div class="four columns">
              <label for="time_pomodoro">Pomodoro</label>
              <input type="number" id="time_pomodoro" step="1" min="1" name="time_pomodoro"></input>
               </div>
             <div class="four columns">
              <label for="time_shortbreak">Short Break</label>
              <input type="number" id="time_shortbreak" step="1" min="1" name="time_shortbreak"></input>
              </div>
             <div class="four columns">
              <label for="time_longbreak">Long Break</label>
              <input type="number" id="time_longbreak" step="1" min="1" name="time_longbreak"></input>
              </div>
              <input type="button" id="submit" value="Save" class="button" onclick="saveSETTINGS();"></input>
              <input type="button" id="reset" value="Reset" class="button" onclick="resetSETTINGS();"></input>
              <input type="button" id="soundtest" value="Sound Test" class="button" onclick="soundTEST();"></input>
              </div>
              </div>
            </Modal>
        </section>

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
          <startbutton class="button" onClick={this.startTime.bind(this)}>Start</startbutton>
          <stopbutton class="button" onClick={this.stopTime.bind(this)}>Stop</stopbutton>
          <resetbutton class="button" onClick={this.resetTime.bind(this)}>Reset</resetbutton>
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

export default Timer
