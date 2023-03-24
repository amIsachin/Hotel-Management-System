import { AuditableBaseEntity } from "./Auditable.Entity";
import { HotelEntity } from "./Hotel.Entity";

export interface UserEntity extends AuditableBaseEntity  {
    userId:number,
    name:string,
    gender:string,
    age:number,
    phoneNumber:string,
    city:string,
    fromDate: Date,
    hotelEntity:HotelEntity
}