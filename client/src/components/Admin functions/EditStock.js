import Axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import isEmpty from 'is-empty'

 const EditStock = () => {
    
    const {stock_id}= useParams();
	const [quantity,setQuantity] = useState(0);

    const handlesave=(e)=>{

        Axios.post('http://localhost:3001/admin/editstock',{
            stock_id:stock_id,
            quantity :quantity
        }).then((resp)=>{
            if(resp.data.ff==='s')
            {
                alert('Updated')
            }
            else
            {
                alert('Not Updated')
            }
        })
        e.preventDefault()
      
     }
  return (
    <>
    <div >
		<div >
			<form >
				<span >
					Edit
				</span>

                <div >
	 				
					<input  type = "Number" onChange={(e)=>setQuantity(e.target.value)}   placeholder="new Quantity" />
				</div>
<div/>

        <button  onClick={handlesave}>Update</button>
			</form>
		</div>
	</div>

    </>
  )

}
export default EditStock;