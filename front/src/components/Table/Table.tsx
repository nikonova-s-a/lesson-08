import block from 'bem-cn'
import React from 'react'
import './Table.css'
import { TableHeader } from './TableHeader/TableHeader'

interface Props {
  headers: string[];
  content: React.ReactNode
}

const b = block('table')

export const Table: React.FC<Props> = ({
  headers,
  content
}) => {

  return (
    <table className={b()}>
      <TableHeader headers={headers} />
      { content }
    </table>
  )
}
