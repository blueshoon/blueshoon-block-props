import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 export default function Edit( { attributes, setAttributes } ) {
  return (
    <TextControl
      { ...useBlockProps( { className: 'blueshoon-button'} ) }
      onChange={(val) => setAttributes({ message: val })}
      value={attributes.message}
    />
  )
}
