import React from 'react';
import styled from 'styled-components';

const StyledInfluencer = styled.div`
	// min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #1e1e1e;
	h1 {
		text-align: center;
		color: white;
		font-weight: normal;
		margin: 6rem 0 3rem 0;
	}
	text-align: center;
`;

const InfluencerContainer = styled.div`
	max-width: 400px;
	margin: 0.625rem;
	img {
		width: 400px;
		max-width: 21vw;
		max-height: 21vw;
		height: 400px;
		object-fit: cover;
	}
`;
const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	// justify-content: space-evenly;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 6rem;
`;

const UpArrow = styled.div`
	// background: #1e1e1e;
	// background: red;
	// width: 2.5rem;
	// height: 1.6rem;
	width: 0;
	height: 0;
	border-left: 1.25rem solid transparent;
	border-right: 1.25rem solid transparent;
	border-bottom: 1.6rem solid #1e1e1e;

	display: inline-block;
	margin: 0 auto;
	margin-top: -1.5rem;
`;

// 임시 const 배열
const photoLink = ['./iu_1.png', './iu_2.png', './iu_3.png', './iu_4.png'];

class Influencer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			influencer_id: 'dlwlrma',
			influencer_name: '아이유',
		};
	}
	render() {
		return (
			<StyledInfluencer>
				<UpArrow align="center" />
				{/* 선택했을 때 나오는 불투명 배경 & 내용 */}
				{/* 여기서부터 본 화면 */}
				<h1>'{this.state.influencer_name}'님의 스타일</h1>
				<ListContainer>
					<InfluencerContainer>
						{/* img src: props / redux로 전달. 임시로 const 배열 */}
						<img src={photoLink[0]} alt="profile_image1" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src={photoLink[1]} alt="profile_image2" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src={photoLink[2]} alt="profile_image3" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src={photoLink[3]} alt="profile_image3" />
					</InfluencerContainer>
				</ListContainer>
			</StyledInfluencer>
		);
	}
}

export default Influencer;
