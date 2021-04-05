import block from 'bem-cn'
import React from 'react'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { Form } from '../Form/Form'
import './LoginForm.css'

interface Props {
}

const b = block('login-form')

export const LoginForm: React.FC<Props> = (props) => {
  return (
    <Form className={b()} header="Log in">
      <Input className={b('item')} type="email" placeholder="Email" />
      <Input className={b('item')} type="password" placeholder="Password" />
      <Button className={b('item')} text="Войти" />
    </Form>
  )
}