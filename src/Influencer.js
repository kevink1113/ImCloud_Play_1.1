import React from 'react';
import styled from 'styled-components';

const StyledInfluencer = styled.div`
	min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
`;

const InfluencerContainer = styled.div`
	max-width: 300px;
	margin: 1rem;
	img {
		width: 300px;
	}
`;
const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

class Influencer extends React.Component {
	render() {
		return (
			<StyledInfluencer>
				{/* 선택했을 때 나오는 불투명 배경 & 내용 */}
				{/* 여기서부터 본 화면 */}
				<ListContainer>
					<InfluencerContainer>
						<img src="./people.png" alt="profile_image1" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src="./people.png" alt="profile_image2" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src="./people.png" alt="profile_image3" />
					</InfluencerContainer>
					<InfluencerContainer>
						<img src="./people.png" alt="profile_image3" />
					</InfluencerContainer>
				</ListContainer>
			</StyledInfluencer>
		);
	}
}

export default Influencer;
