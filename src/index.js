import { registerBlockType } from '@wordpress/blocks';

import './editor.scss'
import './style.scss'

import Edit from './edit'
import Button from './button'

registerBlockType(
  'blueshoon/blueshoon-block-props',
  {
    apiVersion: 2,
    example: {
      attributes: {
        message: 'Button'
      }
    },
    edit: Edit,
    save: Button
  }
)