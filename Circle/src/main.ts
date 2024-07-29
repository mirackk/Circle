import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { onLCP } from 'web-vitals'; 


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
