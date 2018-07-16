import React from 'react'
import { storiesOf } from '@storybook/react'

import Search from './search'

storiesOf('molecules/search', module)
  .add('plain', () => (
    <Search
      label={'Search the site'}
      title={'Search'}
    />
  ))
