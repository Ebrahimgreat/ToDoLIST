
<style scoped>

.container{
    display:flex;
    flex-direction: column;
}


</style>

<script setup>
import { ref } from 'vue';
import { useItemsStore } from '@/stores/itemsStore';
const itemsStore=useItemsStore();
const activities=(itemsStore.activities);
const storeItem=itemsStore.addItem;
const removeItem=itemsStore.removeItem;
const statusChange=itemsStore.statusChange;


function storeNewItem(){
    storeItem(newItem.value)
    newItem.value=''
  
}
import app from '@/App.vue';
let newItem=ref('')
</script>
<template>


<div class="containter">



<h1>
 

 Hello There. I hope you are having a good day
</h1>


<p>
    {{ activities.length==0? 'No activities': 'Your Activities' }}
</p>



<input v-model="newItem">


<button @click="storeNewItem()">
Add Item
</button>




<ul>
    <li v-for="(item,key) in activities">
 


<strong style="margin-right:15px;">

{{item.activity }}

</strong>





    


  


<button  @click="statusChange(key)">
    {{ item.completed==false? 'Not Completed': 'Completed'}}
</button>
    <button @click="removeItem(key)">
        Remove Activity
    </button>

    </li>

</ul>



</div>






</template>