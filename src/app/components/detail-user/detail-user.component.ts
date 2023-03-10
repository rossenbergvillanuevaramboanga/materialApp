import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  selectedUser?: User;

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
