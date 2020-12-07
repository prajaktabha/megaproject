import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorial.model";

const baseUrl = "http://localhost:8080/api/quizes";

@Injectable({
  providedIn: "root",
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // getcatid(catg: any) {
  //   console.log(catg);
  //   return this.http.get(`${baseUrl}/${catg}`);
  // }
}
