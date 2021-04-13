import block from 'bem-cn'
import React from 'react'
import { Book } from '../../../../types/book'
import './BookContent.css'


interface Props {
  books: Book.Data[];
  maxDescriptionLength?: number;
}

const b = block('book-content')

export const BookContent: React.FC<Props> = ({
  books,
  maxDescriptionLength = 50
}) => {
  return (
    <tbody className={b()}>
      {
        books.map(book => <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.year}</td>
            {!!book.description && 
              <td>
                { book.description.length < maxDescriptionLength 
                  ? book.description 
                  : book.description.substr(0, maxDescriptionLength) + '...'
                }
              </td>
            }
          </tr>
        )
      }
    </tbody>
  )
}
