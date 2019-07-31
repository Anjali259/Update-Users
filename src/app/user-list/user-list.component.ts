import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  Users: Array<{ id: number, name: string, Age: number }>;


  constructor(private _userservice: UserService) { }

  ngOnInit() {
    this.Users = this._userservice.getUsers();
  }

}
