import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/v1";

class UserService {
  getUsers() {
    return axios.get(API_BASE_URL + "/users");
  }

  createUser(employee) {
    return axios.post(API_BASE_URL + "/createUser", employee);
  }

  updateUser(employeeId) {
    return axios.put(API_BASE_URL + "/user/update/", employeeId);
  }

  deleteUser(employeeId) {
    return axios.delete(API_BASE_URL + "/user/delete/", employeeId);
  }
}

export default UserService;
