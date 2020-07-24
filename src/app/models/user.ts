export interface IUserResponse {
  results: IUserData[]
}

export interface IUserData {
  email: String
  phone: String
  name: IUserName
  picture: IUserPicture
  location: IUserLocation
  dob: IUserDate
  login: IUserPassword
}

export interface IUserPassword {
  password: String
}

export interface IUserDate {
  age: Number
  date: Date
}

export interface IUserLocation {
  street: IUserAdress
}

export interface IUserAdress {
  name: String
  number: String
}

export interface IUserName {
  title: String
  first: String
  last: String
}

export interface IUserPicture {
  large: String
  medium: String
  thumbnail: String
}
