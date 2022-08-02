import httpService from "services/http.service";

export const AddTodoAPI = async (data) => {
  const response = await httpService.post("/api-todo", data);
  return response.data;
}