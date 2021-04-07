import block from 'bem-cn'
import React, { ReactNode } from 'react'
import { BaseComponentProps } from '../../../types/base'
import './Form.css'

interface Props extends BaseComponentProps {
  header?: string;
  children: ReactNode;
}

const b = block('form')

export const Form: React.FC<Props> = ({ header = '', className = '', children }) => {
  return (
    <form className={b({}).mix(className)}>
      {!!header && <h2 className={b('header')}>{header}</h2>}
      <div className={b('items')}>
        {children}
      </div>
    </form>
  )
}