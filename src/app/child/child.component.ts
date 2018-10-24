import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input()mydata; //use @input() to fetch all property of parent component and give it var name(anything... here mydata)
  constructor() { }

  ngOnInit() {

  }

}
