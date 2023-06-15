import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter',{
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    newsAdd(item) {
      item.image = "http://185.196.213.159:4002/api/v1/admin-app/" + item.image
      if(this.todoList.length > 0 ){
         this.todoList = [];
         this.todoList.push(item)
      }else{
        this.todoList.push(item)
      }
    },
  },
})
