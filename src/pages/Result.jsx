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
import songDirection from '../img/songDirection.png';
import trackingPage from '../util/trackingPage';

const { REACT_APP_KAKAO_KEY } = process.env;
export default function Result() {
  const location = useLocation();
  const { state } = location;
  const slot = !state && findSlot(location);
  const backGroundIMG = selectBackGround(state?.slot[3] || slot[1][3]);
  const [isClicked, setIsClicked] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const currentUrl = window.location.href;

  const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  useEffect(() => {
    if (status === 'ready' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(REACT_APP_KAKAO_KEY);
      }
    }
  }, [status]);
  useEffect(() => {
    trackingPage();
  }, []);
  const handleKakaoButton = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: '2023년 당신의 새해첫곡은?', // 인자값으로 받은 title
        description: '#새해첫곡', // 인자값으로 받은 title
        imageUrl: 'https://drive.google.com/uc?id=1a2aLNsEpI9l4-Io_wdX05Ws1lNr3bFV1',
        link: {
          mobileWebUrl: 'https://newyearsong2023.netlify.app', // 인자값으로 받은 route(uri 형태)
          webUrl: 'https://newyearsong2023.netlify.app/',
        },
      },
      buttons: [
        {
          title: '첫페이지로',
          link: {
            mobileWebUrl: 'https://newyearsong2023.netlify.app', // 인자값으로 받은 route(uri 형태)
            webUrl: 'https://newyearsong2023.netlify.app/',
          },
        },
        {
          title: '결과페이지로',
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
        {isClicked ? (
          <>
            <BlackBox isFlex={false} paddingTop={'15px'} widthSize='40%'>
              <span style={{ fontWeight: '700', fontSize: '16px' }}>{state?.name || slot[0]}</span>
              의
              <br />
              <span style={{ fontWeight: '500', fontSize: '16px', fontFamily: 'DOSGothic' }}>
                2023년 {state?.category || slot[2]} 포토카드
              </span>
            </BlackBox>
          </>
        ) : (
          <>
            <BlackBox isFlex={false} paddingTop={'15px'} widthSize='40%'>
              <span style={{ fontWeight: '700', fontSize: '16px' }}>{state?.name || slot[0]}</span>
              의
              <br />
              <span style={{ fontWeight: '500', fontSize: '16px', fontFamily: 'DOSGothic' }}>
                2023년 새해 첫 곡
              </span>
            </BlackBox>
          </>
        )}

        <AlbumBox isClicked={isClicked}>
          <Front>
            <Title>{state?.slot[6] || slot[1][6]}</Title>
            <Singer>{state?.slot[7] || slot[1][7]}</Singer>
            <a href={state?.slot[10] || slot[1][10]} rel='noreferrer' target='_blank'>
              <Album src={state?.slot[8] || slot[1][8]}></Album>
            </a>
            <SongLink>
              <img
                src={songDirection}
                style={{
                  textAlign: 'center',
                  display: 'block',
                  width: '10.42px',
                  hegiht: '5px',
                  marginBottom: '5px',
                  marginTop: '5px',
                }}
                alt=''
              />
              <span style={{ fontSize: '8.93px' }}>어떤 노래일까? 들어보러가기</span>
            </SongLink>
            <Lyrics color={backGroundIMG[1]}>{state?.slot[5] || slot[1][5]}</Lyrics>
          </Front>
          <Back>
            <BackIMG src={state?.slot[9] || slot[1][9]}></BackIMG>
          </Back>
        </AlbumBox>
        <StartButton onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? '카드 뒤집어서 노래 보기' : '카드 뒤집어서 짤 보기'}
        </StartButton>
        {isClicked && (
          <Box>
            <InnerBox>
              <img
                onClick={() => setIsOpenModel(!isOpenModel)}
                src={SNSButton}
                width='48px'
                alt=''
              />
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
        )}

        {isOpenModel && isClicked && (
          <Model>
            <SnsBox>
              <FacebookShareButton url={currentUrl}>
                <FacebookIcon size={40} round={true} borderRadius={24}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton url={currentUrl}>
                <TwitterIcon size={40} round={true} borderRadius={24}></TwitterIcon>
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
const SongLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const KakaoIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 24px;
`;

const URLShareButton = styled.button`
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 24px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  background-color: #7362ff;
`;
const SnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  position: relative;
  bottom: 150px;
  left: -130px;
  padding-top: 10px;
  background-color: #d1fceb;
  border-radius: 50px;
  padding: 10px 15px;
  @media screen and (min-width: 801px) {
    position: inherit;
    display: flex;
    padding: 15px;
    flex-direction: row;
  }
`;
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #00c981;
`;
const Model = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Box = styled.div`
  display: flex;

  gap: 30px;
  margin-top: 3%;
  margin-bottom: 10px;
`;
const BackIMG = styled.img`
  max-height: 293px;
  width: 100%;
  @media screen and (min-width: 801px) {
    object-fit: cover;
    padding-top: 20px;
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
  @media screen and (min-width: 801px) {
    max-height: 550px;
  }
`;
const Lyrics = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 13.39px;
  padding: 0px 20px;
  line-height: 22.32px;
  color: #00c981;
`;
const Title = styled.div`
  font-weight: 900;
  font-size: 15.62px;
  margin-bottom: 15px;
  margin-top: 10px;
`;
const Album = styled.img`
  width: 115px;
  height: 115px;
  margin: 0px auto;
  border-radius: 13px;
  @media screen and (min-width: 801px) {
    width: 50%;
    height: 50%;
  }
`;
const Singer = styled.div`
  font-weight: 800;
  font-size: 13.39px;
  color: gray;
  margin-bottom: 20px;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25%;
  background-image: ${(props) => `url(${props.back})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 815px;

  @media screen and (min-width: 801px) {
    padding-top: 5%;
  }
`;
const AlbumBox = styled.div`
  width: 217px;
  height: 337px;
  min-height: 337px;
  background-color: white;
  margin: 30px auto;
  border-radius: 25px;
  text-align: center;
  padding-top: 20px;
  align-items: center;
  perspective: 1100px;
  border: 1px solid #8fdfb7;
  margin-top: 6rem;
  box-shadow: 2px 4px 10px rgba(75, 81, 88, 0.25);
  position: relative;
  transition: 3s;
  transform-style: preserve-3d;

  @media screen and (min-width: 801px) {
    width: 30%;
    height: 50%;
    min-width: 350px;
    max-width: 400px;
    max-height: 550px;
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
  min-height: 64px;
  font-size: 14px;
  font-family: 'happinessSans';
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
