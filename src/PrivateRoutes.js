import Home from "./pages/home/Home";
import {Routes,Route} from 'react-router-dom';
import Profile from "./pages/profile/Profile";

function PrivateRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='/profile' element={<Profile/>}/>     
        <Route path='*' element={<Home/>}/>     

    </Routes>
    </>
}
export default PrivateRoutes