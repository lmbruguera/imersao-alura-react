import styled from "styled-components";
import db from "../db.json";
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizLogo from '../src/components/QuizLogo'
import QuizzBackground from '../src/components/QuizzBackground'
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer= styled.div`

  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
    return (
    <QuizzBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/lmbruguera" />
    </QuizzBackground>
    );
}