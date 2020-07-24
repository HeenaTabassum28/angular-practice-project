import { RouterModule } from '@angular/router'; 
import { UserDetailsComponent } from './user-details/user-details.component'; 
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GuardService } from 'src/shared/routerguards.service';

export const ChildRouting = RouterModule.forRoot([
    { path: 'user-details/:id/:method', component: UserDetailsComponent }, 
    { path: 'portfolio', component: PortfolioComponent,canActivate:[GuardService] }]);