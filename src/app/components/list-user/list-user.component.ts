
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getAll().subscribe(
      res => { this.dataSource = new MatTableDataSource<User>(res) }
    )
  }

  deleteUser(userId: number) {
    this.userService.deleteById(userId).subscribe(
      res => { this.dataSource.data = res }
    )
  }

  editUser(userId: number) {
    throw new Error('Method not implemented.');
  }

  showUser(userId: number) {
    // this.userService.findById(userId).subscribe(
    //   (res) => { this.currentUser = res },
    // )
    this.router.navigate(['detail/', userId])
  }

}
