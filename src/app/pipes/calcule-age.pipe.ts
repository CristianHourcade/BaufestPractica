import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculeAge'
})
export class CalculeAgePipe implements PipeTransform {

  transform(value: any) {
    value = new Date(value);
    const today = new Date();
    const birthDayMonth = value.getMonth();
    const birthDayDay = value.getDate();
    const presentDay = today.getDate();
    const presentMonth = today.getMonth();
    let age = today.getFullYear() - value.getFullYear();
    if (presentMonth < birthDayMonth ||
        (presentMonth === birthDayMonth && presentDay < birthDayDay)) {
        age--
    }
    return age;
  }

}
