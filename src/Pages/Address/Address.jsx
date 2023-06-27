import React, {useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Address.css";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../../Component/Button/Button";


function Address() {

  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',

  })
  const navigate = useNavigate();


  const handleInputChange =(data, inputCategory) =>{
    // console.log(data)
    // console.log(inputCategory)
    setDeliveryDetails({
      ...deliveryDetails, [`${inputCategory}`] :  data
    });
  }

   const  handleConfirmAddress = () => {
   localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));
   navigate("/checkout");
  };

  console.log(deliveryDetails)
  return (
    <div className='addressContainer'>
      <div className='innerWrapper'>
        <div className='addressHeader'>
          <Link to='/cart'>
            <BsArrowLeftShort className='addressArrow' />
          </Link>
          <p>Address</p>
        </div>
        <div className='addressDelivery'>
          <h3>Delivery</h3>
        </div>
        <div className='addressChange'>
          <h3>Address details</h3>
          <p>Change</p>
        </div>
        <div className='addressInfo'>
          <div className='class'>
            {/* <h3>Akaeme Chidera</h3> */}
            <input type="text" placeholder="Enter name" name="fullName" value={deliveryDetails.fullName} onChange={(e) => handleInputChange(e.target.value, 'fullName')}/>
          </div>
          <div className='class'>
            {/* <h3>Alade close</h3> */}
            <input type="text" placeholder="Enter address" name="address" value={deliveryDetails.address} onChange={(e) => handleInputChange(e.target.value, 'address')}/>
          </div>
          <div className='class'>
            {/* <h4>09029935318</h4> */}
            <input type="number" placeholder="Phone Number" name="phoneNumber" value={deliveryDetails.phoneNumber} onChange={(e) => handleInputChange(e.target.value, 'phoneNumber')}/>
          </div>
        </div>
      </div>
      
        <div className='addressButton'>
          <Button name='Confirm Address' bgcolor='yellow'  onClick={()=> handleConfirmAddress()}/>
        </div>
  
    </div>
  );
}

export default Address;
