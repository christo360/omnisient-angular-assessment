import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityCardComponent } from './activity-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Dataset } from '../../models/dataset.model';

describe('ActivityCardComponent', () => {
  let component: ActivityCardComponent;
  let fixture: ComponentFixture<ActivityCardComponent>;

  const mockDataset: Dataset =
   { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule, ActivityCardComponent],
      providers: [DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCardComponent);
    component = fixture.componentInstance;
    component.selectedDatasetInput = mockDataset;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the selected dataset', () => {
    const nameElement = fixture.debugElement.query(By.css('mat-card-content p:nth-child(1)'));
    expect(nameElement.nativeElement.textContent).toContain(mockDataset.name);
  });

  it('should display the update date of the selected dataset formatted as a date', () => {
    const dateElement = fixture.debugElement.query(By.css('mat-card-content p:nth-child(2)'));
    const formattedDate = new DatePipe('en-US').transform(mockDataset.updateDate, 'MMM d, yyyy');
    expect(dateElement.nativeElement.textContent).toContain(formattedDate);
  });


});

