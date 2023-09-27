import { Component } from '@angular/core';
import  emailjs from '@emailjs/browser';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  // champ1: string = '';
  // champ2: string = '';
  // champ3: string = '';
  // onSubmit() {
  //   // Traitement du formulaire ici
  // }


  form: FormGroup = this.fb.group({
    from_name: '',
    to_name:'Admin',
    from_email: '',
    num: '',
    pays: '',
    message: '',

  });



  constructor(private fb: FormBuilder){}
async send(){
  emailjs.init('dAGnB-uwTE4r9fbou');
  let response = await emailjs.send("service_qoi7bib","template_xo18kvp",{
    from_name: this.form.value.from_name ,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    num: this.form.value.num,
    pays: this.form.value. pays,
    message: this.form.value.message,
    });

    alert('Le message a été envoyé')
    this.form.reset();
}
}


