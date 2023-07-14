import {Component, OnDestroy, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, TitleCasePipe} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterModule} from "@angular/router";
import {filter, takeWhile} from "rxjs";

@Component({
	selector: 'app-menu',
	templateUrl: 'menu.component.html',
	styleUrls: ['menu.component.scss'],
	standalone: true,
	imports: [CommonModule, IonicModule, RouterModule, TitleCasePipe, RouterLink]
})
export class MenuComponent implements OnInit, OnDestroy {
	public title = '';
	private _componentActive = true;

	constructor(private _router: Router) {
	}

	public ngOnInit(): void {
		this._router.events.pipe(
			takeWhile(() => this._componentActive),
			filter(event => event instanceof NavigationEnd)
		).subscribe(() => {
			this.setTitleFromUrl(this._router.url);
		});
	}

	public ngOnDestroy(): void {
		this._componentActive = false;
	}

	private setTitleFromUrl(url: string): void {
		const titleParts = url.split('/')
		let title = titleParts?.length ? titleParts[titleParts.length - 1] : 'Climbing App';

		if (title) {
			title = title[0].toUpperCase() + title.substring(1);
		}

		this.title = title;
	}
}
