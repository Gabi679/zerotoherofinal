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
   stoppers=[
     {
      lastSecond:0,
      lastMinute:0,
      lastHour:0,
      second: 0,
      minute: 0,
      hour: 0,
      id: setInterval(() => {
        this.myTimer(0);
    }, 1000),
    times : [{
     
    }]
   }]
  ngOnInit() {

    
  }

  myTimer(stopper) {
    this.timeGoes(stopper);
  }

  timeGoes(stopper){
    this.stoppers[stopper].second++;
    if(this.stoppers[stopper].second==60){
      this.stoppers[stopper].minute++;
      this.stoppers[stopper].second=0;
    }
    if(this.stoppers[stopper].minute==60){
      this.stoppers[stopper].hour++;
      this.stoppers[stopper].minute=0;
    }
  }
  start(stopper){
    this.stoppers[stopper].id= setInterval(() => {
      this.myTimer(stopper);
  }, 1000);
  }

  stop(stopper){
    clearInterval(this.stoppers[stopper].id)
  }

  reset(stopper){
    this.stop(stopper);
    this.stoppers[stopper].hour=0;
    this.stoppers[stopper].minute=0;
    this.stoppers[stopper].second=0;
  }

  add(stopper){
    this.stoppers[stopper].times.push(
      {
        second: this.stoppers[stopper].second-this.stoppers[stopper].lastSecond,
        minute: this.stoppers[stopper].minute-this.stoppers[stopper].lastMinute,
        hour: this.stoppers[stopper].hour-this.stoppers[stopper].lastMinute,
      }
    )
    this.stoppers[stopper].lastHour=this.stoppers[stopper].hour;
    this.stoppers[stopper].lastMinute=this.stoppers[stopper].minute;
    this.stoppers[stopper].lastSecond=this.stoppers[stopper].second;
  }
  new(){
    this.stoppers.push({
      lastSecond:0,
      lastMinute:0,
      lastHour:0,
      second: 0,
      minute: 0,
      hour: 0,
      id: setInterval(() => {
        this.myTimer(0);
    }, 1000),
    times : [{
     
    }]
    }
    )
  }

}
