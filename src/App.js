import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/AppRouter';
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BasketProvider } from './context/BasketContext';
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <BasketProvider>
        <AppRouter />
         <ToastContainer /> 
         </BasketProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
