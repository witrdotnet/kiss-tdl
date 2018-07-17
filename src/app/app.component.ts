import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KISS To-Do-List';
  options = [
	{text: "a", value: "1"},
	{text : "b", value: "2"}
	]
}
