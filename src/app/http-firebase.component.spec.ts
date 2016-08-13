import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HttpFirebaseAppComponent } from '../app/http-firebase.component';

beforeEachProviders(() => [HttpFirebaseAppComponent]);

describe('App: HttpFirebase', () => {
  it('should create the app',
      inject([HttpFirebaseAppComponent], (app: HttpFirebaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'http-firebase works!\'',
      inject([HttpFirebaseAppComponent], (app: HttpFirebaseAppComponent) => {
    expect(app.title).toEqual('http-firebase works!');
  }));
});
