import { Router as expresRouter } from 'express';
import makeHealthRouter from './health';
import makeSaleController from './sale';

export default (Server) => {
  const root = expresRouter();

  root.use('/v1', makeHealthRouter(Server));
  root.use('/v1', makeSaleController(Server));

  return root;
};

