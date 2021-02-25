import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //React-Router import
import PropTypes from 'prop-types';
import { darken } from 'polished';
import validator from 'validator';

export const sizes = ['small', 'medium', 'large'];

export const buttonProps = {
	link: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	size: PropTypes.oneOf(sizes),
	orange: PropTypes.string,
	disabled: PropTypes.bool,
};

const ButtonStyle = styled.button`
	outline: none;
	cursor: pointer;
	display: inline-block;
	background-color: rgb(100, 100, 100);
	border: none;
	line-height: 1;
	color: white;
	transition: color 0.2s, background-color 0.2s;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	&.small {
		padding: 0.25rem 0.5rem;
		font-size: 0.8rem;
	}
	&,
	&.medium {
		padding: 0.6rem 1rem;
		font-size: 0.9rem;
		width: 12.5rem;
	}
	&.large {
		padding: 0.8rem 1.5rem;
		font-size: 1.2rem;
	}

	&:hover {
		background-color: ${darken(0.1, 'rgb(100, 100, 100)')};
	}
	&#orange {
		background-color: #ff4500;
		&:hover {
			background-color: ${darken(0.1, '#ff4500')};
		}
	}
`;

const Button = ({ link, label, size, orange }) => {
	return validator.isURL(link) ? (
		<a href={link} target="blank">
			<ButtonStyle className={size} id={orange}>
				{label}
			</ButtonStyle>
		</a>
	) : (
		<Link to={link}>
			<ButtonStyle className={size} id={orange}>
				{label}
			</ButtonStyle>
		</Link>
	);
};

export default Button;

Button.propTypes = buttonProps;
/*
Button.defaultProps = {
  color: "gray",
};
*/
