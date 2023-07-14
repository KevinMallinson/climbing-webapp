import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NavigationTabsComponent} from "../../components/navigation-tabs/navigation-tabs.component";

@Component({
  selector: 'app-betas',
  templateUrl: './betas.page.html',
  styleUrls: ['./betas.page.scss'],
  standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, NavigationTabsComponent]
})
export class BetasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
