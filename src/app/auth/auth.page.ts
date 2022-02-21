import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoadingController, AlertController, MenuController} from '@ionic/angular';
import {Observable} from 'rxjs';

import {AuthService, AuthResponseData} from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
    isLoading = false;
    isLogin = true;

    constructor(private authService: AuthService,
                private router: Router,
                private alertController: AlertController,
                private loadingCtrl: LoadingController,
                public menuCtrl: MenuController) {
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    ionViewDidLeave() {
        this.menuCtrl.enable(true);
    }

    ngOnInit() {
    }

    authenticate(email: string, password: string) {

        this.isLoading = true;
        this.loadingCtrl
            .create({keyboardClose: true, message: 'Logging in...'})
            .then(loadingEl => {
                loadingEl.present();
                let authObs: Observable<AuthResponseData>;
                if (this.isLogin) {
                    authObs = this.authService.login(email, password)
                }
                authObs.subscribe(
                    resData => {
                        console.log(resData);
                        this.isLoading = false;
                        loadingEl.dismiss();
                        this.router.navigateByUrl('/folder');
                    }, async(res) => {
                        await loadingEl.dismiss();
                        const alert = await this.alertController.create({
                            header: 'Login failed incorrect User details',
                            message: /*JSON.stringify(res)*/ res.error.error,
                            buttons: ['OK'],
                        });
                        await alert.present();
                    }
                );
            });
    }


    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.authenticate(email, password);
    }

}
