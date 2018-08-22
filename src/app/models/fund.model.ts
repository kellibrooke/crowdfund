export class Fund {
  public currentAmount: string = "0";
  
  constructor(
    public title: string,
    public goalAmount: string,
    public description: string,
    public contact: string,
    public levels: string[],
    public category: string
  ) {  }
}
