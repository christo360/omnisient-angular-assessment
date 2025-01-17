import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasetListComponent } from './dataset-list.component';
import { DatasetFacade } from '../../facades/dataset.facade';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BannerComponent } from '../banner/banner.component';
import { StatusCardComponent } from "../status-card/status-card.component";
import { DatasetTableComponent } from '../dataset-table/dataset-table.component';
import { DatasetCardComponent } from '../dataset-card/dataset-card.component';
import { Dataset } from '../../models/dataset.model';
import { mock, instance, when } from 'ts-mockito';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DatasetListComponent', () => {
  let component: DatasetListComponent;
  let fixture: ComponentFixture<DatasetListComponent>;
  let mockedFacade: DatasetFacade;

  const mockDatasets: Dataset[] = [
    { id: 1, name: 'Dataset 1', uploadedBy: 'User A', updateDate: new Date('2024-01-01'), uploaded: true, status: 'review', containsPersonalInfo: false, containsErrors: false },
    { id: 2, name: 'Dataset 2', uploadedBy: 'User B', updateDate: new Date('2024-01-10'), uploaded: false, status: 'fail', containsPersonalInfo: true, containsErrors: false },
    { id: 3, name: 'Dataset 3', uploadedBy: 'User C', updateDate: new Date('2024-01-15'), uploaded: true, status: 'shares', containsPersonalInfo: false, containsErrors: true }
  ];

  beforeEach(async () => {
    const mockFacade = mock(DatasetFacade);

    when(mockFacade.loadDatasets()).thenReturn(of(mockDatasets));
    when(mockFacade.getStatusCount('review')).thenReturn(of(1));
    when(mockFacade.getStatusCount('fail')).thenReturn(of(1));

    mockedFacade = instance(mockFacade);

    await TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        BannerComponent,
        StatusCardComponent,
        DatasetTableComponent,
        DatasetCardComponent,
        DatasetListComponent,
      ],
      providers: [
        { provide: DatasetFacade, useValue: mockedFacade },
        provideAnimations(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load datasets on initialization', () => {
    expect(component.datasets).toEqual(mockDatasets);
  });

  it('should filter datasets by status', () => {
    component.filterDatasetsByStatus('review');
    expect(component.dataSource.data).toEqual([mockDatasets[0]]);
  });
});


