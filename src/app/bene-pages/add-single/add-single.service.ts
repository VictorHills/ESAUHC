import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class AddsingleService {
    constructor(private http: HttpClient) {
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
        return this.http.post(
            `http://localhost:8000/api/addbeneficiary`,
            {
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                sex: sex,
                dob: dob,
                beneficiary_lga: beneficiary_lga,
                address: address,
                nin_number: nin_number,
                mobile_no_pry: mobile_no_pry,
                mobile_no_sec: mobile_no_sec,
                email: email,
                phc_lga: phc_lga,
                ward: ward,
                phc: phc,
                marital_status: marital_status,
                employment_status: employment_status,
                name_employer_school: name_employer_school,
                address_employer_school: address_employer_school,
                occupation: occupation,
                genotype: genotype,
                blood_group: blood_group,
                health_condition: health_condition,
                disability: disability,
                pregnant_vulnerable: pregnant_vulnerable,
                surgery: surgery,
                surgery_type: surgery_type,
                surgery_year: surgery_year,
                file_path: file_path,
                agreement_date: agreement_date,
            }
        )

    }

}