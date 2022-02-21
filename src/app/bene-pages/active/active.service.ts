import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {take, map, tap, delay, switchMap} from 'rxjs/operators';

import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class ActiveService {
    private _active = new BehaviorSubject<Place[]>([]);

    constructor(private authService: AuthService, private http: HttpClient) {
    }
    fetchActive() {
        return this.authService.token.pipe(
            take(1),
            switchMap(token => {
                return this.http.post(
                    'https://us-central1-ionic-angular-course.cloudfunctions.net/storeImage',
                    { headers: { Authorization: 'Bearer ' + token } }
                );
            })
        );
    }

}