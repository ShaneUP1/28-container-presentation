export const topArticles = () => {
  // eslint-disable-next-line max-len
  return fetch('https://newsapi.org/v2/everything?q=coding&apiKey=eb8bf500e3a746aab6e01ea758d8480c')
    .then(res => res.json())
    .then(json => json.articles);
};

export const searchArticles = (searchTerm) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=eb8bf500e3a746aab6e01ea758d8480c`)
    .then(res => res.json())
    .then(json => json.articles);
};

