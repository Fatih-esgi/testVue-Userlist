import http from "./apiAddress";

class UserDataService {

  getAll(): Promise<any> {
    return http.get("/users");
  }

  add(id: any): Promise<any> {
    return http.post(`/posts/${id}`);
  }
  delete(id: any): Promise<any> {
    return http.delete(`/users/${id}`);
  }

}

export default new UserDataService();