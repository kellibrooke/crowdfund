import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CrowdfundService } from '../crowdfund.service';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.css'],
  providers: [CrowdfundService]
})
export class FundDetailsComponent implements OnInit {
  fundId: string = null;
  fund;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private crowdfundService: CrowdfundService) { }

  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
    this.fundId = urlParameters['id'];
  });
  this.fund = this.crowdfundService.getFundById(this.fundId)
  }

}
