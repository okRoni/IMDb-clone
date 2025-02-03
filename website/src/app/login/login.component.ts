import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   // Crear el formulario reactivo
   loginForm: FormGroup;

   constructor(
    private router: Router
   ) {
     this.loginForm = new FormGroup({
       username: new FormControl('', [Validators.required]),  // Campo obligatorio para el nombre de usuario
       password: new FormControl('', [Validators.required, Validators.minLength(6)])  // Campo obligatorio para la contraseña, con validación de longitud mínima
     });
   }
 
   // Método para manejar el envío del formulario
   onSubmit() {
     if (this.loginForm.valid) {
       // Aquí puedes agregar lógica para enviar los datos del formulario al backend
       console.log('Formulario enviado:', this.loginForm.value);
       this.router.navigate(['/home']);
     } else {
       console.log('Formulario no válido');
     }
   }
}
