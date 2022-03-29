import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { user } from '../user'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'http://localhost:8080/api/driver'

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<user[]> {
    return this.http.get<user[]>(this.apiUrl)
  }

  deleteDriver(name: string): Observable<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/${name}`)
  }

  updateDriver(driver: user): Observable<user> {
    return this.http.put<user>(this.apiUrl, driver)
  }

}
