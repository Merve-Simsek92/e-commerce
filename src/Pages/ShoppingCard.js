import React from 'react'
import { useLocation } from 'react-router-dom'

const ShoppingCard = () => {
  const location = useLocation();
  const shoppingCard = location.state.item;
  console.log(shoppingCard)
  return (
    <div className="divImg">
    <img
      className="img"
      src={shoppingCard.resim}
    />
    <div className="paragraf">
      {" "}
      <p>{shoppingCard.detay}</p>
      <h3>{shoppingCard.fiyat} TL</h3>
      <button type="button" className="btn btn-primary m-3">
  Satın Al
      </button>
      <button type="button" className="btn btn-primary m-3">
iptal Et
      </button>
    </div>
  </div>
  )
}

export default ShoppingCard