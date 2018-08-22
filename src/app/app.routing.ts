import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFundComponent } from './create-fund/create-fund.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-fund',
    component: CreateFundComponent
  },
  {
    path: 'funds/:id',
    component: FundDetailsComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
