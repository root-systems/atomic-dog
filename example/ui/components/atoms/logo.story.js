import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './logo'

storiesOf('atoms/Logo', module)
  .add('plain', () => (
    <Logo height={50} width={100} />
  ))
