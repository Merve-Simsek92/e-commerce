import React from 'react'
import { useBasket } from "../context/BasketContext";



const Cart = ({item}) => {

const {addToBasket , items }=useBasket();
const findItem=items.find((element)=>element.id === item.id)



  return (
    <div>

<div className="divImg" key={item.id}>
              <img
                className="img"
                src={item?.resim}
                alt="myimage"
            />
            <div className="paragraf">
              {" "}
              <p>{item.detay}</p>
              <h3>{item.fiyat} TL</h3>
           
               <button onClick={()=>addToBasket(item,findItem)}  type="button" className={findItem ? "btn btn-danger ml-5" : "btn btn-primary ml-5" }> 
      
                 {
                   findItem ? "Sepetten Kaldır" :    "    Sepete Ekle "
                } 
              </button>
            </div>
          </div>

    </div>
  )
}

export default Cart