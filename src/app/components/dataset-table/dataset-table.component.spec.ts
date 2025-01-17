import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasetTableComponent } from './dataset-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Dataset } from '../../models/dataset.model';
import { MatTableDataSource } from '@angular/material/table';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DatasetTableComponent', () => {
  let component: DatasetTableComponent;
  let fixture: ComponentFixture<DatasetTableComponent>;

  const mockDataset: Dataset[] = [
    { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false },
    { id: 2, name: 'Dataset 2', uploadedBy: 'User B', updateDate: new Date('2024-01-10'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
    { id: 3, name: 'Dataset 3', uploadedBy: 'User C', updateDate: new Date('2024-01-15'), uploaded: true, status: 'fail', containsPersonalInfo: false, containsErrors: true },
    { id: 4, name: 'Dataset 4', uploadedBy: 'User D', updateDate: new Date('2024-01-20'), uploaded: false, status: 'review', containsPersonalInfo: true, containsErrors: false },
    { id: 5, name: 'Dataset 5', uploadedBy: 'User E', updateDate: new Date('2024-01-25'), uploaded: true, status: 'approved', containsPersonalInfo: false, containsErrors: false }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatIconModule,
        DatasetTableComponent
      ],
      providers: [
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DatasetTableComponent);
    component = fixture.componentInstance;

    component.dataSourceInput = new MatTableDataSource(mockDataset);
    component.displayedColumnsInput = ['id', 'name', 'uploadedBy', 'updateDate', 'actions'];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

