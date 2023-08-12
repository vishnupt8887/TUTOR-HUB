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
      
       ;
      
      return value.filter((subject)=>{
        return subject.subject.match(regEx)
      })
    }else if(arg=='questions'){
      return value.filter((question)=>{
       return question.description.match(regEx)
      })
    }else if(arg=='assignments'){
      return value.filter((assignment)=>{
        return assignment.description.match(regEx)
      })
    }else if(arg=='videos'){
      return value.filter((video)=>{
        return video.description.match(regEx)
      })
    }
    return []
  }

}
