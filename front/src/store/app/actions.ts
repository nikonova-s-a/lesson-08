import { apiAuthLogin } from '../../api/auth'
import { apiUserCreate } from '../../api/user'
import { browserHistory } from '../../browserHistory'
import { App } from '../../types/app'
import { AppAction } from './appAction'
import { AppState } from './types'

const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch
})

const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload
})

const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload
})

export const appLogin: AppState.ActionThunk.AppLogin = params => async (dispatch) => {
  dispatch(appFetch());

  try {
    const tokenPair = await apiAuthLogin(params);
    dispatch(appFetchSuccess(tokenPair));
    browserHistory.push('/')
  } catch (err) {
    dispatch(appFetchError('Ошибка авторизации.'));
  }
};

export const appRegister: AppState.ActionThunk.AppRegister = params => async (dispatch) => {
  dispatch(appFetch())

  try {
    await apiUserCreate(params)
    appLogin({
      login: params.login,
      password: params.password
    })
  } catch (err) {
    dispatch(appFetchError('Ошибка регистрации.'))
  }
}