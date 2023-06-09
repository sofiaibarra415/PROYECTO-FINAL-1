import React from "react";
import '../style/pages/sugerenciaspage.css';
const SugerenciasPage = (props) => {
    return (
        <>
<main className="holder">
        <h2>Sugerencias para planificar tu alimentación</h2>
        <div className="sugerencias">
            <img src="img/lista.png" alt="listado"/>
            <div className="info">
                <h4>Listado y menú semanal</h4>
                <p>Arma un menú semanal; luego hace un listado de los
                    alimentos necesarios para cada una de esas preparaciones.
                    Chequea lo que ya tenes en casa de esa lista, y entonces
                    compra solo lo que falta.</p>
            </div>
        </div>
        <div className="sugerencias">
            <img src="img/estudio.jpg" alt="listado"/>
            <div className="info">
                <h4>Comida para llevar</h4>
                <p>¿Desayunas en el trabajo, facultad o colegio y terminas
                    comiendo galletitas? Hay muchas opciones saludables para
                    llevarte: frutas, frutos secos, muffins o budines del recetario..
                    solo es cuestión de dejarte el tupper listo la noche anterior..</p>
            </div>
        </div>
        <div className="sugerencias">
            <img src="img/frutas.jpg" alt="listado"/>
            <div className="info">
                <h4>Consumo de frutas</h4>
                <p>Frutas: si las compras pero te cuesta incorporarlas dejalas a
                    la vista; tenerlas en una fuente en la mesa favorece su
                    consumo.</p>
            </div>
        </div>
    </main>
    </>
    );
}
export default SugerenciasPage;