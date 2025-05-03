import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { MOVIES } from '../mock/movies.mock';
@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies() {
    return of(MOVIES);
  }
}
