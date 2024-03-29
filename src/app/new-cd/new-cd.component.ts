import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CD } from '../models/cd.models';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex!: RegExp;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$'); 

    this.formulaire = this.formBuilder.group({
      titre: [null, [Validators.required, Validators.minLength(6)]],
      auteur: [null, [Validators.required, Validators.minLength(6)]],
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

  }
}
