import { Route } from "react-router-dom";
import Home from "./pages/Home";
import AnswerVideos from "./pages/AnswerVideos";
import { routes } from "./models/routes.models";
import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { GlobalStyle } from "./styled-components/GlobalStyle.styled";

function App() {
  return (
    <div className='main'>
      <GlobalStyle />
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ANSWER_VIDEOS} element={<AnswerVideos />} />
        <Route path='*' element={<Navigate to={routes.HOME} />} />
      </Routes>
    </div>
  );
}

export default App;

/**
 El boton siguiente tiene LOGICA, si estas en la 4, y respondiste 1 y 3, al dar siguiente, va a la 2 ...

 Cuando responda todas las preguntas, en la 4 en vez de siguiente tiene que salir "terminar", al darle click me envia al home, y el boton enviar deberia estar habilitado .. al darle click enviar, muestra mensaje de EXITOS...

 Cuando se termina de grabar el video, inmediatamente debe reproducirse.
 - el puntito rojo de grabacion, al iniciarse deberia palpitar, aparecer y desaparecer.
 - el minutero comienza en cero y suma uo por uno hasta 2 minutos...

 */
