import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CD } from '../models/cd.models';
import { CdsService } from '../services/cds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private myCdsService: CdsService, private router: Router) {}

  ngOnInit(): void {
    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$'); 

    this.formulaire = this.formBuilder.group({
      titre: [null, [Validators.required, Validators.minLength(2)]],
      auteur: [null, [Validators.required, Validators.minLength(2)]],
      miniature: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.min(0)]],
      quantite: [null, [Validators.required, Validators.min(0)]],
      prix: [null, [Validators.required, Validators.min(0)]],
    },
    {updateOn: 'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentCD = {
        id: 0,
        titre: formValue.titre,
        autheur: formValue.auteur,
        miniature: formValue.miniature,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        prix: formValue.prix,
        aVendre: false
      };
    });
  }

  validationFormulaire() {
    let newCd: CD = {
      id: 0,
      titre: this.formulaire.get('titre')?.value,
      autheur: this.formulaire.get('auteur')?.value,
      miniature: this.formulaire.get('miniature')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      prix: this.formulaire.get('prix')?.value,
      aVendre: false
    }
    this.myCdsService.addCD(newCd).subscribe( {
      next : cd =>
      {
        this.router.navigateByUrl('/catalog')
      },
      error : err =>
      {
        console.error('Observalbe ajout CD a émis une erreur : ' + err);
        alert("Désolé le CD n'a pas pu être ajouté");
      }
    });
  }
}
