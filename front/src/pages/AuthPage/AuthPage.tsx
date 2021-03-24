import block from 'bem-cn'
import React from 'react'
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <LoginForm />
    </div>
  )
}
