import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ee-enviarcv',
  templateUrl: './enviarcv.component.html',
  styleUrls: ['./enviarcv.component.scss'],
})
export class EnviarcvComponent implements OnInit {
  @ViewChild('cvfile') myInputfile: ElementRef;
  public showOverlay = false;
  public showModal = false;
  enviacvForm: FormGroup;
  textModal: string;

  selectedFile: File = null;
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

  onFileChange(event) {
    this.turnOnOverlay();

    var file = <File>event.target.files[0];
    if (file.type !== this.typefile) {
      this.enviacvForm.get('file').reset(null);
      this.textModal = 'Atenção! O arquivo não é um PDF!';
      this.showModal = true;
      this.turnOffOverlay();
      return false;
    }

    const FileSize = file.size / 1024 / 1024;

    if (FileSize > 10) {
      this.enviacvForm.get('file').reset(null);
      this.textModal = 'Atenção! O arquivo é maior que 10MB!';
      this.showModal = true;
      this.turnOffOverlay();
      return false;
    }

    var reader = new FileReader();
    reader.onload = (function (file) {
      return function (e) {
        var binaryData = e.target.result;
        var base64String = window.btoa(binaryData);
        this.fileToUpload = base64String;
        //console.log(`[FILE]->${this.fileToUpload}`);
      };
    })(file);
    reader.readAsBinaryString(file);

    this.selectedFile = file;

    this.turnOffOverlay();
  }

  turnOnOverlay() {
    this.showOverlay = true;
  }
  turnOffOverlay() {
    this.showOverlay = false;
  }
  turnOffModal() {
    this.showModal = false;
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
