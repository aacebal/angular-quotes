import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx'


@Injectable()
export class JokesService {

  constructor( private http: Http) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res: Response) => res.json())
      .map((res) => res.value.joke)
  }

}
