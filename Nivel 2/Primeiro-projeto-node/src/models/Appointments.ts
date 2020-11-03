/**
 * Nesse arquivo fica o formato dos dados
 */
import { v4 } from "uuid";

class Appointmant{
  id:string;

  provider:string;

  date:Date;

  constructor(provider:string,date:Date){
    this.id = v4()
    this.provider = provider
    this.date = date
  }
}

export default Appointmant
