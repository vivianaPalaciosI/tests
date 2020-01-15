const API_KEY = '803fdd9b8517490d89d8c85ade466b8d'
const API_URL = 'https://newsapi.org/v2/'

class NewsApiService {

  getSources(filter) {
    // return fetch({
    //     method: 'GET',
    //     url: `${API_URL}sources`,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "Accept-Encoding": "gzip, deflate",
    //       "Accept": "application/json",
    //       'X-Api-Key': API_KEY
    //     },
    //     body: JSON.stringify(filter),
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       return response.text();
    //     } else {
    //       throw new Error('Something went wrong ...');
    //     }
    //   })
    // .then(response => response.json()).then(data => data);

    return fetch('https://newsapi.org/v2/sources?apiKey=803fdd9b8517490d89d8c85ade466b8d')
    .then(res => res.json())
    .then((data) => {
      // this.setState({ sourcesList: data.sources })
      // console.log(this.state.sourcesList)
      return data.sources
    })
    .catch(console.log)




//     return fetch({
//       method: 'GET',
//       url: `${API_URL}sources`,
//       headers: {
//         // 'Content-Type': 'application/json',
//         'X-Api-Key': API_KEY
//       },
//       body: JSON.stringify(filter),
//     })
// .then(res => res.json())
// .then((data) => {
//   // this.setState({ sourcesList: data.sources })
//   // console.log(this.state.sourcesList)
//   return data.sources
// })
// .catch(console.log)
  }
}
export default NewsApiService