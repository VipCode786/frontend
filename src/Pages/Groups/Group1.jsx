import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./group.css"
import { useNavigate } from "react-router-dom";

function Group1() {
  
  const navigate = useNavigate();
  const [ItemDetails,setItemDetails] = useState(
    {
      ItemViews:false,
      ItemEdit:false,
      AddItem:false,
      EditItem:false,
      DeleteItem:false,
      AddCategory:false,
      EditCategory:false,
      DeleteCategory:false,
      AdjustItem:false,
      SendTransferRequest:false,
      AcceptTransferRequest:false,
      SalesView:false,
      GenerateSalesOrder:false,
      GenerateInvoice:false,
      AddCustomer:false,
      EditSales:false,
      EditCustomers:false,
      DeleteCustomer:false,
      Purchase:false,
      GeneratePurchaseOrder:false,
      AddVendorBills:false,
      AddVendors:false,
      EditPurchase:false,
      EditVendor:false,
      DeleteVendor:false,
      OtherWarehouseDetails:false,
      EditWarehouseDetails:false,
      AddWarehouse:false,
      EditWarehouse:false,
      DeleteWarehouse:false,
      Reports:false,
      Myteam:false
    }
  )
  const handleChange=(event)=>{
    
    // SetItemDetails(!ItemDetails.AddItem);
    
    console.log(ItemDetails)

    setItemDetails({...ItemDetails,AddItem:event.target.checked})
    console.log(ItemDetails)

    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:1010/group-permission",ItemDetails).then(navigate("/"));
  }

  useEffect(()=>{
    console.log("itemDetails:",ItemDetails)
  },[ItemDetails])
  return (
    <div className='main-box'>
      <div className="navbar">
        <ul>
          <li className='navbar-contents navbar-title'>Items</li>
          <div className='navbar-checkbox'>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales"  onChange={(event)=>setItemDetails({...ItemDetails,ItemViews:event.target.checked})}/>
              Can View</label>
            </li>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales"  onChange={(event)=>setItemDetails({...ItemDetails,ItemEdit:event.target.checked})}/>
              Can Edit</label>
            </li>
          </div>
       
        </ul>
      </div>
      {
        (ItemDetails.ItemEdit) &&
      <div className='items-body'>
        <label>
          <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,AddItem:event.target.checked})}/>
            Add Item
          </label>
          <label className='items-label'>
          <input type="checkbox" name="checkbox" className='checkbox'/>
            Edit Item
          </label>
          <label className='items-label'>
          <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,DeleteItem:event.target.checked})} />
            Delete Item
          </label>  
          
          <br/>
          
          <label>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,AddCategory:event.target.checked})} />
            Add Category
          </label>
          
          <label className='items-label1'>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,EditCategory:event.target.checked})} />
            Edit Category
          </label>
          
          <label className='items-label1'>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,DeleteCategory:event.target.checked})}/>
            Delete Category
          </label>  
    
          <br/>
         
          <label>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,AdjustItem:event.target.checked})}/>
            Adjust Item
          </label>
          <br/>
          
          <label>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,SendTransferRequest:event.target.checked})}/>
            Send Transfer Request
          </label>
          
          <label className='items-label2'>
            <input type="checkbox" name="checkbox" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,AcceptTransferRequest:event.target.checked})}/>
            Accept Transfer Request
          </label>  
        </div>
}
      <br/>

      <div className="navbar">
      <ul>
          <li className='navbar-contents navbar-title'>Sales</li>
          <div className='navbar-checkbox'>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales"  name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,SalesView:event.target.checked})}/>
              Can View</label>
            </li>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,EditSales:event.target.checked})}/>
              Can Edit</label>
            </li>
          </div>
        </ul>
      </div>
      {
        (ItemDetails.EditSales) &&
      <div className='item-body sales-body'>
        
        <label>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,GenerateSalesOrder:event.target.checked})}/>
          Generate sales Order
        </label>
        <label className='sales-label'>
          <input type="checkbox" name="checkbox" />
          Update
        </label>
          
        <br/>

        <label >
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,GenerateInvoice:event.target.checked})}/>
          Generate Invoice
        </label>    
        <label className='sales-label1'>
          <input type="checkbox" name="checkbox" />
          Update
        </label>

        <br/>
          
        <label>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,AddCustomer:event.target.checked})}/>
          Add Customer
        </label>
        <label className='sales-label2'>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,EditCustomers:event.target.checked})}/>
          Edit Customer
        </label>  
    
        <br/>
         
          <label>
            <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,DeleteCustomer:event.target.checked})}/>
            Delete Customer
          </label>
          
          <br/> 
        
      </div>
    }
    <br/>         
    <div className="navbar">
      <ul>
          <li className='navbar-contents navbar-title'>Purchase</li>
          <div className='navbar-purchase-checkbox'>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,Purchase:event.target.checked})}/>
              Can View</label>
            </li>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,EditPurchase:event.target.checked})}/>
              Can Edit</label>
            </li>
          </div>
        </ul>
      </div>
      {
        (ItemDetails.EditPurchase) &&
      <div className='items-body'>
        
        <label>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,GeneratePurchaseOrder:event.target.checked})}/>
          Generate Purchase Order
        </label>
        <label className='purchase-label1'>
          <input type="checkbox" name="checkbox"/>
          Update
        </label>
          
        <br/>

        <label >
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,AddVendorBills:event.target.checked})}/>
          Add Vendor Bills
        </label>    
        <label className='purchase-label2'>
          <input type="checkbox" name="checkbox" />
          Update
        </label>

        <br/>
          
        <label>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,AddVendors:event.target.checked})}/>
          Add Vendors
        </label>
        <label className='purchase-label3'>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,EditVendor:event.target.checked})}/>
          Edit Vendor
        </label>
        <label className='purchase-label1'>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,DeleteItem:event.target.checked})}/>
          Delete Vendor
        </label>  
    
        <br/>
        
      </div>
    }
    <br/> 
      <div className="navbar">
      <ul>
          <li className='navbar-contents navbar-title'>Other Warehouse Details</li>
          <div className='navbar-warehouse-checkbox'>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,OtherWarehouseDetails:event.target.checked})}/>
              Can View</label>
            </li>
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,EditWarehouseDetails:event.target.checked})}/>
              Can Edit</label>
            </li>
          </div>
        </ul>
      </div>
    {
        (ItemDetails.EditWarehouseDetails) &&
      <div className='items-body'>
        
        <label>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,AddWarehouse:event.target.checked})}/>
          Add Warehouse
        </label>
        <label className='purchase-label1'>
          <input type="checkbox" name="checkbox" onChange={(event)=>setItemDetails({...ItemDetails,EditWarehouse:event.target.checked})}/>
          Edit Warehouse
        </label>
        <label className='purchase-label1'>
          <input type="checkbox" name="checkbox"  onChange={(event)=>setItemDetails({...ItemDetails,DeleteWarehouse:event.target.checked})}/>
          Delete Warehouse
        </label>    
        <br/>
        
      </div>
    }  
    <br/>
    <div className="navbar">
      <ul>
          <li className='navbar-contents navbar-title'>Reports</li>
          <div className='navbar-checkbox'>
            
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,Reports:event.target.checked})}/>
              Can View</label>
            </li>
          </div>
        </ul>
      </div>
      <br/> 
      <div className="navbar">
      <ul>
          <li className='navbar-contents navbar-title'>My Team</li>
          <div className='navbar-checkbox'>
            
            <li className='navbar-contents'>
              <label for="scales" className='navbar-checkbox-content'>
              <input type="checkbox" id="scales" name="scales" className='checkbox' onChange={(event)=>setItemDetails({...ItemDetails,Myteam:event.target.checked})}/>
              Can View</label>
            </li>
          </div>
        </ul>
      </div>  
      <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Group1
