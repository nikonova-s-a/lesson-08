import block from 'bem-cn'
import React, { useEffect, useState } from 'react'
import { apiGenreGetAll } from '../../../api/genre'
import { Table } from '../../../components/Table/Table'
import { RefContent } from '../../../components/Table/TableContent/RefContent/RefContent'
import { Genre } from '../../../types/genre'
import './GenresPage.css'

interface Props {
}

const b = block('genres-page')

export const GenresPage: React.FC<Props> = () => {
  const [genres, setGenres] = useState<Genre.Data[]>([]);

  useEffect(() => {
    apiGenreGetAll()
      .then(response => setGenres(response))
  }, [])
  
  return (
    <div className={b()}>
      <Table 
        headers={['Жанр']}
        content={<RefContent data={genres} />}
      />
    </div>
  )
}
