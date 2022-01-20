import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventObject: Event[] = [
    {
      name: 'Penicillin felfedezése',
      date: '1928.09.03.',
      time: '11:12',
      location: {
        address: 'Praed Street',
        city: 'London',
        country: 'UK',
      }
    },
    {
      name: 'Első CT felvétel',
      date: '1971.10.01.',
      time: '14:39',
      location: {
        address: 'Copse Hill',
        city: 'London',
        country: 'UK',
      }
    },
    {
      name: 'Fekete himlő eradikációja',
      date: '1979.12.09.',
      time: '12:00',
      location: {
        address: 'N/A',
        city: 'N/A',
        country: 'Globális',
      }
    }
  ]

  constructor() { }

getAll(): Event[] {
  return this.eventObject;
}

}
