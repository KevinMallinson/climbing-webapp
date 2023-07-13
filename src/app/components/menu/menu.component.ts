import {Component, Input } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, TitleCasePipe} from "@angular/common";

@Component({
	selector: 'app-menu',
	templateUrl: 'menu.component.html',
	styleUrls: ['menu.component.scss'],
	standalone: true,
	imports: [CommonModule, IonicModule, TitleCasePipe]
})
export class MenuComponent {
	@Input() public title = 'Climbing App';
}
