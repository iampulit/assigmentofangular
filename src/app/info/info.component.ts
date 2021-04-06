import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  employees = [
    {employeeID : 1,FirstName : 'PULKIT', LastName : 'Gupta', City : 'Jaipur', Department : 'Traine', Email : 'pulkit@intimetec.com'},
    {employeeID : 2,FirstName : 'Ronak', LastName : 'Arora', City : 'Udaipur', Department : 'Traine', Email : 'ronak@intimetec.com'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
