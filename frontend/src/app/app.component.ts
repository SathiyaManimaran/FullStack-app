import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://backend-service:8080/api/hello', { responseType: 'text' })
      .subscribe(data => {
        this.message = data;
      });
  }
}