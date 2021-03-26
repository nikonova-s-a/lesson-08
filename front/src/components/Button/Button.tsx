import block from 'bem-cn'
import React from 'react'
import './Button.css'

interface Props {
  text: string;
  className?: string;
}

const b = block('button')

export const Button: React.FC<Props> = ({ text, className = '' }) => (
  <button className={b() + ' ' + className}>{text}</button>
)
