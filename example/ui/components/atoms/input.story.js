import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './input'

storiesOf('atoms/Input', module)
  .add('plain', () => (
    <Input />
  ))
