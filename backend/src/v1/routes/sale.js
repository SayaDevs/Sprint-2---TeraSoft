import { Router as expresRouter } from 'express';
import { SaleController } from '../controllers/sale.controller';

export default (Server) => {
  const router = expresRouter();

  const controller = new SaleController(Server);


  router.get('/sale/all', controller.getAll.bind(controller));
  router.get('/sale/:id', controller.getSale.bind(controller));
  router.get('/sale/', controller.getList.bind(controller));
  router.post('/sale/', controller.saveSale.bind(controller));
  router.put('/sale/:id', controller.updateSale.bind(controller));
  router.delete('/sale/:id', controller.deleteSale.bind(controller));

  return router;
};
