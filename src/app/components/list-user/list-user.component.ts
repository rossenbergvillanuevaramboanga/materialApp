
import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'dataDiNascita', 'azioni'];
  dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  currentUser?: User;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private userService: UserService, private router: Router, private dialogService: DialogService, private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getAll().subscribe(
      res => { this.dataSource = new MatTableDataSource<User>(res) }
    )
  }

  deleteUser(userId: number) {
    // this.userService.deleteById(userId).subscribe(
    //   res => { this.dataSource.data = res }
    // )
    this.userService.findById(userId).subscribe({
      next: user => {
        this.currentUser = user;
      }
    });

    this.dialogService.openConfirmDialog(`Vuoi cancellare ${this.currentUser?.nome} ${this.currentUser?.cognome}?`)
      .afterClosed().subscribe(res => {
        if (res) {
          this.userService.deleteById(userId).subscribe(
            result => {
              this.dataSource.data = result;
              this.snackbarService.openSnackbar("Eliminazione Effettuata!")
            }
          );
        }
      });
  }

  editUser(userId: number) {
    this.router.navigate(['edit/', userId])
  }

  showUser(userId: number) {
    // this.userService.findById(userId).subscribe(
    //   (res) => { this.currentUser = res },
    // )
    this.router.navigate(['detail/', userId])
  }

  createUser() {
    this.router.navigate(['edit'])
  }

}
