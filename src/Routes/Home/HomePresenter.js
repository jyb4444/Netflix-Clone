import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  height: 100%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid red;
  }
`;

const Content = styled.div`
  color: white;
  position: absolute;
  top: 36%;
  left: 40px;
  transform: translateY(-50%);
  width: 550px;
  font-family: "Do Hyeon", sans-serif;
`;

const Title = styled.h1`
  font-size: 48px;
  text-shadow: rgba(255, 255, 255, 0.6) 0px 5px 10px;
  font-family: "Do Hyeon", sans-serif;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-top: 40px;
  font-style: italic;
`;

const Genres = styled.div`
  font-size: 15px;
  color: rgb(108, 117, 125);
  margin-top: 16px;
  margin-bottom: 6px;
`;

const YearRuntimeContainer = styled.div`
  font-size: 15px;
`;

const Year = styled.span`
  font-size: 15px;
  color: rgb(108, 117, 125);
`;

const Runtime = styled.span`
  font-size: 15px;
  color: rgb(108, 117, 125);
`;

const YearRuntimeSpan = styled.span`
  margin: 0 5px;
  color: rgb(108, 117, 125);
`;

const Rating = styled.div`
  font-size: 17px;
  color: white;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const RatingChild = styled.span`
  color: dodgerblue;
  font-size: 17px;
  margin-left: 7px;
`;

const Overview = styled.div`
  font-size: 18px;
  line-height: 1.6;
`;

const HomePresenter = ({ movieDetail, error, loading }) => {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>넷플릭스 - 홈</title>
      </Helmet>

      {movieDetail && (
        <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movieDetail.videos.results[0].key}?autoplay=1&mute=1&controls=0`}
            width="640"
            height="360"
            frameborder="0"
            loop
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
          <Content>
            <Title>{movieDetail.title}</Title>
            <SubTitle>{movieDetail.tagline}</SubTitle>
            <Genres>{movieDetail.genres.map((genre, index) => (movieDetail.genres.length - 1 === index ? genre.name : `${genre.name} • `))}</Genres>
            <YearRuntimeContainer>
              <Year>{movieDetail.release_date.substring(0, 4)}</Year>
              <YearRuntimeSpan>•</YearRuntimeSpan>
              <Runtime>{movieDetail.runtime}분</Runtime>
            </YearRuntimeContainer>
            <Rating>
              관람평
              <RatingChild>{movieDetail.vote_average}</RatingChild>
            </Rating>
            <Overview>{movieDetail.overview.substring(0, 310)}..</Overview>
          </Content>
        </HomeContainer>
      )}

      {/* {nowPlaying && nowPlaying.length > 0 && (
        <Section title="현재 상영중">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
              isMovie={true}
              overview={movie.overview}
            ></Poster>
          ))}
        </Section>
      )} */}

      {error && <Message text={error}></Message>}
    </Container>
  );
};

HomePresenter.propTypes = {
  movieDetail: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
