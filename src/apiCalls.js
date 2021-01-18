class ApiCall {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }

  getRequest() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => (data = data[this.name]))
      .catch((error) => console.log(error));
  }

  postRequest(newTrip) {
      return fetch(this.url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newTrip)
      })
      .then(response => response.json())
      .then(data => { console.log(data)

      })
      .catch(error => console.log(error))
  }
}

export default ApiCall;