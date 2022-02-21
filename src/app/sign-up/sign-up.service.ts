import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class SignupService {

    constructor(private http: HttpClient) {
    }

    signup(first_name: string, middle_name: string, last_name: string, email: string, password: string, password_confirmation: string) {
        return this.http.post(
            `http://localhost:8000/api/auth/signup`,
            {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        );
    }

}
