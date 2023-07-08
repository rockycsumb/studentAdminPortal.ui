import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiurl = 'https://localhost:44357/'

  constructor(private httpClient: HttpClient) { }

  getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseApiurl + 'students');
  }
}
