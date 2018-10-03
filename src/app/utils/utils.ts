export class Utils {

  static getMonthList() {
    return ['', 'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  static getTitleList() {
    return ['', 'Mr', 'Mrs', 'Ms', 'Miss'];
  }

  static getDayList() {
    const dayList = [];
    dayList.push('');
    for (let ind = 1; ind <= 31; ind++) {
      dayList.push(ind.toString());
    }
    return dayList;
  }

  static getYearList() {
    const yearList = [];
    yearList.push('');
    const minimumYear = 18;
    const thisYear = new Date().getFullYear();
    let startYear = thisYear - minimumYear;
    const earliestYear = thisYear - 109;
    for (startYear; startYear >= earliestYear; startYear--) {
      yearList.push(startYear.toString());
    }
    return yearList;
  }


  static doSomethingElse(val: string) { return val; }
}
