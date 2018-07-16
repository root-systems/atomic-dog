import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './button'

storiesOf('atoms/Button', module)
  .add('plain', () => (
    <Button title={'Search'} />
  ))
