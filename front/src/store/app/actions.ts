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

export const appActions: AppState.ActionThunk = {
  appLogin: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const tokenPair = await apiAuthLogin(params)
      dispatch(appFetchSuccess(tokenPair))
      browserHistory.push('/')
    } catch (err) {
      dispatch(appFetchError('Ошибка авторизации.'))
    }
  },

  appRegister: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const userData = await apiUserCreate(params)
      const loginParams = {
        login: params.login,
        password: params.password
      }
      const tokenPair = await apiAuthLogin(loginParams)
      dispatch(appFetchSuccess(tokenPair))
      browserHistory.push('/')
    } catch (err) {
      dispatch(appFetchError('Ошибка регистрации.'))
    }
  }
}
