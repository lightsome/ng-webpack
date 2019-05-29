import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

declare var docReady:any;
import { DocReadyJsModule } from './docready';
new DocReadyJsModule();

docReady(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
