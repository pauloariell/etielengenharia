import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ee-enviarcv',
  templateUrl: './enviarcv.component.html',
  styleUrls: ['./enviarcv.component.scss']
})
export class EnviarcvComponent implements OnInit {
  enviacvForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.enviacvForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }


  onSubmit(){
    alert("Olar!")
  }

}
