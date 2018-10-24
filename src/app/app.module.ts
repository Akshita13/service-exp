import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { ChildComponent } from './child/child.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TasklistService } from './demo.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService,TasklistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
