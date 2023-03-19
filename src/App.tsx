import "./App.css";
import { Cabecera } from "./components/cabecera/cabecera.component";
import { Pie } from "./components/pie/pie.component";
import { Principal } from "./components/principal/principal.component";

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Principal />
      <Pie
        titulo="Este es un Footer"
        editor="@david.montero.urrutia"
        fecha="marzo de 2023"
      />
      {/* Antes de los textos arroja un signo de dollar. ¿Cómo lo corrijo? */}
    </div>
  );
}

export default App;
