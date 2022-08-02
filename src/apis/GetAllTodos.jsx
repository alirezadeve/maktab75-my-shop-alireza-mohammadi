import httpService from "services/http.service";

export const GetAllTodosAPI = async () => {
  const response = await httpService.get('/api-todo');
  return response.data;
}