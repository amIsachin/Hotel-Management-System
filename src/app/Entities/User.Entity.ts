import { HotelEntity } from "./Hotel.Entity";

export interface UserEntity  {
    userId:number,
    name:string,
    gender:string,
    age:number,
    phoneNumber:string,
    city:string,
    fromDate: Date,
    hotelEntity:HotelEntity
}