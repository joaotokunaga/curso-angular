import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  userName = 'Juzeh'
  userData = {
    email: 'juzeh@juzeh.com',
    role: 'Admin'
  }
}
