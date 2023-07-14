import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
	selector: 'app-about',
	templateUrl: 'about.page.html',
	styleUrls: ['about.page.scss'],
	standalone: true,
	imports: [IonicModule, MenuComponent]
})
export class AboutPage {
	public foxUrl = 'https://www.bing.com/images/create/rock-climbing-by-a-fox-in-an-astronaut-outfit/64b09b5376ae4e8d809a077f62b12ad4?id=kJkB7e%2f8TLCi9Th9Hd3luA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay"';

	constructor() {
	}

}
