import block from 'bem-cn'
import React, { useEffect, useState } from 'react'
import { apiLanguageGetAll } from '../../../api/language'
import { Table } from '../../../components/Table/Table'
import { RefContent } from '../../../components/Table/TableContent/RefContent/RefContent'
import { Language } from '../../../types/language'
import './LanguagesPage.css'

interface Props {
}

const b = block('languages-page')

export const LanguagesPage: React.FC<Props> = () => {
  const [languages, setLanguages] = useState<Language.Data[]>([]);

  useEffect(() => {
    apiLanguageGetAll()
      .then(response => setLanguages(response))
  }, [])

  return (
    <div className={b()}>
      <Table 
        headers={['Язык']}
        content={<RefContent data={languages} />}
      />
    </div>
  )
}
