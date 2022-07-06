import { useState,useEffect,createContext,useContext } from "react";
const BasketContext =createContext();

const BasketProvider =({children})=>{
    const [items,setItems]=useState([]);
    const addToBasket=(data)=>{
        setItems((prev)=>[...prev,data])
    }
    const values= {
        items,setItems,
        addToBasket,
}
return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
};
const useBasket = ()=> useContext(BasketContext);

export { BasketProvider,useBasket};