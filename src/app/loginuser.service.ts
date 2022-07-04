import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  setItem: any;
  setItemData(arg0: string, name: any) {
    throw new Error('Method not implemented.');
  }
 
  baseUrl="http://localhost:8090/api/v1/login";
  constructor(private httpClient: HttpClient) { }

  // loginUser(login : Login):Observable<object> 
  // {
  //   console.log(login)
  //   return this.httpClient.post(`${this.baseUrl}`,login)
  // }

 public loginUserRemote(user?: User): Observable<Object> 
  {
    return this.httpClient.post("http://localhost:8090/api/v1/login",user);
  }

 public registerUserRemote(user? : User): Observable<Object>
 {
  return this.httpClient.post("http://localhost:8090/api/v1/registeruser",user);
 }

 public  listUser(): Observable<User[]> {
  return this.httpClient.get<User[]>("http://localhost:8090/api/v1/registeruser");
}

public loginAdminRemote(admin?: Admin): Observable<Object> 
{
  return this.httpClient.post("http://localhost:8090/api/v1/loginAdmin",admin);
}

public getUserByToken (): Observable<User> {
  return this.httpClient.get<User>(`${this.baseUrl}/user${localStorage.getItem('token')}/cart`)
}

}
