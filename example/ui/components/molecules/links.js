import React from 'react'

import Link from '../atoms/link'
import Logo from '../atoms/logo'

export default (props) => {
  const { links, logo } = props

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
      <Logo height={logo.height} width={logo.width} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {
          links.map((link) => {
            return <Link name={link.name} />
          })
        }
      </div>
    </div>
  )
}
