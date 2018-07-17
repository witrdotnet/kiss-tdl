import { Component } from '@angular/core';
import { TdlService } from './tdl.service'

import { TdlItem } from './tdl-classes/tdlItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'KISS To-Do-List';
  options: TdlItem[];

	constructor(private tdlService: TdlService) {
	  this.reloadOptions();
	}

	reloadOptions() {
	  this.tdlService.getTodoList().subscribe( response => {
	    this.options = response;
	  });
	}
}
