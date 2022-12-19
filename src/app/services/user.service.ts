import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})




export class UserService {


  ELEMENT_DATA: User[] = [
    { id: 1, nome: 'Nome1', cognome: "Cognome1", dataDiNascita: "01-01-2022" },
    { id: 2, nome: 'Nome2', cognome: "Cognome2", dataDiNascita: "02-02-2022" },
    { id: 3, nome: 'Nome3', cognome: "Cognome3", dataDiNascita: "03-03-2022" },
    { id: 4, nome: 'Nome4', cognome: "Cognome4", dataDiNascita: "04-04-2022" },
    { id: 5, nome: 'Nome5', cognome: "Cognome5", dataDiNascita: "05-05-2022" },
    { id: 6, nome: 'Nome6', cognome: "Cognome6", dataDiNascita: "06-06-2022" },
    { id: 7, nome: 'Nome7', cognome: "Cognome7", dataDiNascita: "07-07-2022" },
    { id: 8, nome: 'Nome8', cognome: "Cognome8", dataDiNascita: "08-08-2022" },
    { id: 9, nome: 'Nome9', cognome: "Cognome9", dataDiNascita: "09-09-2022" },
    { id: 10, nome: 'Nome10', cognome: "Cognome10", dataDiNascita: "10-10-2022" }

  ];

  constructor() { }

  getAll(): Observable<User[]> {
    return of(this.ELEMENT_DATA);
  }

  findById(userId: number): Observable<User | undefined> {
    return of(this.ELEMENT_DATA.find(
      item => item.id === userId
    ))
  }

  deleteById(userId: number): Observable<User[]> {

    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(elem => {
      return elem.id !== userId
    });
    return of(this.ELEMENT_DATA);
  }

}
