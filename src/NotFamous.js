import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from './components/ProfilePhoto';

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin-bottom: 6rem;
`;

const StyledInfluencer = styled.div`
	min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	background-color: white;
	h1 {
		text-align: center;
		font-weight: normal;
		margin: 6rem 0 3rem 0;
	}
`;

const PhotoContainer = styled.div`
	padding: 10px;
`;

class NotFamous extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// 임시로 PhotoData 배열로 선언.
			PhotoData: [
				{
					src: 'https://cdn.speconomy.com/news/photo/201908/20190825_1_bodyimg_215944.jpg',
					influencer_id: 'sangwon_1113',
				},
				{
					src:
						'http://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2020/06/20/zb2gF2BDhGl6637282545945774481.jpg',
					influencer_id: 'sangwon_1113',
				},
				{
					src: 'https://i.pinimg.com/originals/25/cd/bf/25cdbfb4c026ab04e3754ae707a4c7eb.jpg',
					influencer_id: 'hello',
				},
				{
					src:
						'https://images.chosun.com/resizer/dioR9r-fZxaWKZibzGM5ns6_-AI=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IYPAMIS6KLDFENFLK4QN4NZBR4.jpg',
					influencer_id: 'heejoon_1113',
				},
				{
					src: 'http://www.sisaweek.com/news/photo/201801/101902_82854_3639.jpg',
					influencer_id: 'ssadam',
				},
				{
					src:
						'https://lh3.googleusercontent.com/proxy/NSfbPDfXIEOv2mFFgdqGRuZc1uKSFi2lui6FYQ1KB9hmPy5GpI2UdZugWuKGzxpnFhQjO-nuri4Pg-SmJjfzadt1vOVaYi0pLfRc-XYfQOfJdXnR1W9d-NVOWcg',
					influencer_id: 'helloworld',
				},
				{
					src: 'https://www.futurekorea.co.kr/news/photo/202006/135796_139048_1313.jpg',
					influencer_id: 'sangwon_1113',
				},
				{
					src:
						'https://lh3.googleusercontent.com/proxy/Yzu3gcGFPyNfw_5sSOFqQNbGz7GRqx5RirXe2ePmTSQRXRJ979sdpvKz_rVuAXRqN4BFABWEwtbq9VulKxq0jcWJiBt2T-NKuERTOE-sP_V7D4ek1lz_AKkH-0n9Sb6n9dUEmDA',
					influencer_id: 'sangwon_1113',
				},
				{
					src: 'https://images.christiantoday.co.kr/data/images/full/284077/image.jpg?w=654',
					influencer_id: 'sangwon_1113',
				},
				{ src: './people.png', influencer_id: 'sangwon_1113' },
			],
		};
	}

	render() {
		return (
			<StyledInfluencer>
				<h1>이런 사람들도 있어요~</h1>
				<ImageContainer>
					{this.state.PhotoData.map((contact, i) => {
						return (
							<PhotoContainer alt={contact.influencer_id}>
								<ProfilePhoto
									src={contact.src}
									influencer_id={contact.influencer_id}
									key={i}
									size="small"
								/>
							</PhotoContainer>
						);
					})}
				</ImageContainer>
			</StyledInfluencer>
		);
	}
}

export default NotFamous;
