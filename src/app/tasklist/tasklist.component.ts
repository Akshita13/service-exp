import { Component, OnInit } from '@angular/core';
import{TasklistService}from '../demo.service'
import{taskdata}from'../demo.model'
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
 public data:taskdata[];
 public temp=[];
  constructor(private tasklistService:TasklistService) { 

  }

  ngOnInit() {
    this.data = this.tasklistService.getdata();
    console.log(this.data)
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      console.log(element);
      if(element.isComplete==true){
        this.temp.push(element);
        console.log(this.temp);
      }
      
      
      console.log(this.temp);
      
    }
  }
 
}
