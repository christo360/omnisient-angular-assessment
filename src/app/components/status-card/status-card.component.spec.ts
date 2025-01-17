import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusCardComponent } from './status-card.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DatasetFacade } from '../../facades/dataset.facade';

describe('StatusCardComponent', () => {
  let component: StatusCardComponent;
  let fixture: ComponentFixture<StatusCardComponent>;
  let mockDatasetFacade: jasmine.SpyObj<DatasetFacade>;

  beforeEach(async () => {
    mockDatasetFacade = jasmine.createSpyObj('DatasetFacade', ['getStatusCount']);

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

  it('should render the status text and icon', () => {
    component.statusInput = 'review';
    fixture.detectChanges();

    const statusTextElement = fixture.debugElement.query(By.css('.status-text'));
    expect(statusTextElement.nativeElement.textContent).toContain(component.statusDisplayText('review'));
    expect(statusTextElement.query(By.css('mat-icon')).nativeElement.textContent).toBe('keyboard_arrow_down');
  });

  it('should apply the selected class if selectedStatusInput matches statusInput', () => {
    component.statusInput = 'review';
    component.selectedStatusInput = 'review';
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('.status-card'));
    expect(cardElement.classes['selected']).toBeTrue();
  });

  it('should not apply the selected class if selectedStatusInput does not match statusInput', () => {
    component.statusInput = 'review';
    component.selectedStatusInput = 'fail';
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('.status-card'));
    expect(cardElement.nativeElement.classList.contains('selected')).toBeFalse();
  });


  it('should render the correct status count and icon color class', () => {
    mockDatasetFacade.getStatusCount.and.returnValue(of(5));
    component.statusInput = 'review';
    spyOn(component, 'getStatusColorClass').and.returnValue('green-icon');

    component.ngOnInit();
    fixture.detectChanges();

    const statusCountElement = fixture.debugElement.query(By.css('.status-count'));
    expect(statusCountElement.nativeElement.textContent).toContain('5');
    const iconElement = statusCountElement.query(By.css('mat-icon'));
    expect(iconElement.classes['green-icon']).toBeTrue();
  });

  it('should emit the correct status when the card is clicked', () => {
    spyOn(component.statusSelectedOutput, 'emit');
    component.statusInput = 'review';

    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('.status-card'));
    cardElement.triggerEventHandler('click', null);

    expect(component.statusSelectedOutput.emit).toHaveBeenCalledWith('review');
  });

  it('should render the correct percentage with dynamic class', () => {
    spyOn(component, 'getStatusColorClass').and.returnValue('green-icon');
    component.statusInput = 'review';
    fixture.detectChanges();

    const percentageElement = fixture.debugElement.query(By.css('.status-count span'));
    expect(percentageElement.nativeElement.textContent).toBe('10%');
    expect(percentageElement.classes['green-icon']).toBeTrue();
  });
});
