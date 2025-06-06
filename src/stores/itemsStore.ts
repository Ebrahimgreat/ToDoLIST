import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { reactive, ref } from "vue";
type Activity={
   
    activity:string,
    completed:boolean
}
export const useItemsStore=defineStore('items',{
    state:()=>({
       activities:reactive(useLocalStorage('activities',[]))
    }),
      
   actions:{
    addItem(value:string){
    this.activities.push({
      activity:value,
      completed:false
    })
    
    
    },
    removeItem(id:number){
        this.activities.splice(id,1);
   
    
       },
       statusChange(id:number){
        
        const findStatus=this.activities[id].completed;
        if(findStatus==false)
        {
        this.activities[id].completed=true;
     
       }
       else{
        this.activities[id].completed=false
       }
   },
}
  
   
})
  
   