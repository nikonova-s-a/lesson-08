import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import { AuthorsPage } from './RefPages/AuthorsPage/AuthorsPage'
import { GenresPage } from './RefPages/GenresPage/GenresPage'
import { LanguagesPage } from './RefPages/LanguagesPage/LanguagesPage'
import { PublishersPage } from './RefPages/PublishersPage/PublishersPage'
import { RefPage } from './RefPages/RefPage'
import { RegisterPage } from './RegisterPage/RegisterPage'

interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page path={'/register'} layout={AuthLayout} component={RegisterPage} />
      <Page secured path={'/catalog'} component={CatalogPage} />
      <Page exact secured path={'/ref'} component={RefPage} />
      <Page secured path={'/ref/authors'} component={AuthorsPage} />
      <Page secured path={'/ref/genres'} component={GenresPage} />
      <Page secured path={'/ref/languages'} component={LanguagesPage} />
      <Page secured path={'/ref/publishers'} component={PublishersPage} />
      <Page secured path={'/about'} component={AboutPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
