import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AddProduct.scss'
const Product = () => {


    let [currency, setcurrency] = useState("")

    currency = [
     { label: "Rupees", value: "rs" },
     { label: "Dollar", value: "$" },
     { label: "Euro", value: "E" }
   ]
   
   
   
   
   
   let [warehouseLocation, setwarehouseLocation] = useState("")
   
   warehouseLocation = [
     { label: "warehouse1", value: "warehouse1" },
     { label: "warehouse2", value: "warehouse2" },
     { label: "warehouse3", value: "warehouse3" }
   ] 
   
   
   
   
   
   
   const [productData, setproductData] = useState({ name: '', image:'', countInStock : '',lessthan:'',high:'',salePermission:false, purchasePermission:false, category: '',MRP:'', purchaseCurrency:'rs',costPrice:'',sellingPrice: '',sellingCurrency:'',suppliers:'',CGST:'',SGST:'',VAT:'',discount:''});
   const [count, setCount] = useState(1)
   const [hidden, setHidden] = useState(false);
      
   const [category, setCategory] = useState([
    { label: "category1", value: "category11" },
    { label: "category2", value: "category2" },
    { label: "category3", value: "category3" }
   ])
   const [suppliers, setSuppliers] = useState([
    { label: "suppliers1", value: "suppliers1" },
    { label: "suppliers2", value: "suppliers2" },
    { label: "suppliers3", value: "suppliers3" }
   ])
   const [loadingForm, setloadingForm] = useState(true);
   const [wert ,setWert] = useState([])

//    category = [
//     { label: "category1", value: "category11" },
//     { label: "category2", value: "category2" },
//     { label: "category3", value: "category3" }
//   ]

//   suppliers = [
//     { label: "suppliers1", value: "suppliers1" },
//     { label: "suppliers2", value: "suppliers2" },
//     { label: "suppliers3", value: "suppliers3" }
//   ]
   
   const getCategory = async()=>{ 
   await axios.get('/api/category').then((res) => {
     console.log("category....1",res.data.Category)
     setCategory(res.data.Category)
     console.log("category",category)
   })
   }
   
   const getSuppliers = async()=>{ 
      await axios.get('/api/vendor').then((res) => {
       console.log("suppliers....1",res.data)
       setSuppliers(res.data)
       console.log("suppliers",suppliers)
     })
     }
   
   useEffect(() => {
    getCategory();
    getSuppliers();
    setloadingForm(false)
   }, [])
   
   
   
   
   useEffect(()=>{
     var numVal1 = Number(productData.sellingPrice)
     var numVal2 = Number(productData.discount) / 100;
     productData.MRP = numVal1 - (numVal1 * numVal2)
   
   //setproductData(productData.MRP=totalValue)
   },[productData.discount,productData.sellingPrice])
   
   
   
   
       const updateForm = (e) => {
         setproductData({
           ...productData,
           [e.target.name]: e.target.value,
         })
       }
   
      
       
       const [{alt, src}, setImg] = useState({
           src: 'ImagePreview',
           alt: 'Upload an Image'
       });
   
       const handleImg = (e) => {
           if(e.target.files[0]) {
   
                productData.image = e.target.files[0]
               setImg({
                   src: URL.createObjectURL(e.target.files[0]),
                   alt: e.target.files[0].name
               });    
           }   
       }
   
       
   
       const handleOnChangePurchase = ()=> {
       //   setproductData(({ purchasePermission, ...prevState }) =>
       //   ({ ...prevState, purchasePermission: !purchasePermission })
       // );
         setproductData(({ purchasePermission, ...prevState }) =>
           ({ ...prevState, purchasePermission: !purchasePermission })
         );
       };
   
       const handleOnChangeSale = ()=> {
       
         setproductData(({ salePermission, ...prevState }) =>
           ({ ...prevState, salePermission: !salePermission })
         );
       };
   
      
   
       useEffect(() => {
         
         console.log("++++===========++++++++++++++++++++++++++========================")
         console.log("productData.purchasePermission",productData.purchasePermission)
       }, [productData.purchasePermission])
   
   
      const submitForm = async (event) => {
         event.preventDefault();
       
   
         console.log("Name",productData.name);
         console.log("MRP",productData.MRP);
         console.log("countInStock ",productData.countInStock );
         console.log("Currency",productData.currency);
         console.log("Ctagory",productData.category);
         console.log("lessthan",productData.lessthan);
         console.log("GreaterThan",productData.greaterThan);
         console.log("salePermission",productData.salePermission)
         console.log("PurchasePermission",productData.purchasePermission)
         console.log("sUPPLIERS",productData.suppliers)
         console.log("purchaseCurrerncy",productData.purchaseCurrency)
         console.log("costprice",productData.costPrice)
         console.log("sellingPrice",productData.sellingCurrency)
         console.log("sgst",productData.SGST)
         console.log("cgst",productData.CGST)
         console.log("vat",productData.VAT) 
         console.log("productdataImage", productData.image)     
         
   
        
           try {
           
             const { data } = await axios.post('/api/products',productData, {
               headers: {
                 'Content-Type': 'multipart/form-data',
                 
               },
             });
     
           } catch (error) {
             const message =
               error.response && error.response.data.message
                 ? error.response.data.message
                 : error.message;
           }
         
        
       }


  return (
    <div>

{loadingForm ? "Loading.... " : (
     <div className='formWidth'>
 
        
        <div>
        <form className="form" onSubmit={submitForm} autcomplete="off" encType="multipart/form-data"> 
        
          
          {count === 1 ? (
          <div>
         
            <div>
              <label htmlFor="name">Product Name</label> <br/>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter name"
                value={productData.name}
                onChange={updateForm}
              ></input>
            </div><br/>

            <div  className='contentSpace'> 
            <div>
              <label htmlFor="MRP">MRP</label><br/>
              <input
                required
                name="MRP"
                type="number"
                placeholder="Enter MRP"
                value={productData.MRP}
                readOnly
               
              ></input>
            </div>

            <div>
              <label htmlFor="countInStock">CountInStock</label><br/>
              <input
                required
                min={0}
                name="countInStock"
                type="number"
                placeholder="Enter Unit"
                value={productData.countInStock}
                onChange={updateForm}
              ></input>
            </div>


           

            
           

           
        </div><br/>

            <div>
              <label htmlFor="category">Category</label><br/>
              <select onChange={(e) => setproductData({ ...productData, category: e.target.value })}> 
              <option name="category" value={productData.category} selected disabled>-- Select Category   </option>
              {category.map((fruit) => <option value={fruit.categoryName}>{fruit.categoryName}</option>)}
            </select>
            </div><br/>


            <div className='contentSpace'>
              <p  className='low'>Low</p>
              <label htmlFor="lessthan">Less Than</label>
              <input
                name="lessthan"
                type="number"
                placeholder=""
                value={productData.lessthan}
                onChange={updateForm}
              ></input>
            </div><br/>
            
            <div className='contentSpace'>
              <p  className='normal'>Normal</p>
             &nbsp;&nbsp;
              <input
                readOnly
                name="normal"
                type="number"
                placeholder=""
                value={ Number(productData.lessthan)+1}
               
              ></input> to  
              <input
              readOnly
              name="normal"
              type="number"
              placeholder=""
              value={ Number(productData.high)-1}
              
            ></input>
            
            </div><br/>

            <div className='contentSpace'>
              <p className='high'> High</p>
              <label htmlFor="high">More Than</label>
              <input
                name="high"
                type="number"
                placeholder={productData.high}
                value={productData.high}
                onChange={updateForm}
              ></input>
            </div>
            <br/>
           
            
            <br/>
            <div>
            <input
            name='salePermission'
              type="checkbox"
              className='checkbox-round'
              value={productData.salePermission}
              checked={productData.salePermission}
               onClick={handleOnChangeSale}
            />&nbsp;&nbsp;
              <label htmlFor="salePermission">For Sale Only </label>
             
            </div><br/>


            <div>
            <input
            name='purchasePermission'
              type="checkbox"
              className='checkbox-round'
              value={productData.purchasePermission}
              checked={productData.purchasePermission}
              onClick={handleOnChangePurchase}
            />&nbsp;&nbsp;
              <label htmlFor="purchasePermission">For Sale Only </label>
            </div>
           
            </div>
) : null}

          {/* STEP 2 */}
          {count === 2 ? (
          
          <div>
          <h2>Purchasing Details</h2>
          <div className='contentSpace'>
          <div>
              <label htmlFor="suppliers">Suppliers</label><br/>
              <select onChange={(e) => setproductData({ ...productData, suppliers: e.target.value })}> 
              <option name="suppliers" value={productData.suppliers} disabled selected >-- Select Supplier --  </option>
              {suppliers.map((sup) => <option value={sup.Name}>{sup.Name}</option>)}
            </select>
            </div><br/>

            <div >
              <label htmlFor="purchaseCurrency">Currency</label><br/>

              <select   onChange={(e) => setproductData({ ...productData, purchaseCurrency: e.target.value })}> 
              <option name="purchaseCurrency" value={productData.purchaseCurrency} selected disabled>-- Select Currency --  </option>
                    
              {currency.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)}
            </select>
            </div><br/>

            

            <div>
              <label htmlFor="costPrice">Cost Price</label><br/>
              <input
                name="costPrice"
                type="number"
                placeholder="costPrice"
                value={productData.costPrice}
                onChange={updateForm}
              ></input>
            </div>
            </div><br/>

            <h2>Selling Details</h2>
            <div className='contentSpace'>
              
            <div >
              <label htmlFor="sellingCurrency">Currency</label><br/>
              <select   onChange={(e) => setproductData({ ...productData, sellingCurrency: e.target.value })}> 
              <option name="sellingCurrency" value={productData.sellingCurrency}> -- Select Currency --  </option>
              {currency.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)}
            </select>
            </div><br/>


            <div>
              <label htmlFor="sellingPrice">Selling Price</label><br/>
              <input
                name="sellingPrice"
                type="number"
                placeholder="sellingPrice"
                value={productData.sellingPrice}
                onChange={updateForm}
              ></input>
            </div>

            <div>
              <label htmlFor="discount">Discount</label><br/>
              <div>
              <input
               
                name="discount"
                type="number"
                placeholder="Enter  discount"
                value={productData.discount}
                onChange={updateForm}
              ></input>
              <span>%</span>
              </div>
            </div><br/>

            </div>
            <br/>
            <div className='contentSpace'>
              <div>
              <label htmlFor="VAT">VAT</label><br/>
              <div>
              <input
                name="VAT"
                type="number"
                placeholder="Enter VAT"
                value={productData.VAT}
                onChange={updateForm}
              ></input>
             <span> %</span>
             </div>
              </div>
            
              <div>
              <label htmlFor="CGST">CGST</label><br/>
              <div> <input
              
                name="CGST"
                type="number"
                placeholder="Enter CGST"
                value={productData.CGST}
                onChange={updateForm}
              ></input> %</div>
               </div>
           

            
            


              <div>
              <label htmlFor="SGST">SGST</label><br/>
              <div><input
                name="SGST"
                type="number"
                placeholder="Enter  SGST"
                value={productData.SGST}
                onChange={updateForm}
              ></input>
              <span>%</span>
              </div>
              </div><br/>
            </div><br/>
            </div>

          ): null}

           
           {!hidden && 
           <button className="btnRight" type="submit"
              onClick={() => setCount(count + 1) (setHidden(true))}
            >
                Next
              </button>
            }
            
           
            <div className='contentSpace'>
           

          {(count === 2) && 
            <button className="btnLeft" type="submit" 
            onClick={() => setCount(count - 1)  (setHidden(false))}
            >
                Previous
              </button>
            }

          {(count === 2) && 
                      <button className="btnRight" type="submit" >
                          Submit
                        </button>
                      }
            </div>
          
        {/* )} */}
      </form>
     </div>
     <div >
      <div className='info'>

         <img src={src} alt={alt} className="previewImg"/>
         <div>    
          {count === 2 ? (
          <>
          <p>{productData.name}</p>
          <p>{productData.category}</p>
          <p>MRP : {productData.MRP}</p>
          </>
         ) :""}
         </div>

         </div>
         <div>
           
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
            />
            </div> <br/>
        
         </div>
     </div>

    
)}


    </div>
  )
}

export default Product