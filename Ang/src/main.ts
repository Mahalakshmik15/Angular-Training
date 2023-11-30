import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularComponentComponent } from './app/angular-component/angular-component.component';




bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
