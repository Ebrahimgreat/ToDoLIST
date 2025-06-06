
import { sqliteTable,int,text } from "drizzle-orm/sqlite-core";

export const list=sqliteTable('listTable',{
    id:int().primaryKey({autoIncrement:true}),
    activity:text(),
    completion:int({mode:'boolean'})
 

})