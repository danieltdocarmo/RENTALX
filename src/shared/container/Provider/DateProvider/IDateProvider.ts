interface IDateProvider{

    compareDateInHours(expect_return_date: Date, atualDate: Date): number;
    
    compareDateInDays(expect_return_date: Date, atualDate: Date): number;

    convertDateToUtc(date: Date): string;
    
    dateNow(): Date;

    addDays(days: number): Date
}