import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ElementRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-image-lazy-load',
  templateUrl: './image-lazy-load.component.html',
  styleUrls: ['./image-lazy-load.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageLazyLoadComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Output() isVisible = new EventEmitter();

  status = {
    visible: false,
    loaded: false
  };

  constructor(private cd: ChangeDetectorRef, private el: ElementRef) {}
  private setState(key, value) {
    this.status = { ...this.status, [key]: value };
    this.cd.detectChanges();
  }

  private calcVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect().top;
    if (rect <= window.innerHeight && !this.status.visible) {
      this.setState('visible', true);
      this.customEmit(true);
    }
  }
  ngOnInit() {
    this.calcVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onscroll(e) {
    this.calcVisibility();
  }

  onLoad() {
    setTimeout(() => {
      this.setState('loaded', true);
    }, 1000);
  }
  @Input()
  public log = () => {
    const state = this.status;
    console.log(state);
  };
  private customEmit(val) {
    this.isVisible.emit(val);
    const domEvent = new CustomEvent('is-visible');
    this.el.nativeElement.dispatchEvent(domEvent);
  }
}
