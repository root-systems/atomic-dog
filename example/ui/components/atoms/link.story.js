import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from './link'

storiesOf('atoms/Link', module)
  .add('plain', () => (
    <Link name={'Home'} />
  ))
