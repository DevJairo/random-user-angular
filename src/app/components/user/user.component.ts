import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { formatDate } from '@angular/common'
import { IUserResponse, IUserData } from '../../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  avatar: String
  user: Object
  select : Object
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getRandom()
  }
  getRandom(){
    this.user = null
    this.userService.getRandom().subscribe((response: IUserResponse) => {
      const { results } = response
      const [data] = results
      const { name, email, phone, picture, location, dob, login }: IUserData = data
      this.avatar = picture.large
      this.user = {
        name:  `${name.first} ${name.last}`,
        email: email,
        birthday: formatDate(dob.date,'dd/mm/yyyy', 'en-US'),
        address: `${location.street.number} ${location.street.name}`,
        phone: phone,
        password: login.password
      }
      this.select = this.user
    })
  }
  selectData(setOption: Object) {
    this.select = setOption
  }
}
