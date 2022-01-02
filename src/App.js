import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from "react-player"
import {decode} from 'html-entities';

function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        "nbsp":" ",
        "amp" : "&",
        "quot": "\"",
        "lt"  : "<",
        "gt"  : ">"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

function App() {
  const [loading, setLoading] = useState("....");
  const [items, setItems] = useState([]);

  const getDataFromApi = async () => {
    const host = "https://por8ht9sv9.execute-api.us-east-1.amazonaws.com/api/"
    const response = await fetch(`${host}podcast/the-deep-chat/season/default`);
    const general = await response.json();
    console.log({general})
    setLoading("")
    setItems(general.items)
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
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
        <Row>
          {items.map(function(d, idx){
            var title = decodeEntities(d.title)
            const i = title.indexOf('#')
            if (i > 0) {
              title = title.substring(0,i)
            }
            const url = "https://www.youtube.com/watch?v=" + d.videoId
            const dt = d.publishedAt.substring(0,10)
            return (
                <Col xs="12" sm="6">
                <div className="EpisodeContainer">
                 <h1 key={idx}>{title}</h1>
                 <p><i>{dt}</i></p>
                 <ReactPlayer url={url} />
                </div>
                </Col>
           )
          })}
        </Row>
        <Row>
          <Col xs="12" sm="12">
          {loading}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
