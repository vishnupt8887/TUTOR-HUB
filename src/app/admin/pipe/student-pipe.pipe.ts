import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student'
})
export class StudentPipePipe implements PipeTransform {

  transform(
    value: any[],
    arg: string,
    query: string): any[] {
      const regEx = new RegExp(query,'i');
      if(query==''){
        return value
      }else if(arg=='student'){    
        return value.filter((student)=>{
          return student.name.match(regEx) || student.email.match(regEx) 
        })
      }
    return [];
  }

}
