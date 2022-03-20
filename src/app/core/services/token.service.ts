import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  isAuthurised(){
    return of(false);
  }

}
