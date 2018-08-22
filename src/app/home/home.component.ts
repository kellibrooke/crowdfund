import { Component, OnInit } from '@angular/core';
import { CrowdfundService } from '../crowdfund.service';
import { Fund } from '../models/fund.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CrowdfundService ]
})
export class HomeComponent implements OnInit {
  funds: FirebaseListObservable<any[]>;
  patrons: FirebaseListObservable<any[]>;

  constructor(private router: Router, private crowdfundService: CrowdfundService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.funds = this.crowdfundService.getFunds();
    this.patrons = this.crowdfundService.getPatrons();
  }

  displayFundDetails(currentFund){
    this.router.navigate(['funds', currentFund.$key])
  }

}
