import { Directive, OnInit, HostBinding} from '@angular/core';

@Directive({
  selector: '[appAutoHide]'
})
export class AutoHideDirective implements OnInit {

  @HostBinding('style.display') display: String = 'block';
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.display = 'none';
    }, 5000);
  }

  

}
