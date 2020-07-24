import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const MyRouting = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent }
]);