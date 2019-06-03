import { NgModule } from '@angular/core';

import { NetSuiviApp2019SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NetSuiviApp2019SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NetSuiviApp2019SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NetSuiviApp2019SharedCommonModule {}
