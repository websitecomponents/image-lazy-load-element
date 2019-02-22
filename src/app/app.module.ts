import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ImageLazyLoadComponent } from './image-lazy-load/image-lazy-load.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
  ImageLazyLoadComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ImageLazyLoadComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const elements: any[] = [
      [ImageLazyLoadComponent, 'image-lazy-load']
    ];
    for (const [component, name] of elements) {
      const el = createCustomElement(component, {injector: this.injector});
      customElements.define(name, el);
    }

  }
 }
