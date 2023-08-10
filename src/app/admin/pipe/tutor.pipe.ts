import { Pipe, PipeTransform, Query } from '@angular/core';
import { tutorList } from '../store/selector';

@Pipe({
  name: 'tutor'
})
export class TutorPipe implements PipeTransform {

  transform(
    value: any[],
    arg: string,
    query: string): any[] {
      const regEx = new RegExp(query,'i');
      if(query==''){
        return value
      }else if(arg=='tutor'){    
        return value.filter((tutor)=>{
          return tutor.name.match(regEx) || tutor.email.match(regEx) 
        })
      }
    return [];
  }

}
