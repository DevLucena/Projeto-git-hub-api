import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ghRepositories } from '../models/ghrepositories';
import { GhUser } from '../models/ghUser';

@Injectable()

export class GhApiService {

  private readonly baseUrl: string = 'http://api.github.com/users' //readonly - e quando declaramos uma propriedade como apenas leitura

  constructor(
    private http: HttpClient //injeção de dependencia do HttpCliente
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findReposUser(username: string): Observable<ghRepositories[]>{
    return this.http.get<ghRepositories[]>(`${this.baseUrl}/${username}/repos`)
  }
}
