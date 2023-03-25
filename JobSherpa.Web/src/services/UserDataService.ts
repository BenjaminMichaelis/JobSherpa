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
}

export default new UserDataService();