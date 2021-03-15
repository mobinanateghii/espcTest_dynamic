import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA)  public data: any ,
               private fb: FormBuilder) { }


  EditPayForm = this.fb.group({
                      name: [ this.data.name , Validators.required],
                      Description: [this.data.Description, Validators.required],
  });

  ngOnInit(): void {
  }

}
