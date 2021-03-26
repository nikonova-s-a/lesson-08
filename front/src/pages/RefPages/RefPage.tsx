import block from 'bem-cn'
import React from 'react'
import './RefPage.css'

interface Props {
}

const b = block('ref-page')

export const RefPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Справочники
    </div>
  )
}
