import React, { useState, useEffect } from 'react';
import fnsFormat from 'date-fns/format'
import BarraNav from 'components/BarraNav';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import { loadAllSales, deleteSale } from 'services/SalesServices';
import { DeleteSaleConfirmationModal } from 'components/sales/modals';

import 'App.css';
function Index() {
  const [sales, setSales] = useState([])

  const loadSales = async () => {
    // ya que debemos consultar al backend, esta es una funcion asincrona
    // y debemos esperar que se resuelva, por eso colocamos la palabra reservada await
    // mira que colocamos la palabra  async al principio 
    const sales = await loadAllSales();

    // Llamamos la funcion que hará que react actualice nuyestro html
    setSales(sales)
  }

  const onDeleteSale = async (sale) => {

    const deletedSale = await deleteSale(sale._id);

    // si se pudo eliminar el sale
    if (deletedSale) {
      // volvemos a cargar las sales para obtener lo ultimo de la base de datos
      loadSales()
    }

  }

  // Use effect es una funcion que recibe otra funcion 
  // que se ejecuta cuando escucha un cambio, le pasamos un array vacio para que
  // se ejecute solo una vez
  useEffect(() => {
    loadSales();
  }, [])

  // Por ejemplo, en este use effect se ejecutará cada vez que el objeto sales cambie (su referencia)
  useEffect(() => {
    // window.$('#dataTable').DataTable()
  }, [sales])


  // Vamos a recorrer el array de sales traido del backend.
  // Para cada una de las sales vamos a convertirla en html
  // Al final será un array de objetos html, o un array de objetos DOM
  // Como explicamos en la pagina addSale
  const saleItems = sales.map((sale, indexInArray) => {
    // Tomamos los atributos de la sale
    const {
      _id,
      date,
      client_name,
      client_cc,
      product,
      quantity,
      value,
    } = sale;

    // creamos una funcion para eliminar solo esta venta
    const deleteThisSale = () => onDeleteSale(sale)

    return (
      // Cuando creamos arrays de elementos html
      // React necesita que agreguemos un key a ese elemento
      // Para que cuando se haga un cambio sobre un elemento en dicho array
      // React sepa cual html actualizar, y asi no actualizar toda la pagina
      // en este caso, le estamos diciendo que la key sea el id de la venta 
      // este id es generado desde el backend por la base de datos en mongo
      // si no lo tiene (por alguna razon) que tome la posicion de la sale en el array
      // al final retorna la fila en la tabla
      <tr key={_id || indexInArray}>
        <td>{_id}</td>
        <td>{fnsFormat(new Date(date), 'MM/dd/yyyy')}</td>
        <td>{client_name}</td>
        <td>{client_cc}</td>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{value}</td>

        <td>

          {/* <a href="#" className="btn btn-primary btn-circle btn-sm" data-target="#logoutModal1" data-toggle="modal">
            <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
          </a> */}


          <button className="btn btn-primary btn-circle btn-sm" onClick={deleteThisSale}>
            <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
          </button>
        </td>
      </tr>
    )
  })

  // Definimos una fila por defecto por si no tenemos aun ventas registradas
  let rows = <tr ><td colspan="8" >No hay ventas registradas</td></tr>

  // Si tenemos ventas registradas entonces guardamos ese html alli en la variable rows.
  if (saleItems.length) {
    rows = saleItems;
  }
  return (
    <div>

      <div id="wrapper">
        <BarraNav />

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

          {/* Main Content */}
          <div id="content">

            <TopBar />

            {/* Begin Page Content */}
            <div className="container-fluid">

              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Listar Ventas</h1>
              </div>



              <div>
                <a href="/addsale" className="btn btn-primary btn-circle btn-sm">
                  <i href="/addsale" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>

                </a>
              </div>


              <div className="card-body">

                <div className="table-responsive">
                  <table className="table table-bordered centerText" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th>ID Venta</th>
                        <th>Fecha de Venta</th>
                        <th>Nombre Cliente</th>
                        <th>Cédula/NIT Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor total</th>
                        <th>Acción</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* Podemos imprimir un array de objetos HTML (que es un array de DOM ) */}
                      {rows}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}

          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
        {/* End of Content Wrapper */}

      </div>
      {/* End of Page Wrapper */}

      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Delete Modal*/}
      <DeleteSaleConfirmationModal />




      {/* Logout Modal*/}
      <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cerrar Sesión</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Seleccione el botón "Cerrar Sesión" que aparece a continuación para finalizar‎.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
              <a className="btn btn-primary" href="login.html">Cerrar Sesión</a>
            </div>
          </div>
        </div>
      </div>

      {/* C Delete Modal*/}
      <div className="modal fade" id="logoutModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Eliminar venta</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">La venta fue eliminada de forma permanente</div>
            <div className="modal-footer">
              <a className="btn btn-primary" href="/index">Aceptar</a>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Index;
