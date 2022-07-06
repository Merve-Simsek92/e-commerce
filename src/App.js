import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/AppRouter';
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
        <AppRouter />
         <ToastContainer /> 
      </AuthContextProvider>
    </div>
  );
}

export default App;
