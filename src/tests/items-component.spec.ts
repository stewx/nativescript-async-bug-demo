import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender,
} from 'nativescript-angular/testing';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemsComponent } from '~/app/item/items.component';

describe('ItemsComponent', () => {

  const components = [
    ItemsComponent
  ];
  const providers = [
    Page,
  ];
  const imports = [
    RouterTestingModule,
  ];
  const entryComponents = [];

  let fixture: ComponentFixture<ItemsComponent>;
  let component: ItemsComponent;

  beforeEach(nsTestBedBeforeEach(components, providers, imports, entryComponents));

  afterEach(nsTestBedAfterEach(false));

  beforeEach(async(async () => {
    fixture = await nsTestBedRender(ItemsComponent);
    component = fixture.componentInstance;
  }));

  it('creates the component', async(async () => {
    expect(component).toBeTruthy();
  }));

  it('should mark the button as pushed after 2 seconds when you tap it (using whenStable)', async(() => {
    fixture.detectChanges();
    component.onTapButton();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
        expect(component.buttonWasTapped).toBe(true);
    });
  }));

  it('should mark the button as pushed after 2 seconds when you tap it (using done function)', (done: DoneFn) => {
    fixture.detectChanges();
    component.onTapButton();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
        expect(component.buttonWasTapped).toBe(true);
        done();
    });
  });

  it('should mark the button as pushed after 2 seconds when you tap it (using setTimeout hack)', async(() => {
    fixture.detectChanges();
    component.onTapButton();

    fixture.detectChanges();

    setTimeout(() => {
        expect(component.buttonWasTapped).toBe(true);
    }, 3000);
  }));

});
