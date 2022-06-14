import '@wordpress/editor';
// import PropTypes from 'prop-types';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
 const Button = ( {attributes} ) => {
	return <button { ...useBlockProps.save({ className: 'blueshoon-button'}) }>{ attributes.message }</button>;
}

// Button.propTypes = {
//   attributes: PropTypes.shape({}),
// };

// Button.defaultProps = {
//   attributes: {
// 		message: 'Button'
// 	},
// };

export default Button