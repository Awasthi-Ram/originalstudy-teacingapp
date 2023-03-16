import { useContext } from "react";
import {BrowserRouter} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";


function App() {
  const { currentUser } = useContext(AuthContext);

  return <>
      <BrowserRouter>
      {currentUser?
        <PrivateRoutes/>:
        <PublicRoutes/>
      }
      </BrowserRouter>
  </>
}

export default App
