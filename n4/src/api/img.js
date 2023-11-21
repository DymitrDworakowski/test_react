import HTTPClient from "./config";

export const fetchImg = ({ search,page }) => {
  return HTTPClient.get(
    `?key=35794671-989ac978d0f5c3155771be810&q=${search}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  )
    .then((response) => {
      
      return response.data.hits;
    })
    .catch((error) => {
      console.error(error);
    });
};
