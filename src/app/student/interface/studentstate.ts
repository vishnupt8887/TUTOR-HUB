export interface studentState{
    isLogged:Boolean;
    isLoading:Boolean,
    error:String|null; 
    user:{
        _id:string,
        name:string,
        email:string,
        password:string,
        phone:number
    }|null;
    
}