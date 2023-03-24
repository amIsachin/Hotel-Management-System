import { AuditableBaseEntity } from "./Auditable.Entity";

export interface HotelEntity extends AuditableBaseEntity {
    hotelId:number,
    name:string,
    rentParDay:number,
    maximumCapacity:number
}