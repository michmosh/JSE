import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strPipe'
})
export class StrPipePipe implements PipeTransform {

  transform(str: string, str_length?: number): string {
    if(str.length > str_length) str =  `${str.substring(0,str_length)} ...`;
    return str;
  }

}
