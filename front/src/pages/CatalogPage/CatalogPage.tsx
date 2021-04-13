import block from 'bem-cn'
import React, { useEffect, useState } from 'react'
import { apiBookGetAll } from '../../api/book'
import { Table } from '../../components/Table/Table'
import { BookContent } from '../../components/Table/TableContent/BookContent/BookContent'
import { Book } from '../../types/book'
import './CatalogPage.css'

interface Props {
}

const b = block('catalog-page')

export const CatalogPage: React.FC<Props> = () => {
  const [books, setBooks] = useState<Book.Data[]>([]);

  useEffect(() => {
    apiBookGetAll()
      .then(response => setBooks(response))
  }, [])
  
  return (
    <div className={b()}>
      <Table 
        headers={['Название', 'Год издания', 'Описание']}
        content={<BookContent books={books} />}
      />
    </div>
  )
}
