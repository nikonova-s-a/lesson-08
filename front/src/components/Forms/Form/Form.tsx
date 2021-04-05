import block from 'bem-cn'
import React from 'react'
import './Form.css'

interface Props {
  header: string;
  className?: string;
}

const b = block('form')

export const Form: React.FC<Props> = ({ header, className = '', children }) => {
  return (
    <form className={b() + ' ' + className}>
      <h2 className={b('header')}>{header}</h2>
      <div className={b('items')}>
        {children}
      </div>
    </form>
  )
}