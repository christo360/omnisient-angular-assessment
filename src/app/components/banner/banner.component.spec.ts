import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { By } from '@angular/platform-browser';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image when imageURLInput is provided', () => {
    component.imageURLInput = 'https://example.com/image.jpg';
    component.primaryTextInput = 'Primary Text';
    component.secondaryTextInput = 'Secondary Text';

    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__image')
    );
    const fallbackText = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__fallback-text')
    );

    expect(imageElement).toBeTruthy();
    expect(imageElement.nativeElement.src).toContain('https://example.com/image.jpg');
    expect(fallbackText).toBeFalsy();
  });

  it('should display fallback text when imageURLInput is not provided', () => {
    component.imageURLInput = '';
    component.primaryTextInput = 'Primary Text';
    component.secondaryTextInput = 'Secondary Text';

    fixture.detectChanges();

    const imageElement = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__image')
    );
    const fallbackText = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__fallback-text')
    );

    expect(imageElement).toBeFalsy();
    expect(fallbackText).toBeTruthy();
    expect(fallbackText.nativeElement.textContent).toContain('No image provided');
  });

  it('should display primary and secondary text', () => {
    component.imageURLInput = 'https://example.com/image.jpg';
    component.primaryTextInput = 'Primary Text';
    component.secondaryTextInput = 'Secondary Text';

    fixture.detectChanges();

    const primaryText = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__text h2')
    );
    const secondaryText = fixture.debugElement.query(
      By.css('.banner-container__cta-card__image-container__text p')
    );

    expect(primaryText).toBeTruthy();
    expect(primaryText.nativeElement.textContent).toBe('Primary Text');
    expect(secondaryText).toBeTruthy();
    expect(secondaryText.nativeElement.textContent).toBe('Secondary Text');
  });
});

