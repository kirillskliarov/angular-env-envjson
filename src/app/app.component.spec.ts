import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Environment } from "./core/interfaces/environment";
import { ENVIRONMENT_TOKEN } from "./core/tokens/environment-token";

describe('AppComponent', () => {
  let envStub: Environment;
  const envFactory = () => envStub;

  beforeEach(() => {
    envStub = {
      apiKey: 'abc',
      production: false,
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ENVIRONMENT_TOKEN, useFactory: envFactory },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should env as envStub`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.env).toEqual(envStub);
  });

  it('should render apiKey', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.env-value_apiKey')?.textContent).toContain('abc');
  });

  it('should render env.apiKey', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.env-value_apiKey')?.textContent).toContain('abc');
  });

  describe('on prod mode', () => {
    beforeEach(() => {
      envStub = {
        ...envStub,
        production: true,
      };
    });

    it('should render env.production true', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.env-value_production')?.textContent).toContain('true');
    });

    it('should not render development mode message', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.development-mode-message')).toBeNull();
    });
  });

  describe('on non-prod mode', () => {
    beforeEach(() => {
      envStub = {
        ...envStub,
        production: false,
      };
    });

    it('should render env.production false', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.env-value_production')?.textContent).toContain('false');
    });

    it('should render development mode message', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.development-mode-message')).toBeInstanceOf(Element);
    });
  });
});
