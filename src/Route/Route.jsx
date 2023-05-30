import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import Menu from '../Pages/Menu/Menu'
import Search from '../Pages/Search/Search'
import FoodDetails from '../Pages/FoodDetails/FoodDetails'
import Address from '../Pages/Address/Address'
import SideMenu from '../Pages/SideMenu/SideMenu'
// import Profile from '../Pages/Profile/Profile'
import MyProfile from '../Pages/MyProfile/MyProfile'
import Orders from '../Pages/Orders/Orders'
import MyOffer from '../Pages/MyOffers/MyOffer'
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy'
import Map from '../Pages/Map/Map'
import PageContainer from '../Component/PageContainer/PageContainer'



const RouteComponent = () =>  {
    return (

        <BrowserRouter>

            <Routes>
                <Route element={<PageContainer />} >
                <Route path='' element={<Homepage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/search' element={<Search />} />
                <Route path='/foodDetails/:id' element={<FoodDetails />} />
                <Route path='/address' element={<Address />} />
                <Route path='/sidemenu' element={<SideMenu />} />
                <Route path='/myprofile' element={<MyProfile />} />
                <Route path='/order' element={<Orders />} />
                <Route path='/map' element={<Map />} />
                <Route path='/privacy' element={<PrivacyPolicy />} />
                <Route path='/myoffer' element={<MyOffer />} />
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default RouteComponent