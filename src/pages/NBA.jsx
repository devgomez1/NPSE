import { useState, useEffect } from "react";
import React from "react";
import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";
import NbaSeason from "./NbaSeason";
import Carousel from "./Carousel";
import CardComponent from "./CardComponent";

function NBA() {
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startDay, setStartDay] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [gamesFromDay, setGamesFromDay] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.balldontlie.io/api/v1/games/?start_date=${searchDate}&end_date=${searchDate}`
    )
      .then((response) => response.json())
      .then((data) => setGamesFromDay(data))
      .catch((error) => console.error(error));
  }, [searchDate]);

  function handleSubmitDate(e) {
    e.preventDefault();
    const date = `${startYear}-${startMonth}-${startDay}`;
    setSearchDate(date);
  }

  function mapGames() {
    if (!Array.isArray(gamesFromDay.data)) {
      return <p>No games available</p>;
    }
    return gamesFromDay.data.map((game) => {
      return (
        <div className="scoreFolder">
          <div key={game.id} className="score">
            {game.home_team_score} {game.home_team.abbreviation} vs{" "}
            {game.visitor_team.abbreviation} {game.visitor_team_score}
          </div>
        </div>
      );
    });
  }

  const cardArray = [
    {
      img: "https://www.wowktv.com/wp-content/uploads/sites/52/2023/12/656ea742376a73.51521956.jpeg?w=2560&h=1440&crop=1",
      year: "2023",
      champs: "",
      mvp: "",
      dpoy: "",
      link: "",
    },
    {
      img: "https://cdn.nba.com/manage/2023/05/jokic-faceup.jpg",
      year: "2022",
      champs: "Denver Nuggets",
      mvp: "Joel Embiid",
      dpoy: "Jaren Jackson Jr.",
      link: "https://www.nba.com/news/history-season-review-2022-23",
    },
    {
      img: "https://staticg.sportskeeda.com/editor/2022/12/e8b3c-16711516529694-1920.jpg?w=840",
      year: "2021",
      champs: "Golden State Warriors",
      mvp: "Nikola Jokic",
      dpoy: "Marcus Smart",
      link: "https://www.nba.com/news/history-season-review-2021-22",
    },
    {
      img: "https://sportsmax.tv/media/k2/items/cache/f0b81bc6b9a1d297ddba18c894c1688a_XL.jpg",
      year: "2020",
      champs: "Milwaukee Bucks",
      mvp: "Nikola Jokic",
      dpoy: "Rudy Gobert",
      link: "https://www.nba.com/news/history-season-review-2020-21",
    },
    {
      img: "https://sportshub.cbsistatic.com/i/r/2020/10/12/8fab22d7-e8fd-447d-9fed-86eb61c8bede/thumbnail/1200x675/c948ef375bb9da69fd5188ada3a9743a/lakers-title.jpg",
      year: "2019",
      champs: "Los Angeles Lakers",
      mvp: "Giannis Antetokounmpo",
      dpoy: "Giannis Antetokounmpo",
      link: "https://www.nba.com/news/history-season-review-2019-20",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2019/05/nba-finals-raptors-warriors.jpg",
      year: "2018",
      champs: "Toronto Raptors",
      mvp: "Giannis Antetokounmpo",
      dpoy: "Rudy Gobert",
      link: "https://www.nba.com/news/history-season-review-2018-19",
    },
  ];

  const nbaRecords = [
    [
      { name: "Atlanta Hawks", wins: 29, losses: 53 },
      { name: "Boston Celtics", wins: 49, losses: 33 },
      { name: "Brooklyn Nets", wins: 42, losses: 40 },
      { name: "Charlotte Hornets", wins: 39, losses: 43 },
      { name: "Chicago Bulls", wins: 22, losses: 60 },
      { name: "Cleveland Cavaliers", wins: 19, losses: 63 },
      { name: "Dallas Mavericks", wins: 33, losses: 49 },
      { name: "Denver Nuggets", wins: 54, losses: 28 },
      { name: "Detroit Pistons", wins: 41, losses: 41 },
      { name: "Golden State Warriors", wins: 57, losses: 25 },
      { name: "Houston Rockets", wins: 53, losses: 29 },
      { name: "Indiana Pacers", wins: 48, losses: 34 },
      { name: "LA Clippers", wins: 48, losses: 34 },
      { name: "Los Angeles Lakers", wins: 37, losses: 45 },
      { name: "Memphis Grizzlies", wins: 33, losses: 49 },
      { name: "Miami Heat", wins: 39, losses: 43 },
      { name: "Milwaukee Bucks", wins: 60, losses: 22 },
      { name: "Minnesota Timberwolves", wins: 36, losses: 46 },
      { name: "New Orleans Pelicans", wins: 33, losses: 49 },
      { name: "New York Knicks", wins: 17, losses: 65 },
      { name: "Oklahoma City Thunder", wins: 49, losses: 33 },
      { name: "Orlando Magic", wins: 42, losses: 40 },
      { name: "Philadelphia 76ers", wins: 51, losses: 31 },
      { name: "Phoenix Suns", wins: 19, losses: 63 },
      { name: "Portland Trail Blazers", wins: 53, losses: 29 },
      { name: "Sacramento Kings", wins: 39, losses: 43 },
      { name: "San Antonio Spurs", wins: 48, losses: 34 },
      { name: "Toronto Raptors", wins: 58, losses: 24 },
      { name: "Utah Jazz", wins: 50, losses: 32 },
      { name: "Washington Wizards", wins: 32, losses: 50 },
    ],
    [
      { name: "Atlanta Hawks", wins: 20, losses: 47 },
      { name: "Boston Celtics", wins: 48, losses: 24 },
      { name: "Brooklyn Nets", wins: 35, losses: 37 },
      { name: "Charlotte Hornets", wins: 23, losses: 42 },
      { name: "Chicago Bulls", wins: 22, losses: 43 },
      { name: "Cleveland Cavaliers", wins: 19, losses: 46 },
      { name: "Dallas Mavericks", wins: 43, losses: 32 },
      { name: "Denver Nuggets", wins: 46, losses: 27 },
      { name: "Detroit Pistons", wins: 20, losses: 46 },
      { name: "Golden State Warriors", wins: 15, losses: 50 },
      { name: "Houston Rockets", wins: 44, losses: 28 },
      { name: "Indiana Pacers", wins: 45, losses: 28 },
      { name: "LA Clippers", wins: 49, losses: 23 },
      { name: "Los Angeles Lakers", wins: 52, losses: 19 },
      { name: "Memphis Grizzlies", wins: 34, losses: 39 },
      { name: "Miami Heat", wins: 44, losses: 29 },
      { name: "Milwaukee Bucks", wins: 56, losses: 17 },
      { name: "Minnesota Timberwolves", wins: 19, losses: 45 },
      { name: "New Orleans Pelicans", wins: 30, losses: 42 },
      { name: "New York Knicks", wins: 21, losses: 45 },
      { name: "Oklahoma City Thunder", wins: 44, losses: 28 },
      { name: "Orlando Magic", wins: 33, losses: 40 },
      { name: "Philadelphia 76ers", wins: 43, losses: 30 },
      { name: "Phoenix Suns", wins: 34, losses: 39 },
      { name: "Portland Trail Blazers", wins: 35, losses: 39 },
      { name: "Sacramento Kings", wins: 31, losses: 41 },
      { name: "San Antonio Spurs", wins: 32, losses: 39 },
      { name: "Toronto Raptors", wins: 53, losses: 19 },
      { name: "Utah Jazz", wins: 44, losses: 28 },
      { name: "Washington Wizards", wins: 25, losses: 47 },
    ],
    [
      { name: "Atlanta Hawks", wins: 41, losses: 31 },
      { name: "Boston Celtics", wins: 36, losses: 36 },
      { name: "Brooklyn Nets", wins: 48, losses: 24 },
      { name: "Charlotte Hornets", wins: 33, losses: 39 },
      { name: "Chicago Bulls", wins: 31, losses: 41 },
      { name: "Cleveland Cavaliers", wins: 22, losses: 50 },
      { name: "Dallas Mavericks", wins: 42, losses: 30 },
      { name: "Denver Nuggets", wins: 47, losses: 25 },
      { name: "Detroit Pistons", wins: 20, losses: 52 },
      { name: "Golden State Warriors", wins: 39, losses: 33 },
      { name: "Houston Rockets", wins: 17, losses: 55 },
      { name: "Indiana Pacers", wins: 34, losses: 38 },
      { name: "LA Clippers", wins: 47, losses: 25 },
      { name: "Los Angeles Lakers", wins: 42, losses: 30 },
      { name: "Memphis Grizzlies", wins: 38, losses: 34 },
      { name: "Miami Heat", wins: 40, losses: 32 },
      { name: "Milwaukee Bucks", wins: 46, losses: 26 },
      { name: "Minnesota Timberwolves", wins: 23, losses: 49 },
      { name: "New Orleans Pelicans", wins: 31, losses: 41 },
      { name: "New York Knicks", wins: 41, losses: 31 },
      { name: "Oklahoma City Thunder", wins: 22, losses: 50 },
      { name: "Orlando Magic", wins: 21, losses: 51 },
      { name: "Philadelphia 76ers", wins: 49, losses: 23 },
      { name: "Phoenix Suns", wins: 51, losses: 21 },
      { name: "Portland Trail Blazers", wins: 42, losses: 30 },
      { name: "Sacramento Kings", wins: 31, losses: 41 },
      { name: "San Antonio Spurs", wins: 33, losses: 39 },
      { name: "Toronto Raptors", wins: 27, losses: 45 },
      { name: "Utah Jazz", wins: 52, losses: 20 },
      { name: "Washington Wizards", wins: 34, losses: 38 },
    ],
    [
      { name: "Atlanta Hawks", wins: 43, losses: 39 },
      { name: "Boston Celtics", wins: 51, losses: 31 },
      { name: "Brooklyn Nets", wins: 44, losses: 38 },
      { name: "Charlotte Hornets", wins: 43, losses: 39 },
      { name: "Chicago Bulls", wins: 46, losses: 36 },
      { name: "Cleveland Cavaliers", wins: 44, losses: 38 },
      { name: "Dallas Mavericks", wins: 52, losses: 30 },
      { name: "Denver Nuggets", wins: 48, losses: 34 },
      { name: "Detroit Pistons", wins: 23, losses: 59 },
      { name: "Golden State Warriors", wins: 53, losses: 29 },
      { name: "Houston Rockets", wins: 20, losses: 62 },
      { name: "Indiana Pacers", wins: 25, losses: 57 },
      { name: "LA Clippers", wins: 42, losses: 40 },
      { name: "Los Angeles Lakers", wins: 33, losses: 49 },
      { name: "Memphis Grizzlies", wins: 56, losses: 26 },
      { name: "Miami Heat", wins: 53, losses: 29 },
      { name: "Milwaukee Bucks", wins: 51, losses: 31 },
      { name: "Minnesota Timberwolves", wins: 46, losses: 36 },
      { name: "New Orleans Pelicans", wins: 36, losses: 46 },
      { name: "New York Knicks", wins: 37, losses: 45 },
      { name: "Oklahoma City Thunder", wins: 24, losses: 58 },
      { name: "Orlando Magic", wins: 22, losses: 60 },
      { name: "Philadelphia 76ers", wins: 51, losses: 31 },
      { name: "Phoenix Suns", wins: 64, losses: 18 },
      { name: "Portland Trail Blazers", wins: 27, losses: 55 },
      { name: "Sacramento Kings", wins: 30, losses: 52 },
      { name: "San Antonio Spurs", wins: 34, losses: 48 },
      { name: "Toronto Raptors", wins: 48, losses: 34 },
      { name: "Utah Jazz", wins: 52, losses: 20 },
      { name: "Washington Wizards", wins: 35, losses: 47 },
    ],
    [
      { name: "Atlanta Hawks", wins: 41, losses: 41 },
      { name: "Boston Celtics", wins: 57, losses: 25 },
      { name: "Brooklyn Nets", wins: 45, losses: 37 },
      { name: "Charlotte Hornets", wins: 27, losses: 55 },
      { name: "Chicago Bulls", wins: 40, losses: 42 },
      { name: "Cleveland Cavaliers", wins: 51, losses: 31 },
      { name: "Dallas Mavericks", wins: 38, losses: 44 },
      { name: "Denver Nuggets", wins: 53, losses: 29 },
      { name: "Detroit Pistons", wins: 17, losses: 65 },
      { name: "Golden State Warriors", wins: 44, losses: 38 },
      { name: "Houston Rockets", wins: 22, losses: 60 },
      { name: "Indiana Pacers", wins: 35, losses: 47 },
      { name: "LA Clippers", wins: 44, losses: 38 },
      { name: "Los Angeles Lakers", wins: 43, losses: 39 },
      { name: "Memphis Grizzlies", wins: 51, losses: 31 },
      { name: "Miami Heat", wins: 44, losses: 38 },
      { name: "Milwaukee Bucks", wins: 58, losses: 24 },
      { name: "Minnesota Timberwolves", wins: 42, losses: 40 },
      { name: "New Orleans Pelicans", wins: 42, losses: 40 },
      { name: "New York Knicks", wins: 47, losses: 35 },
      { name: "Oklahoma City Thunder", wins: 40, losses: 42 },
      { name: "Orlando Magic", wins: 34, losses: 48 },
      { name: "Philadelphia 76ers", wins: 54, losses: 28 },
      { name: "Phoenix Suns", wins: 45, losses: 37 },
      { name: "Portland Trail Blazers", wins: 33, losses: 49 },
      { name: "Sacramento Kings", wins: 48, losses: 34 },
      { name: "San Antonio Spurs", wins: 22, losses: 60 },
      { name: "Toronto Raptors", wins: 41, losses: 41 },
      { name: "Utah Jazz", wins: 37, losses: 45 },
      { name: "Washington Wizards", wins: 35, losses: 47 },
    ],
    [
      { name: "Atlanta Hawks", wins: 9, losses: 10 },
      { name: "Boston Celtics", wins: 15, losses: 5 },
      { name: "Brooklyn Nets", wins: 10, losses: 9 },
      { name: "Charlotte Hornets", wins: 6, losses: 12 },
      { name: "Chicago Bulls", wins: 7, losses: 14 },
      { name: "Cleveland Cavaliers", wins: 11, losses: 9 },
      { name: "Dallas Mavericks", wins: 11, losses: 8 },
      { name: "Denver Nuggets", wins: 14, losses: 7 },
      { name: "Detroit Pistons", wins: 2, losses: 18 },
      { name: "Golden State Warriors", wins: 9, losses: 11 },
      { name: "Houston Rockets", wins: 8, losses: 9 },
      { name: "Indiana Pacers", wins: 11, losses: 8 },
      { name: "LA Clippers", wins: 9, losses: 10 },
      { name: "Los Angeles Lakers", wins: 12, losses: 9 },
      { name: "Memphis Grizzlies", wins: 5, losses: 14 },
      { name: "Miami Heat", wins: 11, losses: 9 },
      { name: "Milwaukee Bucks", wins: 14, losses: 6 },
      { name: "Minnesota Timberwolves", wins: 15, losses: 4 },
      { name: "New Orleans Pelicans", wins: 12, losses: 10 },
      { name: "New York Knicks", wins: 12, losses: 7 },
      { name: "Oklahoma City Thunder", wins: 13, losses: 6 },
      { name: "Orlando Magic", wins: 14, losses: 6 },
      { name: "Philadelphia 76ers", wins: 12, losses: 7 },
      { name: "Phoenix Suns", wins: 12, losses: 8 },
      { name: "Portland Trail Blazers", wins: 6, losses: 13 },
      { name: "Sacramento Kings", wins: 11, losses: 8 },
      { name: "San Antonio Spurs", wins: 3, losses: 16 },
      { name: "Toronto Raptors", wins: 9, losses: 11 },
      { name: "Utah Jazz", wins: 7, losses: 13 },
      { name: "Washington Wizards", wins: 3, losses: 16 },
    ],
  ];

  const mapCards = cardArray.map((item, index) => (
    <div className="col-sm-4" key={index}>
      <NbaSeason key={item.name} nbaRecords={nbaRecords} item={item} />
    </div>
  ));

  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("2018-19");
  const [rate, setRate] = useState(0);
  const [previousPosts, setPreviousPosts] = useState([]);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/nba")
      .then((res) => res.json())
      .then((data) => {
        setPreviousPosts(data);
      });
  }, []);

  const showPosts = previousPosts.map((post) => {
    return (
      <div>
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
        <p>User: {post.username}</p>
        <p>Season: {post.season}</p>
        <p>{post.post}</p>
      </div>
    );
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      username: nameInput,
      season: selectedSeason,
      comments: commentInput,
      likes: 0,
    };

    fetch("http://localhost:3000/nba", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: nameInput,
        season: selectedSeason,
        comments: commentInput,
      }),
    });

    setPreviousPosts([...previousPosts, newPost]);
    setNameInput("");
    setCommentInput("");
  }

  return (
    <div className="mainNBApage">
      <Nav />
      <Carousel
        image1={
          "https://www.yardbarker.com/media/6/8/68f6d59cdc601522f4b88a89712d58e894e0f274/thumb_16x9/best-nba-finals-games-time.jpg?v=1"
        }
        image2={"https://cdn.nba.com/manage/2021/08/kobe-to-shaq-1568x882.jpg"}
        image3={
          "https://cdn.theathletic.com/app/uploads/2022/11/24101353/GettyImages-1443091775.jpg"
        }
        image4={
          "https://www.hollywoodreporter.com/wp-content/uploads/2023/06/GettyImages-1498018265.jpg?w=1296"
        }
      />
      <div className="row">
        <div className="card-deck">{mapCards}</div>
      </div>
      <h1>⎯⎯⎯⎯⎯⎯⎯</h1>
      <h2 className="searchGames">Search For Past NBA Games by Date</h2>
      <div className="searchFormContainer">
        <form className="searchForm" onSubmit={handleSubmitDate}>
          <label>
            <input
              type="text"
              className="dateSlot"
              placeholder="Month"
              value={startMonth}
              maxLength={2}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setStartMonth(numericValue)}
              }
            />
            <input
              type="text"
              className="dateSlot"
              placeholder="Day"
              value={startDay}
              maxLength={2}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setStartDay(numericValue)}
              }
            />
            <input
              type="text"
              className="dateSlot"
              placeholder="Year"
              value={startYear}
              maxLength={4}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setStartYear(numericValue)
              }
              }
            />
            <button type="submit">Search</button>
          </label>
        </form>
        {mapGames()}
      </div>
      <h1>⎯⎯⎯⎯⎯⎯⎯</h1>
      <div className="commentInputSection">
        <h2 className="shareThoughts">
          Share thoughts on different NBA Seasons!
        </h2>
        <form className="postForm" onSubmit={handleSubmit}>
          <h5 className="newPost">Enter your desired display Name: </h5>
          <input
            type="text"
            value={nameInput}
            placeholder="Your Display Name"
            onChange={(e) => setNameInput(e.target.value)}
          ></input>
          <h5 className="newPost">Select the season you want to talk about!</h5>
          <select onChange={(e) => setSelectedSeason(e.target.value)}>
            <option>2018-19</option>
            <option>2019-20</option>
            <option>2020-21</option>
            <option>2021-22</option>
            <option>2022-23</option>
            <option>2023-24</option>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NBA;
