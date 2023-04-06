import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MedicalComponent } from './employee/component/medical/medical.component';
import { ChartsComponent } from './employee/component/charts/charts.component'
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { NgChartsModule } from 'ng2-charts';
import { LineComponent } from './employee/component/line/line.component';
import { BarComponent } from './employee/component/bar/bar.component';
import { PieComponent } from './employee/component/pie/pie.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        EmployeeComponent,
        HomeComponent,
        MedicalComponent,
        ChartsComponent,
        LineComponent,
        BarComponent,
        PieComponent
    ],
    providers: [AuthGuard,
        { provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        FormsModule,
        NgChartsModule,
       
    ]
})
export class AppModule { 
  constructor() {
    console.log('App Module Loaded')
  }
}
