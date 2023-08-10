export interface tutorState{
    isLogged:Boolean
    isLoading:Boolean
    error:String|null
    tutor:{
        _id:String,
        name:String,
        email:String,
        password:String,
        phone:Number,
        access:Boolean,
        verified:Boolean
    }|null
}