import { Component, OnInit } from '@angular/core';
import { Fund } from '../models/fund.model';
import { CrowdfundService } from '../crowdfund.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-fund',
  templateUrl: './create-fund.component.html',
  styleUrls: ['./create-fund.component.css'],
  providers: [ CrowdfundService ]
})
export class CreateFundComponent implements OnInit {
  levels = [];

  constructor(private router: Router, private crowdfundService: CrowdfundService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  createNewFund(title: string, goalAmount: string, description: string, contact: string, category: string) {
    let newFund = new Fund(title, goalAmount, description, contact, this.levels, category);
    this.crowdfundService.addNewFund(newFund);
    this.levels = [];
    this.router.navigate(['']);
  }

  addLevel(level:string){
  this.levels.push(level);
  console.log(this.levels);
  }

}
