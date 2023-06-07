import React from "react";
import '../style/pages/contactopage.css';
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto</h2>
                <form className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <div className="contenedor">
                    <div className="uno"><img src="img/instagram.png" alt="prop" /></div>
                    <div className="dos"><img src="img/facebook.png" alt="prop" /></div>
                    <div className="tres"><img src="img/gorjeo.png" alt="prop" /></div>
                </div>

            </div>
        </main>
    );
}
export default ContactoPage;