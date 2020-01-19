
export function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text
    }
  }
  export function removeTodo(id) {
    return {
      type: 'REMOVE_TODO',
      id
    }
  }

 function resivepost(value) {
    //  console.log(value,"VALUEPOST");
     return {
         type:'ADD',
         number:value,
     }
 }

 export function fetchstart(url,dispatch){
    //  console.log(dispatch,'fetstart in side');
     return fetch(url,{
         method:'GET',
     })
     .then((response) => response.json())
     .then((response) =>{    
         return dispatch(resivepost(response));
         
    })
     .catch(function(error){console.log('Fail', error);});
 }
