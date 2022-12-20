import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.findById(idParam).subscribe({
      next: user => {
        this.selectedUser = user;
      }
    });
  }

  update() {
    this.userService.updateUser(this.selectedUser!).subscribe(
      result => { this.router.navigate(['list']) }
    )
  }

  isReadOnly() {
    //your condition, in this case textarea will be disbaled.
    if ((this.router.url.split("/")[1] === "detail")) {
      return true;
    }
    else {
      return false;
    }
  }

  isReadOnlyBott() {
    if ((this.router.url.split("/")[1] === "detail")) {
      return false;
    }
    else {

      return true;
    }
  }

}
