import block from 'bem-cn'
import React, { ChangeEventHandler, useCallback } from 'react'
import { debounce } from 'lodash'
import { Input } from '../../../components/Input/Input'
import { Table } from '../../../components/Table/Table'
import { RefContent } from '../../../components/Table/TableContent/RefContent/RefContent'
import './AuthorsPage.css'
import { useAuthorsGetAll } from '../../../hooks/useAuthorsGetAll'

interface Props {
}

const b = block('authors-page')

export const AuthorsPage: React.FC<Props> = () => {
  const { data, setSearch } = useAuthorsGetAll()

  //const [authors, setAuthors] = useState<Author.Data[]>([]);

  // useEffect(() => {
  //   apiAuthorsGetAll()
  //     .then(response => setAuthors(response))
  // }, [])

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange])

  return (
    <div className={b()}>
      <Input
        className={'search-input'}
        name={'search'}
        placeholder={'Поиск автора'}
        onChange={debounceHandlerChange}
      />
      { data.length > 0
        ? <Table
          headers={['Автор']}
          content={<RefContent data={data} />}
        />
        : <p className={'no-result'}>Ничего не найдено.</p>
      }
    </div>
  )
}
