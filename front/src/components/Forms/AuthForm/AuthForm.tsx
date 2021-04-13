import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { browserHistory } from '../../../browserHistory'
import { appLogin } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { Auth } from '../../../types/auth'
import { Button } from '../../Button/Button'
import { FormError } from '../../FormError/FormError'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import { Form } from '../Form/Form'
import './AuthForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps  {
  appLogin: AppState.ActionThunk.AppLogin;
}

interface OwnProps {
}

type Props = OwnProps & StateProps & DispatchProps

const b = block('auth-form')

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape(({
  login: Yup.string().required(),
  password: Yup.string().required()
}))

const AuthFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Login.Params>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  const onRegisterButtonClick = () => {
    browserHistory.push('/register')
  }

  return (
    <Form header="Login" className={b()}>
      <Input
        className={b('field')}
        label={'Name'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        className={b('field')}
        label={'Password'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
      {!!errorText && <FormError>{errorText}</FormError>}
      <div className={b('buttons')}>
        <Button 
          text={'Sign up'} 
          disabled={loading} 
          className={b('button')} 
          onClick={onRegisterButtonClick}
        />
        <Button 
          text={'Log in'} 
          onClick={handlerSubmit} 
          disabled={loading} 
          className={b('button')} 
        />
      </div>
    </Form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { appLogin }

export const AuthForm = connect(mapStateToProps, mapDispatchToProp)(AuthFormPresenter)
