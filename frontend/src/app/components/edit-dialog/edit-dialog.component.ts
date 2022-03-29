import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms'

export interface DialogData {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  name: string;
  email: string;
  phone: string;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.name, []],
      email: [this.email, []],
      phone: [this.phone, []]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}


