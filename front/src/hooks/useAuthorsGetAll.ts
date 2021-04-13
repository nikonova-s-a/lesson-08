import { useEffect, useState } from 'react'
import { apiAuthorsGetAll } from '../api/author'
import { Author } from '../types/author'

interface UseAuthorsGetAll {
  data: Author.Data[],
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useAuthorsGetAll = (defaultSearch: string = ''): UseAuthorsGetAll => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<Author.Data[]>([])
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Author.All.Search = {}

    if (search) {
      params.search = search
    }

    setLoading(true)
    apiAuthorsGetAll(params)
      .then(setData)
      .catch(err => {
        console.error(err)
        setData([])
      })
      .then(() => setLoading(false))

  }, [search])

  return {
    data,
    loading,
    setSearch
  }
}