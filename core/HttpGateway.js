
export const HttpGateway = () => {

  const PRODUCT_URL = process.env.REACT_APP_PRODUCT_API_CONFIG

  return ({
    get: async (path) => {
      const response = await fetch(PRODUCT_URL + path);
      const dto = response.json();
      return dto;
    },
  
    post: async (path, requestDto) => {
      const response = await fetch(API_PATH + path, {
        method: "POST",
        body: JSON.stringify(requestDto),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const responseDto = response.json();
      return responseDto;
    }
  })

}
