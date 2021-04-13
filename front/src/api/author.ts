import { ApiService } from '../services/ApiService'
import { Author } from '../types/author'

export const apiAuthorsGetAll = async (params: Author.All.Search): Promise<Author.Data[]> => {
  const { data } = await ApiService(true).get<Author.Data[]>('/authors', { params })
  return data
}