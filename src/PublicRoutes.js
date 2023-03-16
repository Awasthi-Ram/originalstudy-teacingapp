import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Routes,Route} from 'react-router-dom';

function PublicRoutes()
{
    return<>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>     
        <Route path='*' element={<Login/>}/>
    </Routes>
    </>
}

export default PublicRoutes