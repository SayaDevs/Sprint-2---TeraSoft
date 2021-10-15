export const AddSaleSuccessModal = () => (
  <div className="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
);


export const AddSaleFailModal = () => (
  <div className="modal fade" id="fail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Registro de venta</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">No se pudo registrar la venta</div>
      </div>
    </div>
  </div >
);


export const DeleteSaleConfirmationModal = ({ onSubmit, onCancel }) => (
  <div className="modal fade" id="deleteModalConfirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
          <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
          <button className="btn btn-danger" onClick={onSubmit}>Aceptar</button>
        </div>
      </div>
    </div>
  </div>
)

