import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  longString:String = "this is a string with length over 20.";
  shortString:String = "Hello";

  ngOnInit(): void {
  }

}
