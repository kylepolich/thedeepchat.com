import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12" sm="12">
            <div className="header">
              <img className="topimage" src="https://s3.amazonaws.com/thedeepchat.com/logo.png" alt="logo" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <div className="left">
              <br/>
              <a href="https://www.youtube.com/channel/UCn-rnnQT5q5nNE1JnsvFXow">
                <img className="youtube" src="https://s3.amazonaws.com/thedeepchat.com/youtube.png" alt="youtube" />
              </a>
            </div>
          </Col>
          <Col xs="12" sm="8">
            <div className="right">
              <br/>
              <p>What is The Deep Chat about?</p>
              <p>Kyle is the Founder and owner of <a href="https://dataskeptic.com">Data Skeptic</a>, a data science consulting company.</p>
              <p>Brad is the Co-Founder and CTO of <a href="https://atlasground.com/">Atlas Space Operations</a>, a satellite communications company.</p>
              <p>First we discuss a Hot Take... our gut reaction to a difficult question. We explore the topic and see if we arrive at a new opinion by the end of the conversation. When we hit a topic we don't know enough about we will bring in experts to see if we can change our <b>Hot Take</b>.</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SWHmeYIq0uM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12">
            <div className="footer  ">
              <p><span className="wt">Welcome to</span> <span className="td">The Deep</span> <span className="tdc">Chat</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
