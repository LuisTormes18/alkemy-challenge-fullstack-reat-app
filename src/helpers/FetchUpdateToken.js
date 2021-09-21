import { url_updateToken } from "../api/endpoins";

async function FetchUpdateToken (token)  {
  try {
    const resp = await fetch(url_updateToken, {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    const result = await resp.json();
    return result;
  } catch (error) {
    throw error;
  }
};
export default FetchUpdateToken;