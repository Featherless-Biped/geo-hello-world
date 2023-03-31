import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Location {
  country_name: string;
  region_name: string;
  city: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location$: Observable<Location | null> = null;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    const url = 'https://ipapi.co/json/';
    this.location$ = this.http.get<Location>(url);
  }
}
