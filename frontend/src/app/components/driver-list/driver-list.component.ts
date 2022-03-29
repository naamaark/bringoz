import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { user } from '../../user'
import { DriverService } from '../../services/driver.service'
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: user[] = [];
  @Input() driver: user;
  idx: number = 0;
  @Output() onChangeDriver: EventEmitter<user> = new EventEmitter()
  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((drivers) => (this.drivers = drivers))
  }
  changeCurrDriver(idx: number) {
    console.log('changing curr', idx);
    this.idx = idx;
    this.onChangeDriver.emit(this.drivers[idx])
  }
  deleteDriver(driver: user) {
    this.driverService.deleteDriver(driver.name).subscribe(() => (this.drivers = this.drivers.filter(d => d.name !== driver.name)))
  }
}
