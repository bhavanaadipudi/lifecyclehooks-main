import { Component,OnDestroy,OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,  OnDestroy, OnChanges{
  counter =0;
  interval:any;
  @Input()
  channelName = "";
  constructor(){
    console.log("child constructor is called");
  }
  
  ngOnInit(): void {
    console.log("child  ngonInit is called");
   //this.interval = setInterval(() => {
      //this.counter = this.counter +1
     // console.log(this.counter);
   // }, 1000);
  }

  ngOnDestroy(){
 // clearInterval(this.interval);
    console.log("child  ngonDestory is called");
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes);
    console.log("child Onchanges is called");
  }
}
