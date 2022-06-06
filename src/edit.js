import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/editor';

const Edit = (props) => {
  const { attributes, setAttributes } = props
  const blockProps = useBlockProps()

  return (
    <TextControl
      { ...blockProps }
      onChange={(val) => setAttributes({ message: val })}
      value={attributes.message}
    />
  )
}

export default Edit