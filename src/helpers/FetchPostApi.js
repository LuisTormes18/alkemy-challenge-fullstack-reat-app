import { alertError } from "./alerts";
async function FetchPostApi(url, values, token = null) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    // add Token 
    !!token && (requestOptions.headers.authorization = token);

    const response = await fetch(url, requestOptions);
    const data = await response.json();
    if (!data.ok) {
      alertError(data.msg);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default FetchPostApi;
