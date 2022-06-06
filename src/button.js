import '@wordpress/editor';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useBlockProps } from '@wordpress/block-editor';

const Button = ( props ) => {
	const { attributes, className } = props;
	const blockProps = useBlockProps.save()
	const classes = classnames( 'blueshoon-button', className )
	return <button
		{ ...blockProps }
		className={ classes }
	>{ attributes.message }</button>;
}

Button.propTypes = {
  attributes: PropTypes.shape({}),
};

Button.defaultProps = {
  attributes: {
		message: 'Button'
	},
};

export default Button