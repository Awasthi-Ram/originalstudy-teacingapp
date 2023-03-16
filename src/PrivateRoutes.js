import Home from "./pages/home/Home";
import {Routes,Route} from 'react-router-dom';

function PrivateRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Home/>}/>     
        <Route path='*' element={<Home/>}/>     
    </Routes>
    </>
}
export default PrivateRoutes