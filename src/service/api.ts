import base from '../../mock/db.json'

export function getProducts() {
  const { data } = base;
  return data.nodes
};