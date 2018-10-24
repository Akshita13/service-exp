import { Injectable } from '@angular/core';
import { taskdata } from './demo.model'
@Injectable()
export class TasklistService {
  public arr: taskdata[] = [];
  constructor() {
    this.arr = [
      { id: 1, name: "akshita", isComplete: true, },
      {
        id: 2,
        name: "tina",
        isComplete: false,
      },
      {
        id: 3,
        name: "pali",
        isComplete: true,
      },
      {
        id: 4,
        name: "ami",
        isComplete: false,
      }
    ]
  }


  /**
   * to get the data of array
   */
  getdata() {
    return this.arr;
  }


}
