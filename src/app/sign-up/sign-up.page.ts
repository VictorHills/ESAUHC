import {Component, OnInit} from '@angular/core';
import {SignupService} from "./sign-up.service";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    isLoading = false;

    constructor(private authService: SignupService,
                private loadingCtrl: LoadingController,
                private alertController: AlertController,
                private alertCtrl: AlertController,
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

    authenticate(first_name: string, middle_name: string, last_name: string, email: string, password: string, password_confirmation: string) {
        this.isLoading = true;
        this.loadingCtrl
            .create({keyboardClose: true, message: 'Creating User...'})
            .then(loadingEl => {
                loadingEl.present();
                this.authService.signup(first_name, middle_name, last_name, email, password, password_confirmation).subscribe(
                    resData => {
                        console.log(resData);
                        if (resData) {
                            this.showAlert();
                        }
                        this.isLoading = false;
                        loadingEl.dismiss();
                    }, async(res) => {
                        await loadingEl.dismiss();
                        const alert = await this.alertController.create({
                            header: 'Sign up failed incorrect User details',
                            message: res.eror.error,
                            buttons: ['OK'],
                        });
                        await alert.present();
                    }
                );
            });
    }

    onSubmit(signup: NgForm) {
        if (!signup.valid) {
            return;
        }
        const first_name = signup.value.first_name;
        const middle_name = signup.value.middle_name;
        const last_name = signup.value.last_name;
        const email = signup.value.email;
        const password = signup.value.password;
        const password_confirmation = signup.value.password_confirmation;

        this.authenticate(first_name, middle_name, last_name, email, password, password_confirmation);
    }

    private showAlert() {
        this.alertCtrl
            .create({
                header: 'Successfully created user',
                message: 'Click Okay to Sign in',
                buttons: ['Okay']
            })
            .then(alertEl => alertEl.present());
    }

}
