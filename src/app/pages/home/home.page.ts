import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [IonicModule, MenuComponent],
})
export class HomePage {
	public environmentInjector = inject(EnvironmentInjector);

	constructor() {
	}
}
