
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header />
       <AllRoutes />
      <Footer /> 
    </div>
  );
}

export default App;
