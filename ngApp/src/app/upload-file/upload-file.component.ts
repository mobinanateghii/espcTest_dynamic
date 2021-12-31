import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private http: HttpClient){ }

  fileToUpload: File | null = null;


  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
  // https://stackblitz.com/edit/angular-read-file-as-blob?file=src/app/app.component.ts
  }
}
