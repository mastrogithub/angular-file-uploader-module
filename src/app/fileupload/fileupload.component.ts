import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  afuConfig: Object;

  constructor() { }

  ngOnInit() {
    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".csv, .xls, .xlsx, .pdf",
      maxSize: "50",
      uploadAPI:  {
        url: "http://localhost:3000/upload"
        /*headers: {
          "Content-Type" : "multipart/form-data"
        }*/
      },
      theme: "dragNDrop",
      hideProgressBar: false,
      hideResetBtn: false,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Examinar...',
        resetBtn: 'Resetear',
        uploadBtn: 'Subir archivo',
        dragNDropBox: 'Arrastre y Suelte el archivo.',
        attachPinBtn: 'Attach Files...',
        afterUploadMsg_success: 'Subida de archivo exitosa!',
        afterUploadMsg_error: 'Ocurrió un error al subir el archivo!'
      }
    };

  }

  onFileUploaded(event) {
    console.log('subidade archivo:: ' + event);
  }

}
