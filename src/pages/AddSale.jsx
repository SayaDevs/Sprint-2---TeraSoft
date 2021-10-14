import {Link} from "react-router-dom";
import logo from 'logo.svg';
import BarraNav from 'components/BarraNav';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import 'App.css';


function AddSale() {
    return (
        <div>
            <div id="wrapper">
                <BarraNav/>
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
                                    <form className="user form-control-user ">
                                        <div className="form-group row">

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Fecha venta:
                                                <input type="date" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Nombre del cliente:
                                                <input type="text" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm">Cédula del cliente:
                                                <input type="number" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Producto:
                                                <input type="text" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Cantidad:
                                                <input type="number" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>

                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Valor total:
                                                <input type="number" className="form-control form-control-user"
                                                    placeholder="" required />
                                            </div>
                                            <div className="col-sm-6 mb-3 mb-sm-0 paddingForm"> Vendedor:
                                                <select name="rol" id="rol">
                                                    <option hidden selected>Selecciona </option>
                                                    <option>Carla Caicedo</option>
                                                    <option>Ramiro Gonzalez</option>
                                                </select>
                                            </div>

                                        </div>
                                        
                                        <div className="btn btnSmall centerBtn btn-primary btn-user btn-block" data-target="#registerSaleModal" data-toggle="modal">
                                            Registrar venta
                                        </div>
                                        
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

            {/* Register Modal*/}
            < div className="modal fade" id="registerSaleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de venta</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">La venta se ha registrado exitosamente</div>
                        <div className="modal-footer">
                        <button className="btn btn-primary" type="button" href="salesList.html" data-dismiss="modal">Registrar otra venta</button>
                            <a className="btn btn-primary" href="/index">Aceptar</a>
                        </div>
                    </div>
                </div>
            </div >

        </div>

    );
}

export default AddSale;
