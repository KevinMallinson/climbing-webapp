import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
	selector: 'app-navigation-tabs',
	templateUrl: './navigation-tabs.component.html',
	styleUrls: ['./navigation-tabs.component.scss'],
	standalone: true,
	imports: [IonicModule, RouterLink]
})
export class NavigationTabsComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

}
