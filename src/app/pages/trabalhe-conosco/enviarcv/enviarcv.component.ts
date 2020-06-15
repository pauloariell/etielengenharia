import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ee-enviarcv',
  templateUrl: './enviarcv.component.html',
  styleUrls: ['./enviarcv.component.scss']
})
export class EnviarcvComponent implements OnInit {
  public showOverlay = false;
  enviacvForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.enviacvForm = this.formBuilder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      uf: ['',[Validators.required]],
      city: ['',[Validators.required]],
      description: ['',[Validators.required]],
      file: [null, Validators.required],
    });
  }


  onSubmit(){
    this.turnOnOverlay()
    if (this.enviacvForm.invalid) {
      console.log(`[DATA error]: ${JSON.stringify(this.enviacvForm.value)}`);
      this.turnOffOverlay()
      return;
    }
    console.log(`[DATA SUCESS]: ${JSON.stringify(this.enviacvForm.value)}`);
    this.turnOffOverlay()
  }

  onFileChange(event) {
    console.log('[Reader] - Iniciando');
    let reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      console.log(`[Reader] - ${JSON.stringify(event.target.files)}`);
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      console.log(`[Reader] - ${reader.result}`);

      reader.onload = () => {
        this.enviacvForm.patchValue({
          file: reader.result
        });

        // // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    }
  }

  turnOnOverlay() {
    this.showOverlay = true;
    alert('teste')
  };

  turnOffOverlay() {
    this.showOverlay = false;
  };

}
