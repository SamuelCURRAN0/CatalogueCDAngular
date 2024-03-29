import { Injectable } from '@angular/core';
import { CD } from '../models/cd.models';

@Injectable({
  providedIn: 'root'
})
export class CdsService {

  constructor() { }

  getCDs(): CD[] {
    return [
            {
              id: 1,
              titre: 'The Dark Side of the Moon',
              autheur: 'Pink Floyd',
              prix: 10.99,
              miniature: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png',
              dateDeSortie: new Date('1973-03-01'),
              quantite: 5,
              aVendre: true,
            },
            {
              id: 2,
              titre: 'Thriller',
              autheur: 'Michael Jackson',
              prix: 12.99,
              miniature: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
              dateDeSortie: new Date('1982-11-30'),
              quantite: 10,
              aVendre: false,
            },
            {
              id: 3,
              titre: 'Abbey Road',
              autheur: 'The Beatles',
              prix: 15.99,
              miniature: 'https://pinkfloydhyperbase.dk/illu/covers/pulse.jpg',
              dateDeSortie: new Date('1969-09-26'),
              quantite: 8,
              aVendre: true,
            },
          ]
  }

  getCDById(id: number): CD {
    const cd = this.getCDs().find(cd => cd.id === id);
    if (cd) {
      return cd;
    } else {
      throw new Error('CD not found')
    }
  }


}
