import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const API_URL = "http://localhost:3000/";
@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private http: HttpClient) { }

  async getUsers() {
    const userObs$ =  this.http.get(API_URL+"users");
    return await lastValueFrom(userObs$);
  }

  async getUsersById() {
    const userObs$ =  this.http.get(API_URL+"users/3");
    return await lastValueFrom(userObs$);
  }

  async delUser() {
    const userObs$ =  this.http.delete(API_URL+"users/1");
    return await lastValueFrom(userObs$);
  }
}
