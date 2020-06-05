import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ee-invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styleUrls: ['./invalid-feedback.component.scss']
})
export class InvalidFeedbackComponent implements OnInit {
  @Input() text = '';
  constructor() { }
  ngOnInit(): void {
    console.log(this.text);
   }
}
