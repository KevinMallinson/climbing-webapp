import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NavigationTabsComponent} from "../../components/navigation-tabs/navigation-tabs.component";

@Component({
	selector: 'app-notes',
	templateUrl: './notes.page.html',
	styleUrls: ['./notes.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, NavigationTabsComponent]
})
export class NotesPage{
	public notes: string[] = [];
	public currentNote = '';

	constructor() {
	}

	public saveNote() {
		if (!this.currentNote) {
			return;
		}

		this.notes.push(this.currentNote);
		this.currentNote = '';
	}

	deleteNote(index: number) {
		this.notes.splice(index, 1);
	}
}
