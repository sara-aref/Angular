import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0);
  constructor() { }

  getcounter() {
    return this.counter.asObservable();
  }

  updateCounter(newCounter: number) {
    this.counter.next(newCounter);
  }

}
