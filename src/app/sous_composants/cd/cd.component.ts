import { Component, Input, OnInit, input} from '@angular/core';
import { CD } from '../../models/cd.models';
import { CdsService } from '../../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CDComponent implements OnInit{
  @Input() Cd!: CD;
  theCd!: CD;
  idcd!: string;

  constructor(private cdService: CdsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idcd = this.route.snapshot.params['id'];
    if (this.idcd !== undefined) {
      this.cdService.getCDById(+this.idcd).subscribe(cd => {this.theCd = cd})
    } 
    else {
      this.theCd = this.Cd;
    }
  } 

  onAddCD() {
    this.theCd  .quantite += 1;
  }
}
