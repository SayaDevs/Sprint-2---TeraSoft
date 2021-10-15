export default () => ({
  name: 'Sales',
  schema: {
    date: {
      type: Date,
      required: true,
    },
    client_name: {
      type: 'String',
      required: true,
      minlength: 4,
    },
    client_cc: {
      type: 'String',
      required: true,
      minlength: 5,
    },
    product: {
      type: 'String',
      required: true,
      minlength: 4,
    },
    quantity: {
      type: 'Number',
      min: 1,
    },
    value: {
      type: 'Number',
      min: 0,
    },
  },
});
