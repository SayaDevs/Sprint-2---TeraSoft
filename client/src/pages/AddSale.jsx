import { Link } from "react-router-dom";
import logo from 'logo.svg';
import BarraNav from 'components/BarraNav';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';


import { saveSale } from '../services/SalesServices'

import 'App.css';
import { AddSaleSuccessModal } from "components/sales/modals";
import { AddSaleFailModal } from "components/sales/modals";

async function handleSubmit(form) {
  // Evitamos que el navegador el comportamiento predeterminado
  // al hacer un submit del form
  // por ejemplo: recargar la pagina o abrir una ventana
  form.preventDefault();


  // Obtenemos la referencia de los inputs HTML en javascript 
  // tambien conocidos como objetos DOM por sus siglas:  document object model
  // el dom son todos los elementos html y se pueden acceder por javascript
  const {
    date: dateInput,
    client_cc: client_ccInput,
    client_name: client_nameInput,
    product: productInput,
    quantity: quantityInput,
    value: valueInput,
  } = form.target.elements;

  // Formamos un objeto javascript y guardamos en el todos los valores de nuestra venta
  // Para leer los valores de nuestros inputs (o elementos DOM) accedemos a la propiedad value
  // Los elementos dom tambien tienen otros attributos, en ellos se guardan caracterisiticas de 
  // las etiquetas HTML como los nombres de las clases, estilos, tamaños, ids,  etc..
  // y tambien los podemos cambiar

  const payload = {
    date: dateInput.value,
    client_cc: client_ccInput.value,
    client_name: client_nameInput.value,
    product: productInput.value,
    quantity: Number(quantityInput.value),
    value: Number(valueInput.value),
  }

  // llamamos la funcion que llama al backend para que guarde nuestro objeto
  // La palabra reservada "await" indica que es una funcion asincrona, es decir
  // que debemos esperarla a que se ejecute
  const savedData = await saveSale(payload)

  // Despues que se ejecute verificamos si se guardó algo, si se guardó pues 
  // llamamos al modal 

  if (savedData) {
    // Usamos el plugin de boostrap para JQuery para abrir el modal
    // JQuery está en window, por eso llamamos window.$ que 
    // es lo mismo que llamar al objeto $ en cualquier lado, 
    // solo que en react no podemos
    window.$('#success').modal()
  } else {
    // No se guardó nada, entonces mostramos un modal de error
    window.$('#fail').modal()
  }

}


function AddSale() {
  return (
    <div>
      <div id="wrapper">
        <BarraNav />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column" >
          {/* Main Content */}
          <div id="content">
            <TopBar />
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-4 text-gray-800 center">Agregar Venta</h1>
              <div className="row center">
                <div className="col-lg-6">
                  <form className="user form-control-user " onSubmit={handleSubmit}>
                    <div className="form-group row">

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Fecha venta:
                        <input name="date" type="date" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre del cliente:
                        <input name="client_name" type="text" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Cédula del cliente:
                        <input name="client_cc" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Producto:
                        <input name="product" type="text" className="form-control form-control-user"
                          placeholder="" required />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cantidad:
                        <input name="quantity" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                      <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Valor total:
                        <input name="value" type="number" className="form-control form-control-user"
                          placeholder="" required />
                      </div>

                    </div>

                    <button className="btn btnSmall centerBtn btn-primary btn-user btn-block">
                      Registrar Venta
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      < Footer />


      {/* Scroll to Top Button*/}
      < a className="scroll-to-top rounded" href="#page-top" >
        <i className="fas fa-angle-up"></i>
      </a >

      <AddSaleSuccessModal />
      <AddSaleFailModal />

    </div>

  );
}

export default AddSale;
