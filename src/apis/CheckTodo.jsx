import httpService from "services/http.service";

export const CheckTodoAPI = async (data) => {
  const response = await httpService.put(`/api-todo/${data.id}`, {...data, checked: !data.checked});
  return response.data;
}