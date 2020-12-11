class AppError{
  public message:string

  public statusCode:number

  constructor(message:string,status:number){
    this.message = message
    this.statusCode = status
  }
}

export default AppError
