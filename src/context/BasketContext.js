import { useState,useEffect,createContext,useContext } from "react";
const BasketContext =createContext();

const BasketProvider =({children})=>{

const defaultBasket=JSON.parse(localStorage.getItem("basket")) || [] ;
const [items,setItems]=useState(defaultBasket);

useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(items));
},[items])


const removedBasket =(id)=>{
const filtered=items.filter((item)=>item.id !== id)
setItems(filtered)
}
  
  
    const addToBasket=(data, findItem)=>{   
      
  
     console.log(data)
     if(!findItem) {
        return setItems((prev)=>[data,...prev])
     }  
 
 const filtered=items.filter((item)=> item.id !== findItem.id )
 setItems(filtered)




   console.log(data)
      
    }
    const values= {
        items,setItems,
        addToBasket,
        removedBasket
     
    
    
   
  
}
return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
};
const useBasket = ()=> useContext(BasketContext);

export { BasketProvider,useBasket};