/**
 * Created by zdy on 2018/10/30.
 */
export const increment=(data)=>({type:'INCREMENT',data})

export const decrement=(data)=>({type:'DECREMENT',data})

export const incrementAcyn=(data)=>{
       return dispatch=>{
         setTimeout(function () {
           
           dispatch(increment(data))
         
         },1000,)
       }
}