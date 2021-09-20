import Swal from "sweetalert2";



async function FetchDeleteApi(url,token) {

  const { isConfirmed } = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (!isConfirmed) {
    return;
  }
  const resp = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  });
  const data = await resp.json();
  return data;
}
export default FetchDeleteApi;
