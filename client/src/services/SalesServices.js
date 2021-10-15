export const saveSale = async (saleData) => {
  try {
    const url = `http://localhost:1337/api/v1/sale/`;
    const headers = {
      'x-application-id': 'terasoft-backend',
      'content-type': 'application/json'
    };

    const response = await fetch(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(saleData),
    });

    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
}

export const loadAllSales = async () => {
  try {
    const url = `http://localhost:1337/api/v1/sale/all`;
    const headers = {
      'x-application-id': 'terasoft-backend',
    };

    const response = await fetch(url, {
      headers,
      method: 'GET',
    });

    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
}


export const deleteSale = async (id) => {
  try {
    const url = `http://localhost:1337/api/v1/sale/${id}`; // esta es una forma de concatenar strings
    const headers = {
      'x-application-id': 'terasoft-backend',
    };

    const response = await fetch(url, {
      headers,
      method: 'DELETE',
    });

    const data = await response.json();

    return data;
  } catch (e) {
    return null;
  }
}