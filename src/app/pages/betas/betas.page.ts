import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TabbedViewComponent} from "../../components/tabbed-view/tabbed-view.component";

@Component({
  selector: 'app-betas',
  templateUrl: './betas.page.html',
  styleUrls: ['./betas.page.scss'],
  standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, TabbedViewComponent]
})
export class BetasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
