import React, {useState, useEffect} from 'react'
import './Search.css'
import { useNavigate, useLocation } from 'react-router-dom'
import foodDescription from '../../Data/foodDescription'
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import NavBar from '../../Component/Navbar/Navbar';
import Slug from '../FoodDetails/[slug]';




function Search() {
const [inputResult, setInputResult] = useState('')    
const navigate = useNavigate()  
const location = useLocation()
const [filteredResult, setFilteredResult] = useState(foodDescription)
console.log(location, 'location')

useEffect(()=> {
    let initialInput = location.state.data
console.log(initialInput, 'initiaInput')
setInputResult(initialInput)
filterSearch(initialInput)
}, [])

const filterSearch = (data)=> {
 const result = foodDescription.filter((menu, key) => {
  return menu.name.toLowerCase().includes(data.toLowerCase())
 } )
 console.log(result, 'result')
 setFilteredResult(result)
}

const handleInputChange = (data)=>{
    // console.log('pageSearched', data)
    setInputResult(data) 
    filterSearch(data)
}

  return (
      <div className='searchContainer'>
        {/* <div> {<NavBar />}</div> */}
        <div className='searchIcon'>
           <span  onClick={()=> navigate(-1)} className='arrow'><BsArrowLeftShort /></span>
        
           <input type="text" placeholder='search'    className='SearchInput'onChange={(e)   =>handleInputChange(e.target.value)} value= {inputResult}/>
        </div>
        <div className='searchText'>

            <h1>Found {filteredResult.length} result</h1>
        </div>
       
        <div className='cardWrapper'>

   
 {
  filteredResult.length > 0 ? 
filteredResult.map( (menu ,index) => {
return(

    <div key={index} className='foodCard'>

      <Link to={`/foodDetails/${menu.id}`}>
        <div  className='searchMenuCard'>
    <div className='searchImageUrl'>
        <img src={menu.url} alt="" className='foodImage' />
    </div> 
    
    <div className='searchPriceNameDiv'>
                <h3 className='menuName'>{menu.name}</h3>
                <h6 className='menuPrice'><span>₦</span>{menu.price}</h6>
                </div>
                </div>
    </Link>

                </div>
                
)
 })
  :<p> Oops we dont have that on our menu now.</p>
 }
   </div>
    </div>
  )
}

export default Search