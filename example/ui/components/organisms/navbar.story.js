import React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from './navbar'

storiesOf('organisms/navbar', module)
  .add('plain', () => (
    <Navbar
      links={[
        { name: 'Home' },
        { name: 'About' },
        { name: 'Blog' },
        { name: 'Contact' }
      ]}
      logo={{ height: 50, width: 100 }}
      label={'Search the site'}
      title={'Search'}
    />
  ))
