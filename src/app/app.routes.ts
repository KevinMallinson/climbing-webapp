import {Routes} from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.routes').then((m) => m.routes),
	},
	{
		path: 'betas',
		loadComponent: () => import('./pages/betas/betas.page').then(m => m.BetasPage)
	}
];
