import { Injectable } from '@angular/core';
import { Fund } from './models/fund.model';
import { User } from './models/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CrowdfundService {
  funds: FirebaseListObservable<any[]>;
  patrons: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.funds = database.list('funds');
    this.patrons = database.list('patrons');
  }

  getFunds() {
    return this.funds;
  }

  getPatrons() {
    return this.patrons;
  }

  addNewFund(newFund) {
    this.funds.push(newFund);
  }

  getFundById(fundId){
    return this.database.object('funds/' + fundId);
  }

  getLevelByIndex(index, fundId) {
    console.log(fundId);
    console.log(index);
    return this.database.object('funds/' + fundId + '/levels/' + index)
  }

}
