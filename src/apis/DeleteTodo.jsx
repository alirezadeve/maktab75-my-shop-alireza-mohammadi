import httpService from "services/http.service";

export const DeleteTodoAPI = async (id) => {
  const response = await httpService.delete(`/api-todo/${id}`);
  return response.data;
}