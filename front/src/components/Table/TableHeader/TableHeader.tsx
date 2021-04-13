import block from 'bem-cn'
import React from 'react'
import './TableHeader.css'

interface Props {
  headers: string[]
}

const b = block('table-header')

export const TableHeader: React.FC<Props> = ({headers}) => {

  return (
    <thead className={b()}>
      <tr>
        {headers.map(header => <th>{header}</th>)}
      </tr>
    </thead>
  )
}
