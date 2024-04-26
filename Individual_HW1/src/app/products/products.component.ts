import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  countDown: number = 5;
  strList: string[] = [
    'Lorem ipsum',
    'Lorem ipsum dolor',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // update the countDown num per second
  ngAfterViewInit() {
    const timer = setInterval(() => {
      if (this.countDown === 0) {
        clearInterval(timer);
      }
      else {
        this.countDown--;
      }
    }, 1000);
  }

}
