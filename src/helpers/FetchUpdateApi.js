import { alertError } from "./alerts";

async function FetchUpdateApi(url, values,token) {


  try {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json",
      authorization: `${token}`, 
    },
      body: JSON.stringify(values),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    console.log(data);
    if (!data.ok) {
      alertError(data.msg);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default FetchUpdateApi;
