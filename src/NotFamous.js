import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from './components/ProfilePhoto';
import Title from './components/Title';

const ImageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 1400px;
	align-items: center;
	align-content: center;
	justify-content: center;
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
`;

const PhotoContainer = styled.div`
	padding: 10px;
`;

class NotFamous extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PhotoData: [
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'heejoon_1113' },
				{ src: './people.png', influencer_id: 'hello' },
				{ src: './people.png', influencer_id: 'ssadam' },
				{ src: './people.png', influencer_id: 'helloworld' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
				{ src: './people.png', influencer_id: 'sangwon_1113' },
			],
		};
	}

	render() {
		return (
			<StyledInfluencer>
				<Title title={'이런 사람들도 있어요'} />
				<ImageContainer>
					{this.state.PhotoData.map((contact, i) => {
						return (
							<PhotoContainer>
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
