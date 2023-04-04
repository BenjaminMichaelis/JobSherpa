export { User };
class User {
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  constructor(
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string,
  ) {
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
