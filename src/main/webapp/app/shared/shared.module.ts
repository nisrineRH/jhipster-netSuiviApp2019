import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NetSuiviApp2019SharedLibsModule, NetSuiviApp2019SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NetSuiviApp2019SharedLibsModule, NetSuiviApp2019SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NetSuiviApp2019SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NetSuiviApp2019SharedModule {
  static forRoot() {
    return {
      ngModule: NetSuiviApp2019SharedModule
    };
  }
}
