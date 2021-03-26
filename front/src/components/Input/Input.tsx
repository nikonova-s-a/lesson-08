import block from 'bem-cn'
import React from 'react'
import './Input.css'

interface Props {
  type: string;
  placeholder?: string;
  className?: string;
}

const b = block('input')

export const Input: React.FC<Props> = ({
  type,
  placeholder = '',
  className = ''
}) => (
  <input className={b() + ' ' + className}
    type={type}
    placeholder={placeholder}
  />
)
