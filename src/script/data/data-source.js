class DataSource {
  static searchClub(keyword) {
    const apiKey = '2aec8204'; 

    return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.Search) {
            return Promise.resolve(responseJson.Search);
          } else {
            return Promise.reject(`Tidak ada hasil untuk ${keyword}`);
          }
        });
  }
}


export default DataSource;
