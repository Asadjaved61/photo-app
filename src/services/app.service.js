class AppService {
  getArticles = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos");
  };
}

export default AppService;
