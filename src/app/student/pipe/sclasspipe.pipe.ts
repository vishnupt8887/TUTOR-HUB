import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sclass'
})
export class SclasspipePipe implements PipeTransform {

  transform(
    value: any[],
    arg: string,
    query: string): any[] {
    const regEx = new RegExp(query,'i');
    if(query == ''){
      return value
    }else if(arg == 'sclass'){
      console.log(value,arg,query);
      
      return value.filter((subject)=>{
        return subject.subject.match(regEx)
      })
    }
    return []
  }

}
