import block from 'bem-cn'
import React from 'react'
import { RegisterForm } from '../../components/Forms/RegisterForm/RegisterForm'
import './RegisterPage.css'

interface Props {
}

const b = block('register-page')

export const RegisterPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <RegisterForm />
    </div>
  )
}
