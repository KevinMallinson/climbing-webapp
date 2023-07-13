import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';

import {HomePage} from './home.page';

describe('TabsPage', () => {
	let component: HomePage;
	let fixture: ComponentFixture<HomePage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomePage],
			providers: [provideRouter([])],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
