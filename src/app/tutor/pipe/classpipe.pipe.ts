import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'class'
})
export class ClasspipePipe implements PipeTransform {

  transform(
    value: any[],
    arg: string,
    query: string): any[] {
    const regEx = new RegExp(query,'i');
    if(query == ''){
      return value
    }else if(arg == 'class'){
      console.log(value,arg,query);
      
      return value.filter((subject)=>{
        return subject.subject.match(regEx)
      })
    }
    return []
  }

}
