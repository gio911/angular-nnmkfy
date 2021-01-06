import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {


@Output() 
@Input() product;
@Output() notify = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}