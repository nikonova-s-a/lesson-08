import block from 'bem-cn'
import React from 'react'
import './Input.css'

interface Props {
  type: string;
  placeholder?: string;
  className?: string;
}

const b = block('input')

export const Input: React.FC<Props> = (props) => (
  <input className={b() + ' ' + props.className} 
    type={props.type} 
    placeholder={props.placeholder}
  />
)
