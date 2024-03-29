import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() placehoder = '';
  @Input() format = '';
}
