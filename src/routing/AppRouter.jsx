import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";

export const AppRouter = () => {
  return (
    <Router>
      {/* Menú de Navegación */}


      {/* Configurar rutas */}
      <Routes>        
      </Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/articulos' element={<Articles />}></Route>
        <Route path='*' element={
          (
            <div>
              <h1>Esta es la página de error</h1>
            </div>
          )
        }></Route>
    </Router>
  )
}
