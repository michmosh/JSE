import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {PizzasService} from '../shared/services/pizzas.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns:Array<string> = ['id', 'size', 'toppings', 'price'];
  data:Array<any> = [];
  dataSource:MatTableDataSource<any>;
 
  constructor(private service: PizzasService) { }

  ngOnInit() {
    this.data = this.service.getOrders();
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

}
