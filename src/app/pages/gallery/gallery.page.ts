import {Component} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from "../../components/menu/menu.component";

@Component({
	selector: 'app-gallery',
	templateUrl: 'gallery.page.html',
	styleUrls: ['gallery.page.scss'],
	standalone: true,
	imports: [IonicModule, MenuComponent]
})
export class GalleryPage {

	constructor() {
	}

}
