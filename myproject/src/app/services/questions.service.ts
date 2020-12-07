import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/questions.model';


const question = 'http://localhost:8080/api/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<Questions[]> {
    return this.http.get<Questions[]>(question);
  }

  create(data: any): Observable<any> {
    return this.http.post(question, data);
  }
}
