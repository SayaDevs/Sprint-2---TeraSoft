import { SaleManager } from '../managers/sale.manager';
import { BaseController } from './base.controller';

export class SaleController extends BaseController {

  constructor(Server) {
    super(Server);
    this.manager = new SaleManager(this.Server);
  }

  async getSale(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { id } = req.params;
      const result = await this.manager.get(id);
      res.send(result);
    });
  }

  async getAll(req, res) {
    await super.ensureOperation(req, res, async () => {
      const result = await this.manager.getAll();
      res.send(result);
    });
  }
  async getList(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { query } = req;
      query.limit = Number(query.limit || 10);
      query.page = Number(query.page || 1);
      const result = await this.manager.list({}, query);
      res.send(result);
    });
  }

  async saveSale(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { body } = req;
      const result = await this.manager.create(body);
      res.send(result);
    });
  }

  async updateSale(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { body, params } = req;
      const { id } = params;
      const result = await this.manager.update(id, body);
      res.send(result);
    });
  }

  async deleteSale(req, res) {
    await super.ensureOperation(req, res, async () => {
      const { params } = req;
      const { id } = params;
      const result = await this.manager.delete(id);
      res.send(result);
    });
  }
}
