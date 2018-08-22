import { Donation } from './donation.model';

export class User {
  constructor(
    public name: string,
    public donations: Donation[],
    public role: string
  ) {}
}
