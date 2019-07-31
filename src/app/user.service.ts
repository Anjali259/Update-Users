import { Injectable } from '@angular/core';
import { Users } from './user-list/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User = [
    { "id": 1, "name": "Ian Mac", "Age": 27 },
    { "id": 2, "name": "Herlin Dave", "Age": 29 },
    { "id": 3, "name": "John Bravo", "Age": 32 },
    { "id": 4, "name": "Ambrogi Produce", "Age": 30 },
    { "id": 5, "name": "Dave Buster", "Age": 25 }
  ];

  constructor() { }

  public getUsers() {

    return this.User;

  }

  put(id: number, values: Object = {}): Users {
    let updatevalue = this.getuserbyid(id);
    if (!updatevalue) {
      return null;
    }
    Object.assign(updatevalue, values);
    return updatevalue;
  }

  getuserbyid(id: number): Users {
    return this.User
      .filter(Users => Users.id === id)
      .pop();
  }


}



