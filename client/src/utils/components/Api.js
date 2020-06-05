// class API {
// 	constructor() {
// 		this.url = `https://57c62f9e.ngrok.io/api`;
// 	}

// 	httpRequest = ({ url, data }) => {
// 		return new Promise(function (resolve, reject) {
// 			fetch(url, data)
// 				.then((response) => {
// 					response.json().then((data) => {
// 						if (response.status >= 300) {
// 							reject(data.message);
// 						}
// 						resolve(data);
// 					});
// 				})
// 				.catch((e) => {
// 					reject(Error(e));
// 				});
// 		});
// 	};

// 	// https://codereview.stackexchange.com/questions/123577/using-fetch-and-a-new-promise-object-to-get-api-results
// 	/*
// 	httpRequest({ url }) {
// 		return fetch(url)
// 			.then((response) => {
// 				if (response.ok) {
// 					const contentType =
// 						response.headers.get("Content-Type") || "";

// 					if (contentType.includes("application/json")) {
// 						return response.json().catch((error) => {
// 							return Promise.reject(
// 								Error("Invalid JSON: " + error.message)

// 								new ResponseError(
// 									"Invalid JSON: " + error.message
// 							);
// 						});
// 					}

// 					if (contentType.includes("text/html")) {
// 						return response
// 							.text()
// 							.then((html) => {
// 								return {
// 									page_type: "generic",
// 									html: html,
// 								};
// 							})
// 							.catch((error) => {
// 								return Promise.reject(
// 									Error("HTML error: " + error.message)
// 									new ResponseError(
// 										"HTML error: " + error.message
// 									)
// 								);
// 							});
// 					}

// 					return Promise.reject(
// 						Error("Invalid content type: " + contentType)
// 						new ResponseError(
// 							"Invalid content type: " + contentType
// 						)
// 					);
// 				}

// 				if (response.status == 404) {
// 					return Promise.reject(
// 						Error("Page not found: " + url)
// 						// new NotFoundError("Page not found: " + url)
// 					);
// 				}

// 				return Promise.reject(
// 					Error("HTTP error: " + response.status)
// 					// new HttpError("HTTP error: " + response.status)
// 				);
// 			})
// 			.catch((error) => {
// 				return Promise.reject(
// 					Error(error.message)
// 					// new NetworkError(error.message)
// 				);
// 			});
// 	}*/

// 	fetchAlbums() {
// 		this.httpRequest({
// 			url: `${this.url}/albums`,
// 			data: {
// 				method: "GET",
// 			},
// 		});
// 	}

// 	fetchAlbum(album) {
// 		this.httpRequest({
// 			url: `${this.url}/album/${album}`,
// 			data: {
// 				method: "GET",
// 			},
// 		});
// 	}

// 	fetchArtists() {
// 		this.httpRequest({
// 			url: `${this.url}/artists`,
// 			data: {
// 				method: "GET",
// 			},
// 		});
// 	}

// 	fetchArtist(artist) {
// 		this.httpRequest({
// 			url: `${this.url}/artist${artist}`,
// 			data: {
// 				method: "GET",
// 			},
// 		});
// 	}
// }

// const Api = new API();

// export default Api;

class ApiClass {
	constructor() {
		this.url = `https://57c62f9e.ngrok.io/api`;
	}

	makeRequest = ({ url, data }) => {
		return new Promise((resolve, reject) => {
			fetch(url, data)
				.then((response) => {
					response.json().then((data) => {
						if (response.status >= 300) {
							reject(data.message);
						}
						resolve(data);
					});
				})
				.catch((e) => {
					reject(Error(e));
				});
		});
	};

	fetchArtists = () => {
		return this.makeRequest({
			url: `${this.url}/artists`,
			data: {
				method: "GET",
			},
		});
	};

	fetchArtist = (artist) => {
		return this.makeRequest({
			url: `${this.url}/artist/${artist}`,
			data: {
				method: "GET",
			},
		});
	};

	fetchAlbums = () => {
		return this.makeRequest({
			url: `${this.url}/albums`,
			data: {
				method: "GET",
			},
		});
	};

	fetchAlbum = ({ album }) => {
		return this.makeRequest({
			url: `${this.url}/album/${album}`,
			data: {
				method: "GET",
			},
		});
	};
}

const Api = new ApiClass();
export default Api;
