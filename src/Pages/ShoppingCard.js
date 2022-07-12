import React from 'react'

import { useBasket } from '../context/BasketContext'



const ShoppingCard = () => {
  const {items ,removedBasket} = useBasket();
  const total=items.reduce((acc,obj)=>acc + parseFloat(obj.fiyat),0)
  return (
    <div>
      {items.length < 1 && ( <div className="alert alert-primary" role="alert">
 SEPETİNİZ BOŞ!!!!
</div>)}
     {
      items.length > 0 && 
      <>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
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
           
               <button  type="button" className="btn btn-danger ml-5"  onClick={()=>removedBasket(item.id)}> 
      
                 
                    Sepetten Kaldır
                
              </button>
            </div>
          </div>
          </li>
        ))}
      </ul>
      </>
     }
     {items.length > 1 && <h1 style={{color:"red", textAlign:"center" }}>Total: <span>{total.toString().padStart(2, "0")},00 TL</span> </h1>}
 
    </div>
  )
}

export default ShoppingCard