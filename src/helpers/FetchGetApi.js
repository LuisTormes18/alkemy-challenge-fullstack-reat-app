export const FetchGetApi = async (url, token) => {
  try {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    const { data } = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};
