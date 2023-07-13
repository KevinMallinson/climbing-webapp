import {Routes} from '@angular/router';
import {HomePage} from './home.page';

export const routes: Routes = [
	{
		path: 'home',
		component: HomePage,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
];
