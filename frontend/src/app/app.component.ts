import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { DriverService } from './services/driver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currDriver: user;
  idx: number = 0;
  constructor(private driverService: DriverService) { }
  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((drivers) => (this.currDriver = drivers[0]))
  }
  changeDriver(driver: user) {
    console.log('changing driver', driver);
    this.currDriver = driver
  }
}
