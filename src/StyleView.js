import React, { Component } from 'react';
import styled from 'styled-components';
import ProfilePhoto from './components/ProfilePhoto';
import { AiOutlineInstagram } from 'react-icons/ai';

const StyledView = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const StyleBackground = styled.div`
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
	background-image: linear-gradient(to top, white, rgba(255, 255, 255, 0)),
		url('./title_background.png');
	width: 100vw;
	height: 100vh;

	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-o-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Description = styled.div`
	font-weight: 400;
	color: #00000080;
	max-width: 32rem;
	font-weight: 300;
	margin-bottom: 3rem;
`;

const ViewContainer = styled.div`
	width: 85%;
	height: 20%;
	height: 35rem;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	align-items: stretch;
`;

const ViewText = styled.div`
	min-width: 34rem;
	background: white;
	padding-left: 6rem;
	padding-top: 4rem;
	width: 100%;
	.name {
		font-size: 1.6rem;
		font-weight: 400;
	}
	.style {
		color: #ff4500;
		font-weight: 300;
	}

	animation: filling 1s ease-out forwards;
	@keyframes filling {
		from {
			fill: black;
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			fill: black;
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const Title = styled.p`
	font-size: 2rem;
	font-weight: 900;
	margin: 0;
	margin-bottom: 3rem;
`;

const Follow = styled.div`
	display: flex;
	align-items: center;
	span {
		padding-left: 1rem;
		color: #00000080;
		font-weight: 300;
	}

	a {
		text-decoration: none;
	}
`;
const Insta = styled(AiOutlineInstagram)`
	color: white;
	padding: 0.22rem;
	background: #00000099;
	border-radius: 100%;
`;

const StyledPhoto = styled.div`
	position: relative;
	z-index: 100;
	animation: moving 1s ease-out forwards;
	@keyframes moving {
		from {
			left: 320px;
			top: 100px;
			fill: black;
			opacity: 0;
		}
		to {
			left: 0px;
			top: 0px;
			fill: black;
			opacity: 1;
		}
	}
`;

const url = 'https://www.instagram.com/';

class StyleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			influencer_id: 'dlwlrma',
			influencer_name: '아이유',
			style_name: 'Urban Style',
			quote:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec acleo neque. Pellentesque sed',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec leo neque. Pellentesque sed est mattis.',
		};
	}
	render() {
		return (
			<StyledView>
				<StyleBackground />

				<ViewContainer>
					<StyledPhoto>
						<ProfilePhoto
							src="./iu_profile.jpg"
							influencer_id={this.state.influencer_id}
							size="large"
						/>
					</StyledPhoto>
					<ViewText>
						<Title>당신의 패션 스타일 유형은?</Title>
						<p className="name">{this.state.influencer_name}</p>
						<p className="style">{this.state.style_name}</p>
						<Description>
							<p>&quot;{this.state.quote}&quot;</p>
							<p>{this.state.description}</p>
						</Description>
						<Follow>
							<Insta />
							<a href={url + this.state.influencer_id} target="blank">
								<span>Follow {this.state.influencer_id}</span>
							</a>
						</Follow>
					</ViewText>
				</ViewContainer>
			</StyledView>
		);
	}
}

export default StyleView;
