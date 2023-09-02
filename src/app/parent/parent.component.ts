import { Component,Input,OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  implements OnInit, OnChanges{
  ischild= true;
  
  channelName = '';
  constructor() {
    console.log("parent constructor is called");
  }
  ngOnInit(): void {
    console.log("parent OnInit is called");
  }
  ngOnChanges()
  {
    console.log("parent Onchanges is called");
  }
  togglechild(){
    this.ischild = !this.ischild
  }

}
