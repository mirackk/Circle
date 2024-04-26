import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor() { }

  @Input() hide: boolean = false;

  // hide an element after 5 seconds
  @HostBinding('hidden') get isHidden() {
    setTimeout(() => {
      this.hide = true;
    }, 5000);
    return this.hide;
  };
}
