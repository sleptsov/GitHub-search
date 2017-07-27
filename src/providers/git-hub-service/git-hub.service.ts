import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@Injectable()
export class GitHubService {

  baseUrl: string = 'https://api.github.com/users'

  constructor(private http: Http) {
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .map((data: Response) => data.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserRepositories(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/repos`)
      .map((data: Response) => data.json())
      .catch((error: Response) => Observable.throw(error.json().error || 'Server error'));
  }

}
