import block from 'bem-cn'
import React, { ChangeEventHandler, useCallback} from 'react'
import { debounce } from 'lodash'
import { Input } from '../../../components/Input/Input'
import { Table } from '../../../components/Table/Table'
import { RefContent } from '../../../components/Table/TableContent/RefContent/RefContent'
import './PublishersPage.css'
import { usePublisherGetAll } from '../../../hooks/usePublisherGetAll'

interface Props {
}

const b = block('publishers-page')

export const PublishersPage: React.FC<Props> = () => {
  const { data, setSearch } = usePublisherGetAll()

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
    setSearch(event.target.value)
  }, [setSearch])

  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange])

  return (
    <div className={b()}>
      <Input
        className={'search-input'}
        name={'search'}
        placeholder={'Поиск издательства'}
        onChange={debounceHandlerChange}
      />
      { data.length > 0
        ? <Table
          headers={['Издательство']}
          content={<RefContent data={data} />}
        />
        : <p className={'no-result'}>Ничего не найдено.</p>
      }
    </div>
  )
}
