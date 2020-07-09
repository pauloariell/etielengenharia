import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ee-enviarcv',
  templateUrl: './enviarcv.component.html',
  styleUrls: ['./enviarcv.component.scss'],
})
export class EnviarcvComponent implements OnInit {
  public showOverlay = false;
  enviacvForm: FormGroup;
  fileToUpload: string;
  typefile = 'application/pdf';

  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.enviacvForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log(`[Submit] - start`);
    this.turnOnOverlay();
    // if (this.enviacvForm.invalid) {
    //   console.log(`[DATA error]: ${JSON.stringify(this.enviacvForm.value)}`);
    //   this.turnOffOverlay()
    //   return;
    // }
    console.log(`[DATA SUCESS]: ${JSON.stringify(this.enviacvForm.value)}`);

    var { file } = this.enviacvForm.value;
    console.log(`[DATA SUCESS]: ${JSON.stringify(file)}`);
    this.turnOffOverlay();

    // const formData: FormData = new FormData();
    // formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);
    // console.log(`[DATA] - formData: ${JSON.stringify(formData)}`)
  }

  onFileChange(files: FileList) {
    this.turnOnOverlay();
    if (files && files.length) {
      var file = files.item(0);
      if (file.type == this.typefile) {
        this.convertFiletoBase64(file);
        this.turnOffOverlay();
        return;
      } else {
        alert('Num é um PDF cacete!');
        this.turnOffOverlay();
        return;
      }
      // this.fileToUpload = files.item(0);
    }
    this.turnOffOverlay();
  }

  loadFileBase64(file: string) {
    console.log(`[FileConvert]->${file}`);
    return false;
  }

  convertFiletoBase64(file) {
    var reader = new FileReader();

    reader.onload = (function (file) {
      return function (e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        this.fileToUpload = base64String;
        console.log(`[FileConverting] - b64: ${this.fileToUpload}`);
      };
    })(file);
    reader.readAsBinaryString(file);
  }

  turnOnOverlay() {
    this.showOverlay = true;
  }

  turnOffOverlay() {
    this.showOverlay = false;
  }
}
