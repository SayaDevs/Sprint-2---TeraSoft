import logo from 'logo.svg';
import BarraNav from 'components/BarraNav';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import 'App.css';

function Index() {
  return (
    <div>
      
      <div id="wrapper">
        <BarraNav/>

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* Main Content */}
            <div id="content">

                <TopBar/>

                {/* Begin Page Content */}
                <div className="container-fluid">

                    {/* Page Heading */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Listar Ventas</h1>
                    </div>


                    {/* DataTales Example */}
                    {/* <div className="card shadow mb-4"> </div>
                    <div className="input-group-append">  */}

                    <div>
                        <a href="addSale.html" className="btn btn-primary btn-circle btn-sm">
                            <i href="addSale.html" className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>

                        </a>
                    </div>

                    {/* <a href="#" className="btn btn-primary btn-circle btn-sm">
                            <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i> 
                        </a>
 
                        <a href="#" className="btn btn-primary btn-circle btn-sm">
                            <i className="fa fa-pencil fa-10x" aria-hidden="true"></i>
                      </a>
                        
                        <a href="#" className="btn btn-primary btn-circle btn-sm"> 
                            <i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                            
                       </a>


                    {/* </div> */}
                    <div className="card-body">

                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"
                                className="centerText">
                                <thead>
                                    <tr>
                                        <th>ID Venta</th>
                                        <th>Fecha de Venta</th>
                                        <th>Nombre Cliente</th>
                                        <th>Cédula/NIT Cliente</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Valor total</th>
                                        <th>Vendedor</th>
                                        <th>Estado</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                {/*  <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot> */}
                                <tbody>
                                    <tr>
                                        <td>AH589</td>
                                        <td>20/07/2021</td>
                                        <td>Alexandra Buendía</td>
                                        <td>1056789544</td>
                                        <td>Fiat Mobi Like</td>
                                        <td>1</td>
                                        <td>42.990.000</td>
                                        <td>Carla Caicedo</td>
                                        <td>En Proceso</td>

                                        <td>
                                            <a href="#" className="btn btn-primary btn-circle btn-sm">
                                                <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                            </a>
                                            <a href="#"  className="btn btn-primary btn-circle btn-sm" data-target="#logoutModal1" data-toggle="modal">
                                                <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AH587</td>
                                        <td>20/07/2021</td>
                                        <td>Sharon Barboza</td>
                                        <td>104658200</td>
                                        <td>Fiat Mobi Like</td>
                                        <td>1</td>
                                        <td>42.990.000</td>
                                        <td>Carla Caicedo</td>
                                        <td>Cancelada</td>

                                        <td>
                                            <a href="#" className="btn btn-primary btn-circle btn-sm">
                                                <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                            </a>
                                            <a href="#"  className="btn btn-primary btn-circle btn-sm" data-target="#logoutModal1" data-toggle="modal">
                                                <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                            </a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>AH582</td>
                                        <td>21/07/2021</td>
                                        <td>Junior Zarta</td>
                                        <td>73598745</td>
                                        <td>Fiat Uno Way Pop</td>
                                        <td>1</td>
                                        <td>45.990.000</td>
                                        <td>Ramiro Gonzalez</td>
                                        <td>En Proceso</td>

                                        <td>
                                            <a href="#" className="btn btn-primary btn-circle btn-sm">
                                                <span className="fas fa-pencil-alt fa-lg" aria-hidden="true"></span>
                                            </a>
                                            <a href="#"  className="btn btn-primary btn-circle btn-sm" data-target="#logoutModal1" data-toggle="modal" >
                                                <span className="fa fa-trash fa-lg" aria-hidden="true"></span>
                                            </a>
                                        </td>
                                    </tr>



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}

            </div>
            {/* End of Main Content */}

<Footer/>
        </div>
        {/* End of Content Wrapper */}

    </div>
    {/* End of Page Wrapper */}

    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

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
            <a className="btn btn-primary" href="salesList.html">Aceptar</a>
        </div>
    </div>
</div>
</div>

   {/* Delete Modal*/}
    <div className="modal fade" id="logoutModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Eliminar venta</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">¿Desea eliminar esta venta de forma permanente?</div>
            <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" href="salesList.html" data-dismiss="modal">Cancelar</button>
                <a className="btn btn-danger" data-target="#logoutModal2" data-toggle="modal" data-dismiss="modal" aria-label="Close">Aceptar</a>
            </div>
        </div>
    </div>
  </div>

    
    
    </div>
  );
}

export default Index;
