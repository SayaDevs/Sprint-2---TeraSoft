import createAddressModel from './sale/model';

export const loadModels = Server => ({
  address: createAddressModel(Server),
});
