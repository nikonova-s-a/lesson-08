import block from 'bem-cn'
import React from 'react'
import './Form.css'

interface Props {
  header: string;
  className?: string;
}

const b = block('form')

export const Form: React.FC<Props> = (props) => {
  return (
    <form className={b() + ' ' + props.className}>
      <h2 className={b('header')}>{props.header}</h2>
      <div className={b('items')}>
        { props.children }
      </div>
    </form>
  )
}