import httpService from "services/http.service";

export const FilterTodoAPI = async (status) => {
  const response = await httpService.get(`/api-todo?checked=${status}`);
  return response.data;
}