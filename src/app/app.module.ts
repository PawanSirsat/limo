import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
// import { ItemsService } from './services/items.service';
import { RouterModule,Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user-login/register/register.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { EmployeeComponent } from './employee/employee.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { AdminModule } from './admin/admin.model';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { HomeComponent } from './admin/home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './admin/create/create.component';
import { CartComponent } from './cart/cart.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UserLoginComponent,
    HeaderComponent,
    ShoppingComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingEditComponent,
    ProductsComponent,
    UserComponent,
    RegisterComponent,
    CreateProductComponent,
    UserDetailComponent,
    EmployeeComponent,
    UserEditComponent,
    HomeComponent,
    AdminLoginComponent,
    ProductComponent,
    CreateComponent,
    CartComponent,
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),

    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
