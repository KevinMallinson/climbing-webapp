import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "../menu/menu.component";
import {RouterLink} from "@angular/router";

@Component({
	selector: 'app-tabbed-view',
	templateUrl: './tabbed-view.component.html',
	styleUrls: ['./tabbed-view.component.scss'],
	standalone: true,
	imports: [IonicModule, MenuComponent, RouterLink]
})
export class TabbedViewComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

}
