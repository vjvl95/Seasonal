import BlackBox from 'component/common/BlackBox';
import styled, { css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import selectBackGround from 'util/selectBackground';
import { useState, useEffect } from 'react';
import HomeButton from '../img/HomeButton.png';
import SNSButton from '../img/shareButton.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton } from 'react-share';
import { useScript } from 'util/useScript';
import kakaoLogo from '../img/kakaoLogo.svg';
import findSlot from 'util/findSlot';
export default function Result() {
  const location = useLocation();
  const { state } = location;
  const slot = !state && findSlot(location.pathname);
  const backGroundIMG = selectBackGround(state?.slot[3] || slot[3]);
  const [isClicked, setIsClicked] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const currentUrl = window.location.href;

  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('3b28357e5d69d8e432dae58a61976113');
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: '새해첫곡', // 인자값으로 받은 title
        description: '설명', // 인자값으로 받은 title
        imageUrl: '이미지 url',
        link: {
          mobileWebUrl: currentUrl, // 인자값으로 받은 route(uri 형태)
          webUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: 'title',
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <Background back={backGroundIMG[0]}>
        <BlackBox isFlex={false} paddingTop={'25px'}>
          <>새해 첫 곡을 찾아줄 럭키 슬롯</>
        </BlackBox>
        <AlbumBox isClicked={isClicked}>
          <Front>
            <Title>{state?.slot[6] || slot[6]}</Title>
            <Singer>{state?.slot[7] || slot[7]}</Singer>
            <Album src={state?.slot[8] || slot[8]}></Album>
            <Lyrics color={backGroundIMG[1]}>{state?.slot[5] || slot[5]}</Lyrics>
          </Front>
          <Back>
            <BackIMG src={state?.slot[9] || slot[9]} width={'100%'}></BackIMG>
          </Back>
        </AlbumBox>
        <StartButton onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? '카드 뒤집어서 노래 보기' : '카드 뒤집어서 짤 보기'}
        </StartButton>
        <Box>
          <InnerBox>
            <img onClick={() => setIsOpenModel(!isOpenModel)} src={SNSButton} width='48px' alt='' />
            <span style={{ marginTop: '5px' }}>SNS 공유</span>
          </InnerBox>
          <NavLink
            style={{ display: 'block', color: '#00c981', textDecorationLine: 'none' }}
            to={'/'}
          >
            <InnerBox>
              <img src={HomeButton} width='48px' alt='' />
              <span style={{ marginTop: '5px' }}>다시 하기</span>
            </InnerBox>
          </NavLink>
        </Box>
        {isOpenModel && (
          <Model>
            <SnsBox>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton url={currentUrl}>
                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
              </TwitterShareButton>
              <CopyToClipboard text={currentUrl}>
                <URLShareButton>URL</URLShareButton>
              </CopyToClipboard>
              <KakaoShareButton onClick={() => handleKakaoButton()}>
                <KakaoIcon src={kakaoLogo}></KakaoIcon>
              </KakaoShareButton>
            </SnsBox>
          </Model>
        )}
      </Background>
    </>
  );
}

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: #7362ff;
`;
const SnsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00c981;
`;
const Model = styled.div`
  padding-top: 10px;
  background-color: #d1fceb;
  width: 300px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Box = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 5%;
  margin-bottom: 10px;
`;
const BackIMG = styled.img`
  margin-top: 70px;
  max-height: 150px;
  @media screen and (min-width: 801px) {
    width: 100%;
    max-height: none;
  }
`;
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
const Back = styled.div`
  position: relative;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const Lyrics = styled.div`
  margin-top: 30px;
  font-weight: 700;
  font-size: 13.39px;
  padding: 0px 20px;
  line-height: 20px;
  color: ${(props) => props.color};
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 15.62px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
const Album = styled.img`
  width: 111px;
  margin: 0px auto;
  border-radius: 13px;
  @media screen and (min-width: 801px) {
    width: 200px;
    height: 200px;
  }
`;
const Singer = styled.div`
  font-weight: 800;
  font-size: 13.39px;
  color: gray;
  margin-bottom: 30px;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  min-height: 812px;
  background-image: ${(props) => `url(${props.back})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
const AlbumBox = styled.div`
  width: 233px;
  height: 356px;
  background-color: white;
  margin: 30px auto;
  border-radius: 25px;
  text-align: center;
  padding-top: 20px;
  align-items: center;
  perspective: 1100px;
  box-shadow: 2px 4px 10px rgba(75, 81, 88, 0.25);
  position: relative;
  transition: 3s;
  transform-style: preserve-3d;

  @media screen and (min-width: 801px) {
    width: 60%;
    height: 60%;
    padding-top: 0px;
  }
  ${(props) =>
    props.isClicked &&
    css`
      transform: rotateY(-180deg);
    `};
`;
const StartButton = styled.button`
  width: 184px;
  height: 64px;
  font-size: 14px;
  display: block;
  background: #00c981;
  border-radius: 100px;
  text-align: center;
  line-height: 55px;
  color: white;
  margin: 0 auto;
  font-weight: 700;
  border: none;

  &:disabled {
    background: gray;
    border: 3px solid;
  }
`;
