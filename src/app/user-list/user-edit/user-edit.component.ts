import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userid: number;

  public User;


  constructor(private _activateroute: ActivatedRoute, private router: Router, private _userservice: UserService) { }

  ngOnInit() {
    this._activateroute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userid = id;
      this.User = this._userservice.User.filter(u => u.id == this.userid)[0];

    })
  }

  Onupdate(User) {
    let newvalue = User;
    User = this._userservice.put(newvalue);
    this.router.navigate(['User']);
  }

  OnBack() {
    this.router.navigate(['User']);
  }

  OnPrevious() {
    let previousid = this.userid - 1;
    this.router.navigate(['/User', previousid]);
    if (previousid < 1) {
      this.router.navigate(['User'], { relativeTo: this._activateroute });
    }
  }
  OnNext() {
    let nextid = this.userid + 1;
    this.router.navigate(['/User', nextid]);
    if (nextid > 5) {
      this.router.navigate(['User'], { relativeTo: this._activateroute });
    }
  }

}

