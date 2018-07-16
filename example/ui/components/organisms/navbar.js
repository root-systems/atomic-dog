import React from 'react'

import Links from '../molecules/links'
import Search from '../molecules/search'

export default (props) => {
  const { links, logo, label, title } = props

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Links
        links={links}
        logo={logo}
      />
      <Search
        label={label}
        title={title}
      />
    </div>
  )
}
