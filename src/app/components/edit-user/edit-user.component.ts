import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  userReactive: FormGroup = this.fb.group({
    id: this.fb.control(''),
    nome: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    cognome: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    dataDiNascita: this.fb.control('', [Validators.required, Validators.minLength(4)])
  });

  selectedUser?: User = { id: 0, nome: "", cognome: "", dataDiNascita: "" }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private snackbarService: SnackbarService,
    private fb: FormBuilder, private activedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    if (idParam) {
      this.userService.findById(idParam).subscribe({
        next: user => {
          if (user) {
            this.userReactive.patchValue(user);
          }
        }
      });
    }
  }

  update() {
    this.userService.updateUser(this.userReactive.value).subscribe(
      result => {
        this.snackbarService.openSnackbar("Aggiornamento Effettuato!");
        this.router.navigate(['list'])
      }
    )
  }

  create() {
    this.userService.insertUser(this.userReactive.value).subscribe(
      result => {
        this.snackbarService.openSnackbar("Elemento Creato!");
        this.router.navigate(['list'])
      }
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

  isCreate() {
    if ((this.router.url.split("/")[2] === undefined)) {
      return true;
    }
    else {
      return false;
    }
  }

}
