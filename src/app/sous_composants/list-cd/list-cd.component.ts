import { Component, OnInit } from '@angular/core';
import { CdsService } from '../../services/cds.service'
import { CD } from '../../models/cd.models'

@Component({
  selector: 'app-list-cd',
  templateUrl: './list-cd.component.html',
  styleUrl: './list-cd.component.scss'
})
export class ListCDComponent implements OnInit{
  listcd! : CD[];

  constructor(private myCdsService: CdsService) {}

  ngOnInit(): void {
    this.listcd = this.myCdsService.getCDs();
  }
}
