import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MedicalComponent } from './employee/component/medical/medical.component';
import { ChartsComponent } from './employee/component/charts/charts.component';
import { AuthGuard } from './auth.guard';
import { LineComponent } from './employee/component/line/line.component';
import { BarComponent } from './employee/component/bar/bar.component';
import { PieComponent } from './employee/component/pie/pie.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'products', loadChildren:()=>import('./users/users.module')
.then(mod=> mod.UsersModule)},
  {path:'employee', component:EmployeeComponent, canActivate:[AuthGuard] },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'medical', component:MedicalComponent},
  {path:'chart', component:ChartsComponent},
  {path: 'line' , component: LineComponent },
  {path: 'bar' , component: BarComponent },
  {path: 'pie' , component: PieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
