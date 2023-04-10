export { User };
class User {
  name: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  constructor(
    name: string,
    email: string,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string
  ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
