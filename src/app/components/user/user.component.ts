import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  avatar: String
  user: any
  select : any
  constructor(private userService: UserService) { 
    this.getRandom()
  }
  ngOnInit(): void {
  }
  getRandom(){
    this.userService.getRandom().subscribe((response: any) => {
      let data = response.results[0]
      this.avatar = data.picture.large
      this.user = {
        name: `${data.name.first} ${data.name.last}`,
        email: data.email,
        birthday: formatDate(data.dob.date, 'dd/mm/yyyy', 'en-US'),
        address: `${data.location.street.number} ${data.location.street.name}`,
        phone: data.cell,
        password: data.login.password
      }
      this.select = this.user.name
    })
  }
  selectData(setOption: any) {
    this.select = setOption
  }
}
