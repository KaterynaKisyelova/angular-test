import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InputObject } from 'src/types';
import { checkPasswordSafety } from 'src/utils';
import { SafetyLevels } from 'src/types';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bars.component.html',
  styleUrls: ['./strength-bars.component.css'],
})
export class StrengthBarComponent implements OnChanges {
  passwordSafety: string | null = null;

  @Input() inputValue: InputObject = {
    value: '',
    status: '',
  };

  ngOnChanges(changes: SimpleChanges) {
    const status = changes['inputValue'].currentValue.status as string;
    const password = changes['inputValue'].currentValue.value as string;

    switch (true) {
      case password.length === 0:
        this.passwordSafety = '';
        break;
      case status === SafetyLevels.INVALID:
        this.passwordSafety = SafetyLevels.INVALID;
        break;
      default:
        this.passwordSafety = checkPasswordSafety(password);
    }
  }

  get SafetyLevels() {
    return SafetyLevels;
  }
}
