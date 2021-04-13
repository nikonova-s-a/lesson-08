import block from 'bem-cn'
import React from 'react'
import './FormError.css'

interface Props{
}

const b = block('error')

export const FormError: React.FC<Props> = ({children}) => {
  return (
    <div className={b()}>
        {children}
    </div>
  )
}
