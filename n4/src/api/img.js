import HTTPClient from "./config";

export const fetchImg = ({ search }) => {
  return HTTPClient.get(
    `?key=35794671-989ac978d0f5c3155771be810&q=${search}&per_page=12`
  )
    .then((response) => {
      
      return response.data.hits;
    })
    .catch((error) => {
      console.error(error);
    });
};
