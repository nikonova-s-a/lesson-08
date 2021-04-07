import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { appActions } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { Auth } from '../../../types/auth'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import { Form } from '../Form/Form'
import './AuthForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
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

  return (
    <Form header="Login" className={b()}>
      <Input
        className="field"
        label={'Name'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        className="field"
        label={'Password'}
        name={'password'}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      <div className={b('buttons')}>
        <Button text={'Sign up'} disabled={loading} className={b('button')} />
        <Button text={'Log in'} onClick={handlerSubmit} disabled={loading} className={b('button')} />
      </div>
    </Form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const AuthForm = connect(mapStateToProps, mapDispatchToProp)(AuthFormPresenter)
