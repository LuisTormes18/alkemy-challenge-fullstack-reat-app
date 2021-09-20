// const base_url = "https://warm-ridge-60036.herokuapp.com/api";
const base_url ='http://localhost:4001/api';
const login_url = `${base_url}/auth`;
const updateToken_url = login_url;
const register_url = `${base_url}/auth/add`;

const url_get_by_limit = `${base_url}/budget/get-top/`
const url_get_by_type = `${base_url}/budget/get-type/`
const url_get_total_budget = `${base_url}/budget/getBudget/`

const url_new_record = `${base_url}/budget/add`;
const url_delete_record = `${base_url}/budget/delete/`
const url_update_record = `${base_url}/budget/update/`

export  {
  base_url,
  login_url,
  register_url,
  updateToken_url,
  url_new_record,
  url_delete_record,
  url_update_record,
  url_get_total_budget,
  url_get_by_limit,
  url_get_by_type
};
