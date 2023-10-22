import { Component } from '@angular/core';
import { InputObject } from 'src/types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-task';
  inputValue = {
    value: '',
    status: '',
  };

  setNewPassWord(value: InputObject) {
    this.inputValue = value;
  }
}
