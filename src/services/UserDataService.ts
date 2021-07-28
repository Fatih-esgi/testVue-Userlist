import http from "./apiAddress";

class UserDataService {

  getAll(): Promise<any> {
    return http.get("/users");
  }

  add(array: any): Promise<any> {
    console.log(array);
    return http.post(`/posts`, array);
    
  }
  delete(id: any): Promise<any> {
    console.log(id);
    return http.delete(`/users/${id}`);
    
  }

}

export default new UserDataService();