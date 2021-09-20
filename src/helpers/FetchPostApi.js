import { alertError } from "./alerts";
async function FetchPostApi(url, values,token='') {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json",
      authorization: `${token}` 
    },
      body: JSON.stringify(values),
    };
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
