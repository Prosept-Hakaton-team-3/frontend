const MAIN_API = "http://81.31.246.159/api/v1";

class Api {
  constructor ({ address }) {
    this.address = address;
  }

  _checkResponse (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }
//
  postMatches ({ product_id, dealer_id, key }) {
    return fetch(`${this.address}/matches`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ product_id, dealer_id, key })
    })
      .then(this._checkResponse);
  }

  getOwnProducts () {
    return fetch(`${this.address}/own-products`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this._checkResponse);
  }

  getProducts () {
    return fetch(`${this.address}/products`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this._checkResponse);
  }

  getProductsId ({ id }) {
    return fetch(`${this.address}/products/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this._checkResponse);
  }

  deleteProductsId ({ id }) {
    return fetch(`${this.address}/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(this._checkResponse);
  }
}
const MainApi = new Api({
  address: MAIN_API
});
export default MainApi;
