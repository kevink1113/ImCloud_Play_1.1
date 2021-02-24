import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './components/Button';

export const learnmoreProps = {
	title: PropTypes.string,
	desc: PropTypes.string,
	finish: PropTypes.string,
	changeLog: PropTypes.func,
};

const StyledLearnMore = styled.div`
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fafafc;
	text-align: center;
	p {
		max-width: 20rem;
		margin-bottom: 3rem;
		color: #00000080;
	}
	h1 {
		text-align: center;
		font-weight: normal;
		margin-top: 6rem;
	}
	padding-bottom: 10rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 12rem;
	font-weight: normal;
`;

class LearnMore extends Component {
	render() {
		return (
			<StyledLearnMore>
				<h1>더 알아보기</h1>
				<p>더 재미있는 Play 기능도 이용하고 매달 내 패션 취향에 맞는 옷을 받아보고 싶다면 :</p>
				<ButtonContainer>
					<Button
						link="https://www.instagram.com/dlwlrma/?hl=ko"
						label="공유하기"
						size="large"
						orange="orange"
					/>
					<Button link="/" label="홈으로" size="large" />
					<Button link="/" label="다른 Play 해보기" size="large" />
				</ButtonContainer>
			</StyledLearnMore>
		);
	}
}

export default LearnMore;
