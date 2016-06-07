import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2FirstStepsAppComponent } from '../app/angular2-first-steps.component';

beforeEachProviders(() => [Angular2FirstStepsAppComponent]);

describe('App: Angular2FirstSteps', () => {
  it('should create the app',
      inject([Angular2FirstStepsAppComponent], (app: Angular2FirstStepsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-first-steps works!\'',
      inject([Angular2FirstStepsAppComponent], (app: Angular2FirstStepsAppComponent) => {
    expect(app.title).toEqual('angular2-first-steps works!');
  }));
});
