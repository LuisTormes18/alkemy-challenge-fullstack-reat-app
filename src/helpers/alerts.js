import Swal from "sweetalert2";

export const alertError = (msg) => {
  Swal.fire({
    title: "Opps..!",
    text: msg,
    icon: "error",
  });
};
export const alertSuccess = (msg) => {
  Swal.fire({
    title: msg,
    icon: "success",
  });
};
