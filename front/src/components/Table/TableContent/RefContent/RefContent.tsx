import block from 'bem-cn'
import React from 'react'
import './RefContent.css'

interface UniversalEntity {
  id: number;
  name: string;
}

interface Props<T extends UniversalEntity> {
  data: T[]
}

const b = block('ref-content')

export class RefContent<T extends UniversalEntity> extends React.Component<Props<T>> {

  render() {
    const { data } = this.props
    return <tbody className={b()}>
      { data.map(item => <tr key={item.id}><td>{item.name}</td></tr>) }
    </tbody >

  }
}
