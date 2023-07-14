import {Routes} from '@angular/router';
import {NavigationTabsComponent} from "./components/navigation-tabs/navigation-tabs.component";

export const routes: Routes = [
	{
		path: '',
		component: NavigationTabsComponent,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
			},
			{
				path: 'betas',
				loadComponent: () => import('./pages/betas/betas.page').then(m => m.BetasPage)
			},
			{
				path: 'notes',
				loadComponent: () => import('./pages/notes/notes.page').then(m => m.NotesPage)
			}
		]
	}
];
