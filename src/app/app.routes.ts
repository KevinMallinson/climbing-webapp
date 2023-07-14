import {Routes} from '@angular/router';

export const routes: Routes = [
	{
		path: 'about',
		loadChildren: () => import('./pages/about/about.routes').then((m) => m.routes),
	},
	{
		path: '',
		loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
	}
];
