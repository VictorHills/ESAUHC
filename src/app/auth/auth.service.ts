import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "./user.model";
import {tap, map} from "rxjs/internal/operators";
import {Plugins} from "@capacitor/core";
import {BehaviorSubject} from "rxjs";

export interface AuthResponseData {
    full_name: string;
    agent_id: string;
    email: string;
    token: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user = new BehaviorSubject<User>(null);

    get token() {
        return this._user.asObservable().pipe(
            map(user => {
                return user.token;
            })
        );
    }

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            `https://esauhc.southsaharan.org/api/auth/login`,
            {email: email, password: password}
        ).pipe(tap(this.setUserData.bind(this)));
    }

    private setUserData(userData: AuthResponseData) {
        this._user.next(
            new User(
                userData.agent_id,
                userData.full_name,
                userData.email,
                userData.token,
            )
        );
        this.storeAuthData(
            userData.agent_id,
            userData.full_name,
            userData.email,
            userData.token,
        );
    }

    private storeAuthData(agent_id: string,
                          full_name: string,
                          email: string,
                          token: string) {
        const data = JSON.stringify({
            agent_id: agent_id,
            token: token,
            email: email,
            full_name: full_name
        });
        Plugins.Storage.set({key: 'authData', value: data});
    }
}
