import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopper',
  templateUrl: './stopper.component.html',
  styleUrls: ['./stopper.component.css']
})
export class StopperComponent implements OnInit {
  
  constructor() {
   }
   second=0;
   minute=0;
   hour=0;
   id;
   lastSecond=0;
   lastMinute=0;
   lastHour=0;
   times = [{
     
   }]
  ngOnInit() {

    
  }

  myTimer() {
    this.timeGoes();
  }

  timeGoes(){
    this.second++;
    if(this.second==60){
      this.minute++;
      this.second=0;
    }
    if(this.minute==60){
      this.hour++;
      this.minute=0;
    }
  }
  start(){
    this.id= setInterval(() => {
      this.myTimer();
  }, 1000);
  }

  stop(){
    clearInterval(this.id)
  }

  reset(){
    this.stop();
    this.hour=0;
    this.minute=0;
    this.second=0;
  }

  add(){
    this.times.push(
      {
        second: this.second-this.lastSecond,
        minute: this.minute-this.lastMinute,
        hour: this.hour-this.lastMinute,
      }
    )
    this.lastHour=this.hour;
    this.lastMinute=this.minute;
    this.lastSecond=this.second;
  }

}
