import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { user } from 'src/app/user';
import { faTimes, faPenSquare, faPhone } from '@fortawesome/free-solid-svg-icons'
import { DriverService } from 'src/app/services/driver.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms'
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-driver-detailes',
  templateUrl: './driver-detailes.component.html',
  styleUrls: ['./driver-detailes.component.css']
})
export class DriverDetailesComponent implements OnInit {
  @Input() driver: user;
  @Input() selected: boolean;
  @Input() i: number;
  @Output() onDeleteDriver: EventEmitter<user> = new EventEmitter()
  @Output() onEditDriver: EventEmitter<user> = new EventEmitter()
  @Output() onChangeCurr: EventEmitter<number> = new EventEmitter()
  @ViewChild('driverForm') driverForm: any;
  faTimes = faTimes;
  faPen = faPenSquare;
  faPhone = faPhone;
  driverImg: string;
  name: string;
  email: string;
  phone: string;
  driverModel: { name: string, email: string, phone: string }
  dialogRef: MatDialogRef<EditDialogComponent>;

  constructor(private driverService: DriverService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.driverImg = `https://avatars.dicebear.com/api/human/${this.i}.svg`;
    this.name = this.driver.name
    this.email = this.driver.email
    this.phone = this.driver.phone
  }
  onDelete(driver: user) {
    this.onDeleteDriver.emit(driver)
  }

  onEdit(driver: user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { name: this.name, phone: this.phone, email: this.email },
    })
    this.dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog output:", data)
      const updatedDriver: user = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        location: this.driver.location,
        tasks: this.driver.tasks
      }
      this.driverService.updateDriver(updatedDriver).subscribe(driver => this.driver = driver)
    }
    );
  }

  onSend(form: NgForm) {
    let data = form.value;
    console.log('form submitted');
    console.log(this.driverModel);
    this.dialogRef.close();
  }

  changeCurr(i: number) {
    this.onChangeCurr.emit(i)
  }
}
