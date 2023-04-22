
export default class HttpGateway {

  get = async (path) => {
    const response = await fetch('http://localhost:8080/api/v1/products/' + path);
    const dto = response.json();
    return dto;
  };

  post = async (path, requestDto) => {
    const response = await fetch(API_PATH + path, {
      method: "POST",
      body: JSON.stringify(requestDto),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const responseDto = response.json();
    return responseDto;
  };
}
