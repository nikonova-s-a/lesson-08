import block from 'bem-cn'
import { useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import * as Yup from 'yup'
import { appActions } from '../../../store/app/actions'
import { AppState } from '../../../store/app/types'
import { RootState } from '../../../store/types'
import { User } from '../../../types/user'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { InputType } from '../../Input/InputType'
import { Form } from '../Form/Form'
import './RegisterForm.css'

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {
}

interface OwnProps {
}

type Props = OwnProps & StateProps & DispatchProps

const b = block('register-form')

const schema: Yup.SchemaOf<User.Create.Param> = Yup.object().shape(({
  login: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required()
}))

const RegisterFormPresenter: React.FC<Props> = ({ loading, errorText, appRegister }) => {
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Param>({
    initialValues: {
      login: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appRegister(fields)
    }
  })

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    submitForm().catch()
  }

  return (
    <Form header="Sign up" className={b()}>
      <Input
        className="field"
        label={'Login'}
        name={'login'}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <Input
        className="field"
        label={'Email'}
        name={'email'}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
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
      <Input
        className="field"
        label={'Confirm Password'}
        name={'passwordConfirm'}
        htmlType={InputType.Password}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={'error'}>{errorText}</p>}
      <Button text={'Sign up'} onClick={handlerSubmit} disabled={loading} className="button" />
    </Form>
  )
}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText
})

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions }

export const RegisterForm = connect(mapStateToProps, mapDispatchToProp)(RegisterFormPresenter)
