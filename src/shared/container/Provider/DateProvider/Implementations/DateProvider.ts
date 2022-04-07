import dayjs from "dayjs";
import compare from 'dayjs';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

class DateProvider implements IDateProvider{
    addHours(hours: number): Date {
        return dayjs().add(hours, "hours").toDate();
    }
   
    compareDateInDays(expect_return_date: Date, atualDate: Date): number {
        return compare(this.convertDateToUtc(expect_return_date))
               .diff(this.convertDateToUtc(atualDate), "days");
    }
    
    compareDateInHours(expect_return_date: Date, atualDate: Date): number {
        return compare(this.convertDateToUtc(expect_return_date))
               .diff(this.convertDateToUtc(atualDate), "hours");
    }
    
    convertDateToUtc(date: Date): string {
        return dayjs(date)
               .utc()
               .format()
    }

    dateNow(): Date{
        return dayjs().toDate(); 
    }

    addDays(days: number): Date{
        return dayjs().add(days, "days").toDate();
    }
  
    
} export { DateProvider }