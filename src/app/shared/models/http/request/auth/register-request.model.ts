export class RegisterRequestModel {
  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
}
