import React,{useState} from "react";
import "./Home.css";
import Data from "../helpers/Data";

// import  {useNavigate} from "react-router-dom"
// import { SendExclamation } from "react-bootstrap-icons";

const Home = () => {
  // const navigate=useNavigate()
  const [shopCardArray,setShopCardArray]=useState(null);
  const [search, setSearch] = useState("");
  const [data, setData]=useState(Data);
  const [inputVal, setInputVal]=useState(new Array(20).fill(0));
  const [isChecked, setIsChecked] = useState(new Array(20).fill(false))
  
  const addShoppingCard =()=>{
    setShopCardArray()
  } 
  
  const handleInpChange = (idx, itm)=>{
    const updatedCheckedState = isChecked.map((item, index) =>
      index === idx ? !item : item
    );
    setIsChecked(updatedCheckedState);   
    
    const updatedInputVal = inputVal.map((item, index) =>
      index === idx ? item = itm : item
    );
    setInputVal(updatedInputVal); 
  }
  
  const handleAra = () => { 
    const araArr = [];
    isChecked.map((item, idx) => { 
       if(item === true) {
         araArr.push(inputVal[idx]);         
       }   
       return araArr;           
    });   
    console.log(araArr);
    let newData = [];
    if(araArr.length > 0){      
      araArr.map( (element) => { 
        return (
          newData = [...newData, ...Data.filter( (item) => {
           return (
                item.markaAdı.toLowerCase().includes(element.toLowerCase()) ||
                item.ürün.toLowerCase().includes(element.toLowerCase())
            )})]
          )
           })
      };
      console.log(newData);
      setData(newData);  
      // console.log(data);  
   }
  
  

  const getSearch=()=>{    
   if(search.length !== 0){
      const newData = Data.filter( (item) => {
        return (
            item.markaAdı.toLowerCase().includes(search.toLowerCase()) ||
            item.ürün.toLowerCase().includes(search.toLowerCase())
          )
      });
      setData(newData); 
      // console.log(search);    
      // console.log(data);
    }
  }

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div>      
      <div className="search">
        <input
          onChange={handleChange}
          className="input"
          placeholder="Ürün, marka veya kategori arayın ..."
        />
        <button className="" onClick={getSearch}>SEARCH</button>
      </div>
      
      <div className="d-flex checkbox">
        <div className="">
          <h5>Beyaz Eşya</h5>
          <form>
            <div>
              <input
                type="checkbox"
                id = "0" 
                name="çamaşır"
                value="Çamaşır Makinası"
                onChange={() => handleInpChange(0,"Çamaşır Makinası")}              
              />
              <label htmlFor="çamaşır makinası">Çamaşır Makinası</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="1"
                name="bulaşık"
                value="Bulaşık Makinası"
                onChange={() => handleInpChange(1,"Bulaşık Makinası")}
              />
              <label htmlFor="bulaşık makinası">Bulaşık Makinası</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" id="2" name="fırın" value="Fırın" 
                     onChange={() => handleInpChange(2,"Fırın")}
              />
              <label htmlFor="fırın">Fırın</label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                id="3"
                name="mikrodalga"
                value="Mikrodalga"
                onChange={() => handleInpChange(3,"Mikrodalga")}
              />
              <label htmlFor="mikrodalga">Mikrodalga</label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                id="4"
                name="davlumbaz"
                value="Davlumbaz"
                onChange={() => handleInpChange(4,"Davlumbaz")}
              />
              <label htmlFor="davlumbaz">Davlumbaz</label>
            </div>
          </form>
          <h5>Elektrikli Ev ALetleri</h5>
          <form>
            <div>
              <h6>Ütü</h6>
              <div>
                <input
                  type="checkbox"
                  id="5"
                  name="buharkazanlı"
                  value="buhar kazanlı"
                  onChange={() => handleInpChange(5,"buhar kazanlı")}
                />
                <label htmlFor="buharkazanlı">Buhar Kazanlı</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" id="6" name="kireç" value="kireç"  
                       onChange={() => handleInpChange(6,"kireç")}
                />
                <label htmlFor="kireç">Kireç Önleme</label>
              </div>
              <h6>Süpürge</h6>
              <div>
                <input
                  type="checkbox"
                  id="7"
                  name="torbalı"
                  value="torbalı"
                  onChange={() => handleInpChange(7,"torbalı")}
                />
                <label htmlFor="torbalı">Torbalı</label>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  id="8"
                  name="torbasız"
                  value="torbasız"
                  onChange={() => handleInpChange(8,"torbasız")}
                />
                <label htmlFor="torbasiz">Torbasız</label>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  id="9"
                  name="kablosuz"
                  value="kablosuz"
                  onChange={() => handleInpChange(9,"kablosuz")}
                />
                <label htmlFor="kablosuz">Kablosuz</label>
              </div>

              <h6>İçecek Hazırlama</h6>
              <div>
                <input type="checkbox" id="10" name="çay" value="çay makinası" 
                       onChange={() => handleInpChange(10,"çay makinası")} 
                />
                <label htmlFor="çay">Çay Makinası</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" id="11" name="kahve" value="kahve makinası" 
                       onChange={() => handleInpChange(11,"kahve makinası")} 
                />
                <label htmlFor="kahve">Kahve Makinası</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" id="12" name="meyve" value="meyve sıkıcı" 
                       onChange={() => handleInpChange(12,"meyve sıkıcı")}
                />
                <label htmlFor="meyve">Meyve Sıkıcı</label>
              </div>

              <h6>Pişirme</h6>
              <div>
                <input type="checkbox" id="13" name="tost" value="tost makinası" 
                       onChange={() => handleInpChange(13,"tost makinası")}
                />
                <label htmlFor="tost">Tost Makinası</label>
              </div>
              <div>
                {" "}
                <input
                  type="checkbox"
                  id="14"
                  name="fritöz"
                  value="fritöz"
                  onChange={() => handleInpChange(14,"fritöz")}
                />
                <label htmlFor="fritöz">Fritöz</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" id="15" name="ekmek" value="ekmek" 
                       onChange={() => handleInpChange(15,"ekmek")}
                />
                <label htmlFor="ekmek">Ekmek Kızartıcı</label>
              </div>
            </div>
          </form>
          <h5>Marka</h5>
          <form>
            <div>
              <input
                type="checkbox"
                id="16"
                name="philips"
                value="philips"
                onChange={() => handleInpChange(16,"philips")}
              />
              <label htmlFor="philips">Philips</label>
            </div>
            <div>
              <input type="checkbox" id="17" name="beko" value="beko" 
                     onChange={() => handleInpChange(17,"beko")}
              />
              <label htmlFor="beko">Beko</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" id="18" name="vestel" value="vestel"  
                     onChange={() => handleInpChange(18,"vestel")}
              />
              <label htmlFor="vestel">Vestel</label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                id="19"
                name="siemens"
                value="siemens"
                onChange={() => handleInpChange(19,"siemens")}
              />
             <label htmlFor="siemens">Siemens</label>
            </div>
          </form>
          <h5>Fiyat</h5>
          <div className="d-flex">
            <div>
              <input type="number" min="0" max="100" step="5" />
              <p>min</p>
            </div>
            <p> - </p>
            <div>
              <input type="number" name="font-size" min="1" max="32" />
              <p>max</p>
            </div>
          </div>
          <button className="mybtn" onClick={handleAra}>Şimdi Ara</button>
        </div>

        <div className="d-flex flex-wrap">
          {data.map((item)=>{
            return (
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
              <button onClick={addShoppingCard} type="button" className="btn btn-primary ml-5">
                Sepete Ekle
              </button>
            </div>
          </div>)

          })}
        
        </div>
      </div>
    </div>
  );
};

export default Home;
