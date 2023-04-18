import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id: string) {
    return http.get(`/users/${id}`);
  }

  create(data: string) {
    return http.post("/users", data);
  }

  update(id: string, data: string) {
    return http.put(`/users/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  login(username: string, password: string) {
    return http.post("/users/login", { username, password });
  }

  register(name: string, email: string, username: string, password: string) {
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    return http.post("/users/register", {
      name,
      email,
      username,
      password,
      createdAt,
      updatedAt,
    });
  }

  getUserProfile(id: string) {
    return http.get(`/users/profile/${id}`);
  }
}

export default new UserDataService();
