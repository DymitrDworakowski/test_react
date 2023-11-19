import HTTPClient from "./config";

export const fetchImg = () => {
  HTTPClient.get(
    "?key=35794671-989ac978d0f5c3155771be810&q=yellow+flowers&image_type=photo&pretty=true",
    {
      transformResponse: [
        (data) => {
          const images = JSON.parse(data);
          return {
            images: images,
          };
        },
      ],
    }
  )
    .then((response) => response.data.hits)
    .catch((error) => {
      console.error(error);
    });
};
