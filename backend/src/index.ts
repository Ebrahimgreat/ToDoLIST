import { serve } from 'bun'
import { Hono } from 'hono'
import 'dotenv/config';
import{drizzle} from 'drizzle-orm/bun-sqlite';
import { db} from './db';
import { eq } from 'drizzle-orm';
import { list } from './db/schema';

const app = new Hono()

/*This is the backend file where the routes are.All the user stories are covered
A user can see all the records,
A user can update the status of the record
A user can delete the record

/** */


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/items',async(c)=>{
 const items=await db.query.list.findMany();
 return c.json(items)
})


app.post('/items/update',async(c)=>{
  const body=await c.req.json();
  const type=typeof(body.status);
if(type!='number'){
  return c.json({Error:'A number is required'})

}

  if(body.status==1)
  {
 
    const updateStatus=await db.update(list).set({completion:true}).where(eq(list.id,body.id));
  }
  else if(body.status==0)
  {
    const updateStatus=await db.update(list).set({completion:false}).where(eq(list.id,body.id));
  }
 else{
  return c.json({Error:'Unable To Insert'})
 }
  
  return c.json("Status updated");
})

app.post('/items/remove',async(c)=>{

  type activity={
    id:number
    
  }
  const body:activity=await c.req.json();
  const type=typeof(body.id);
  if(type!='number')
  {
    return c.json({Message:'Invalid Type'});
  }
  const itemToRemove=await db.delete(list).where(eq(list.id,body.id));


  return c.json("ITem has been deleted");
})

app.post('/items/store',async(c)=>{

  
  const body=await c.req.json();


  const newItem =await db.insert(list).values({
    activity:body.activity,
    completion:false
    
  });
  return c.json("record Stored");
})




export default{
  port:3001,
  fetch:app.fetch,

  
}
