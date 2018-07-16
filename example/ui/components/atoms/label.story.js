import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './label'

storiesOf('atoms/Label', module)
  .add('plain', () => (
    <Label label={'Search the site'} />
  ))
