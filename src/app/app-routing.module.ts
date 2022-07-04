import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
// import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
// import { CreateProductComponent } from './admin/create-product/create-product.component';
// import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
// import { UserDetailComponent } from './admin/user-detail/user-detail.component';
// import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './user-login/register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-login/register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},

  // {path: 'admin/create-employee', component: CreateEmployeeComponent},
  // {path: 'admin/create-product', component: CreateProductComponent},
  // {path: 'admin/employee-details', component: EmployeeDetailsComponent},
  // {path: 'admin/user-detail', component: UserDetailComponent},
  // {path: 'user-edit', component: UserEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
