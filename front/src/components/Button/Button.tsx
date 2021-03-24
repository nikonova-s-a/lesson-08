import block from 'bem-cn'
import React from 'react'
import './Button.css'

interface Props {
  text: string;
  className?: string;
}

const b = block('button')

export const Button: React.FC<Props> = (props) => (
  <button className={b() + ' ' + props.className}>{props.text}</button>
)
