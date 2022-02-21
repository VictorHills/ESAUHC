import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {AddsingleService} from "./add-single.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-single',
  templateUrl: './add-single.page.html',
  styleUrls: ['./add-single.page.scss'],
})
export class AddSinglePage implements OnInit {
  isLoading = false;

  constructor(private alertCtrl: AlertController,
              private alertController: AlertController,
              private addsingleService: AddsingleService,
              private loadingCtrl: LoadingController,) {
  }

  ngOnInit() {
  }

  addsingle(first_name: string,
            middle_name: string,
            last_name: string,
            sex: string,
            dob: Date,
            beneficiary_lga: string,
            address: string,
            nin_number: string,
            mobile_no_pry: string,
            mobile_no_sec: string,
            email: string,
            phc_lga: string,
            ward: string,
            phc: string,
            marital_status: string,
            employment_status: string,
            name_employer_school: string,
            address_employer_school: string,
            occupation: string,
            genotype: string,
            blood_group: string,
            health_condition: string,
            disability: string,
            pregnant_vulnerable: string,
            surgery: string,
            surgery_type: string,
            surgery_year: Date,
            file_path: string,
            agreement_date: string,) {

    this.isLoading = true;
    this.loadingCtrl
      .create({keyboardClose: true, message: 'Adding Beneficiary...'})
      .then(loadingEl => {
        loadingEl.present();
        this.addsingleService.addsingle(
          first_name,
          middle_name,
          last_name,
          sex,
          dob,
          beneficiary_lga,
          address,
          nin_number,
          mobile_no_pry,
          mobile_no_sec,
          email,
          phc_lga,
          ward,
          phc,
          marital_status,
          employment_status,
          name_employer_school,
          address_employer_school,
          occupation,
          genotype,
          blood_group,
          health_condition,
          disability,
          pregnant_vulnerable,
          surgery,
          surgery_type,
          surgery_year,
          file_path,
          agreement_date,
        ).subscribe(
          resData => {
            console.log(resData);
            if (resData) {
              this.showAlert();
            }
            this.isLoading = false;
            loadingEl.dismiss();
          }, async (res) => {
            await loadingEl.dismiss();
            const alert = await this.alertController.create({
              header: 'Sign up failed incorrect User details',
              message: res.eror.error,
              buttons: ['OK'],
            });
            await alert.present();
          }
        )
      })


  }

  onSubmit(addsingle: NgForm) {
    if (!addsingle.valid) {
      return;
    }
    const first_name = addsingle.value.first_name;
    const middle_name = addsingle.value.middle_name;
    const last_name = addsingle.value.last_name;
    const sex = addsingle.value.sex;
    const dob = addsingle.value.dob;
    const beneficiary_lga = addsingle.value.beneficiary_lga;
    const address = addsingle.value.address;
    const nin_number = addsingle.value.nin_number;
    const mobile_no_pry = addsingle.value.mobile_no_pry;
    const mobile_no_sec = addsingle.value.mobile_no_sec;
    const email = addsingle.value.email;
    const phc_lga = addsingle.value.phc_lga;
    const ward = addsingle.value.ward;
    const phc = addsingle.value.phc;
    const marital_status = addsingle.value.marital_status;
    const employment_status = addsingle.value.employment_status;
    const name_employer_school = addsingle.value.name_employer_school;
    const address_employer_school = addsingle.value.address_employer_school;
    const occupation = addsingle.value.occupation;
    const genotype = addsingle.value.genotype;
    const blood_group = addsingle.value.blood_group;
    const health_condition = addsingle.value.health_condition;
    const disability = addsingle.value.disability;
    const pregnant_vulnerable = addsingle.value.pregnant_vulnerable;
    const surgery = addsingle.value.surgery;
    const surgery_type = addsingle.value.surgery_type;
    const surgery_year = addsingle.value.surgery_year;
    const file_path = addsingle.value.file_path;
    const agreement_date = addsingle.value.agreement_date;

    this.addsingle(
      first_name,
      middle_name,
      last_name,
      sex,
      dob,
      beneficiary_lga,
      address,
      nin_number,
      mobile_no_pry,
      mobile_no_sec,
      email,
      phc_lga,
      ward,
      phc,
      marital_status,
      employment_status,
      name_employer_school,
      address_employer_school,
      occupation,
      genotype,
      blood_group,
      health_condition,
      disability,
      pregnant_vulnerable,
      surgery,
      surgery_type,
      surgery_year,
      file_path,
      agreement_date,
    )
  }

  private showAlert() {
    this.alertCtrl
      .create({
        header: 'Beneficiary Created Successfully',
        message: 'Click Okay to Sign in',
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
}
