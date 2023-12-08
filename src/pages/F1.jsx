import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";
import CardComponent from "./CardComponent";
import Carousel from "./Carousel";
import BigCards from "./BigCards";

let uniqueId = 0;

function F1() {
  const [data, setData] = useState({});

  function getUniqueUrls(imageUrls) {
    return imageUrls.map((url) => `${url}?unique=${uniqueId++}`);
  }
  function getUniqueDescriptions(descriptions) {
    return descriptions.map((description) => description);
  }

  const imageUrls = getUniqueUrls([
    "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/11/28/ecb47780-69e2-42c3-bf66-d8a8fe8a22f2/f1_action_canadian_f1_grand_prix_2018",
    "https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2019/Monaco/Sunday/1017527538-LAT-20190526-SNE19209.jpg",
    "https://formularapida.net/wp-content/uploads/2020/09/M242096.jpg",
    "https://www.thedrive.com/content/2021/12/Lewis-Hamilton-Max-Verstappen-Abu-Dhabi-Grand-Prix-2021.jpg?quality=85",
    "https://www.goodwood.com/globalassets/.road--racing/race/modern/2022/3-march/f1-2022-calendar/2022-f1-calendar-drivers-championship-standings-zak-mauger-mi-21032022.jpg?crop=(0,135,2600,1598)&width=1600",
    "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F01%2F31162230%2Fabu-dhabi-2022-grid-planetf1.jpg",
  ]);

  const descriptions = getUniqueDescriptions([
    `In 2018, Lewis Hamilton secured his fifth World Championship in another Mercedes-dominated season, facing a strong challenge from Ferrari's Sebastian Vettel. The year was marked by strategic battles and Hamilton's consistent performance, with Red Bull also showing flashes of brilliance.`,
    `The 2019 season was again dominated by Lewis Hamilton, who clinched his sixth World Championship. Mercedes' superiority was evident, though Ferrari and Red Bull provided stiff competition at various stages. The season also saw the rise of young talents like Charles Leclerc and Max Verstappen.`,
    `The 2020 Formula 1 season, affected by the COVID-19 pandemic, was dominated by Lewis Hamilton, who equaled Michael Schumacher's record of seven World Championships. The season featured a revised calendar and saw Pierre Gasly's surprise win at Monza and the emergence of McLaren as a competitive force.`,
    `The 2021 season was one of the most dramatic, culminating in a controversial finale where Max Verstappen claimed his first World Championship, narrowly defeating Lewis Hamilton. The season was a close battle between Mercedes and Red Bull, featuring intense on-track rivalries and strategic duels.`,
    `In 2022, Max Verstappen continued his strong form, securing his second World Championship. Red Bull Racing showed dominance throughout the season, with Ferrari and Mercedes trailing but providing consistent challenges. The season was marked by technical regulation changes and competitive midfield battles.`,
    `The 2023 Formula 1 season, as of my last update, was underway with fierce competition. Early races indicated a tight contest between Red Bull, Ferrari, and Mercedes. New talents and seasoned veterans were battling closely, with the championship looking to be one of the most competitive in recent years.`,
  ]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/seasons.json?limit=6&offset=68").then(
      (response) =>
        response.json().then((data) => {
          console.log(data);
          setData(data);
        })
    );
  }, []);

  function chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("2018");

  const [previousPosts, setPreviousPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/F1")
      .then((res) => res.json())
      .then((data) => {
        setPreviousPosts(data);
      });
  }, []);

  const showPosts = previousPosts.map((post) => {
    return (
      <div key={post.id} className="previousPosts">
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
        <h5>{post.username}</h5>
        <h5>{post.season}</h5>
        <h3>{post.post}</h3>
      </div>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      username: nameInput,
      season: selectedSeason,
      post: commentInput,
    };

    fetch("http://localhost:3000/f1", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: nameInput,
        season: selectedSeason,
        post: commentInput,
      }),
    });

    setPreviousPosts([...previousPosts, newPost]);
    setNameInput("");
    setCommentInput("");
  }

  return (
    <div>
      <Nav />

      <Carousel
        image1={
          "https://motorsportmagazine.b-cdn.net/wp-content/uploads/2021/05/F1-car-cost-lead-McLaren-2021.jpg"
        }
        image2={
          " https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeElfAh0w6ygTmWbvyNtfWP5_2COq4meqCizahnj-yOHrTZOjPk80pxQurw0eSj06yf0K9A81AuIKweU6g29_sjgdHb43R7B8n0G.jpg?r=c2c"
        }
        image3={
          "https://www.freightwaves.com/wp-content/uploads/2022/03/F1-Red-Bull_6.jpg"
        }
        image4={
          "https://media.cnn.com/api/v1/images/stellar/prod/200708140500-fernando-alonso-celebrates.jpg?q=w_3000,h_2239,x_0,y_0,c_fill"
        }
        
      />
      {data.MRData &&
        chunkArray(data.MRData.SeasonTable.Seasons, 3).map(
          (seasonsChunk, chunkIndex) => (
            <div key={chunkIndex} className="row">
              {seasonsChunk.map((season, cardIndex) => {
                const index = chunkIndex * 3 + cardIndex;
                return (
                  <div className="col-sm-4">
                    <CardComponent
                      name={"Formula One"}
                      season={season}
                      key={season.season}
                      imageUrls={imageUrls[index]}
                      description={descriptions[index]}
                    />
                  </div>
                );
              })}
            </div>
          )
        )}

      <BigCards
        title={"Max Verstappen is Too Good."}
        link={'https://www.wsj.com/articles/max-verstappen-is-too-good-formula-one-f1645705'}
        article={`  Formula One driver Max Verstappen is having one of the most
                dominant seasons ever by any athlete in any sport. And it's
                boring. The Dutch driver has won 17 of the 20 races run so far
                this season, has clinched the championship, and will soon move
                into third place on F1's all-time-wins leader board. The records
                he has achieved on the way to a third title speak for
                themselves. Nineteen wins from 22 races, 21 podium places, a
                10-race consecutive win streak and becoming the first driver to
                lead for over 1,000 laps in a season. Yet they do not tell the
                whole story. In amassing them Verstappen demonstrated what a
                complete driver he is. The car was exceptional, but Verstappen
                has exploited it with consummate mastery and consistency. A
                glance at his teammate Sergio Pérez’s performance in the same
                machinery demonstrates how the 26-year old was operating on a
                different plane. There were superb drives, coming back from 15th`}
      />
      <BigCards
        title={"Lewis Hamilton is the GOAT."}
        article={`Lewis Hamilton, often hailed as the Greatest Of All Time (GOAT) in Formula 1, has redefined the pinnacle of motorsport with his extraordinary achievements and relentless pursuit of excellence. His record-equalling seven World Championships, a feat he shares with the legendary Michael Schumacher, is just the tip of the iceberg. Hamilton's career is marked by a consistent shattering of records, including the most pole positions, a testament to his exceptional qualifying speed and skill. His success transcends mere statistics; it's rooted in his ability to combine raw speed, strategic acumen, and a deep understanding of his machinery, making him a formidable competitor in every race.`}
      />
      <div className="commentInputSection">
        <h2 className="shareThoughts">Share thoughts on recent F1 seasons!</h2>
        <form className="postForm" onSubmit={handleSubmit}>
          <h5 className="newPost">Enter your desired display name: </h5>
          <input
            className="nameInput"
            type="text"
            value={nameInput}
            placeholder="Your Display Name"
            onChange={(e) => setNameInput(e.target.value)}
          ></input>
          <h5 className="newPost">Select the season you want to post about!</h5>
          <select
            className="selectSeason"
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
          <h5 className="newPost">Share your thoughts with our community!</h5>
          <input
            type="text"
            class="commentInput"
            value={commentInput}
            placeholder="Give us your thoughts"
            onChange={(e) => setCommentInput(e.target.value)}
          ></input>
          <button class="newPost" type="submit">
            POST
          </button>
        </form>
      </div>
      <div className="commentsContainer">{showPosts}</div>
      <Footer />
    </div>
  );
}

export default F1;
