import { BaseManager } from './base.manager';

export class SaleManager extends BaseManager {
  constructor(Server) {
    super(Server);
    this.model = this.Server.mongo.models.address;
  }

  getAll() {
    return this.model.find({});
  }

}
