import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {


  ELEMENT_DATA: User[] = [
    { id: 1, nome: 'Rossenberg', cognome: "Ramboanga", dataDiNascita: "01-01-2022" },
    { id: 2, nome: 'Loris', cognome: "Saija", dataDiNascita: "02-02-2022" },
    { id: 3, nome: 'Fabio', cognome: "Pulcinelli", dataDiNascita: "03-03-2022" },
    { id: 4, nome: 'Irene', cognome: "Perotti", dataDiNascita: "04-04-2022" },
    { id: 5, nome: 'Noemi', cognome: "Spurio", dataDiNascita: "05-05-2022" },
    { id: 6, nome: 'Balraj', cognome: "Singh", dataDiNascita: "06-06-2022" },
    { id: 7, nome: 'Roberto', cognome: "Esposito", dataDiNascita: "07-07-2022" },
    { id: 8, nome: 'Mario', cognome: "Olla", dataDiNascita: "08-08-2022" },
    { id: 9, nome: 'Francesco', cognome: "Parisi", dataDiNascita: "09-09-2022" },
    { id: 10, nome: 'Alessandro', cognome: "Cristiano", dataDiNascita: "10-10-2022" },
    { id: 11, nome: 'Alexandru', cognome: "Sava", dataDiNascita: "10-10-2022" },
    { id: 12, nome: 'Mattia', cognome: "La Rocca", dataDiNascita: "10-10-2022" },
    { id: 13, nome: 'Diego', cognome: "Mezzo", dataDiNascita: "10-10-2022" },


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

  updateUser(user: User): Observable<User[]> {
    this.ELEMENT_DATA.forEach((elem, index) => {
      if (elem.id == user.id) {
        return of(this.ELEMENT_DATA[index] = user);
        // return { ...elem, nome: user.nome, cognome: user.cognome, dataDiNascita: user.dataDiNascita };
      }
      return of(user);
    });
    return of(this.ELEMENT_DATA);
  }

}
