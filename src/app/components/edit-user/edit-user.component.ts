import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  selectedUser?: User = { id: 0, nome: "", cognome: "", dataDiNascita: "" }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.findById(idParam).subscribe({
      next: user => {
        this.selectedUser = user;
      }
    });
  }

}
