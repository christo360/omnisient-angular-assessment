import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasetCardComponent } from './dataset-card.component';
import { By } from '@angular/platform-browser';

describe('DatasetCardComponent', () => {
  let component: DatasetCardComponent;
  let fixture: ComponentFixture<DatasetCardComponent>;

  const mockDataset = [
      { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
      { id: 2, name: 'Dataset 2', uploadedBy: 'User B', updateDate: new Date('2024-01-10'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 3, name: 'Dataset 3', uploadedBy: 'User C', updateDate: new Date('2024-01-15'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
      { id: 4, name: 'Dataset 4', uploadedBy: 'User D', updateDate: new Date('2024-01-20'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
      { id: 5, name: 'Dataset 5', uploadedBy: 'User E', updateDate: new Date('2024-01-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasetCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatasetCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    component.titleInput = 'Test Title';
    component.datasetInput = mockDataset;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('h6'));
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent).toBe('Test Title');
  });

  it('should display a maximum of 4 dataset items', () => {
    component.datasetInput = mockDataset;
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(By.css('.dataset-card__item'));
    expect(itemElements.length).toBe(4);

    const firstItem = itemElements[0].nativeElement;
    expect(firstItem.textContent).toContain('Dataset 1');
    expect(firstItem.textContent).toContain('Jan 1, 2024');
  });

  it('should not display more than 4 items even if datasetInput has more', () => {
    component.datasetInput = mockDataset;
    fixture.detectChanges();

    const itemElements = fixture.debugElement.queryAll(By.css('.dataset-card__item'));
    expect(itemElements.length).toBe(4);
  });

  it('should display navigation buttons', () => {
    component.datasetInput = mockDataset;
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('mat-card-actions button'));
    expect(buttons.length).toBe(2);

    const firstButton = buttons[0].nativeElement;
    expect(firstButton.textContent).toContain('keyboard_arrow_left');

    const secondButton = buttons[1].nativeElement;
    expect(secondButton.textContent).toContain('keyboard_arrow_right');
  });
});
