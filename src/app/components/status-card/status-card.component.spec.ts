import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusCardComponent } from './status-card.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DatasetFacade } from '../../facades/dataset.facade';
import { mock, instance, when } from 'ts-mockito';

describe('StatusCardComponent', () => {
  let component: StatusCardComponent;
  let fixture: ComponentFixture<StatusCardComponent>;
  let mockDatasetFacade: DatasetFacade;

  beforeEach(async () => {
    const mockedFacade = mock(DatasetFacade);

    when(mockedFacade.getStatusCount('review')).thenReturn(of(5));

    mockDatasetFacade = instance(mockedFacade);

    await TestBed.configureTestingModule({
      imports: [StatusCardComponent],
      providers: [{ provide: DatasetFacade, useValue: mockDatasetFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct status count', () => {
    component.statusInput = 'review';
    component.ngOnInit();
    fixture.detectChanges();

    const statusCountElement = fixture.debugElement.query(By.css('.status-count'));
    expect(statusCountElement.nativeElement.textContent).toContain('5');
  });
});
