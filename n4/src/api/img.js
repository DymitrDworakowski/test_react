import HTTPClient from "./config";

export const fetchImg = () => {
  return HTTPClient.get(
    "?key=35794671-989ac978d0f5c3155771be810&q=yellow+flowers&image_type=photo&pretty=true"
  )
    .then((response) => {
      console.log(response.data.hits);
      return response.data.hits;
    })
    .catch((error) => {
      console.error(error);
    });
};
