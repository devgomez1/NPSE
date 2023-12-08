import { useEffect, useState } from "react";
import "../App.css";

function NbaSeason({ item, nbaRecords }) {
  const [season, setSeason] = useState("");
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [teams, setTeams] = useState("");
  const [displayRecord, setDisplayRecord] = useState(0);
  const [logo, setLogo] = useState("");
  const [displayCard, setDisplayCard] = useState(false);

  useEffect(() => {
    const seasonData = nbaRecords[seasonIndex].find(
      (team) => team.name === teams
    );

    if (seasonData) {
      const { wins, losses } = seasonData;
      setDisplayRecord(`${teams} - Wins: ${wins}, Losses: ${losses}`);
    }
  }, [seasonIndex, teams, nbaRecords]);

  useEffect(() => {
    let index = 0;
    if (season === "2018") {
      index = 0;
    } else if (season === "2019") {
      index = 1;
    } else if (season === "2020") {
      index = 2;
    } else if (season === "2021") {
      index = 3;
    } else if (season === "2022") {
      index = 4;
    } else if (season === "2023") {
      index = 5;
    }
    setSeasonIndex(index);
  }, [season]);

  const handleTeamChange = (e) => {
    const selectedTeam = e.target.value;

    if (selectedTeam === "0") {
      setTeams("");
      setLogo("");
      setDisplayRecord(0);
    } else {
      setTeams(selectedTeam);
      setLogo(getLogoUrl(selectedTeam));
    }
  };

  const getLogoUrl = (teamName) => {
    if (teamName === "Atlanta Hawks") {
      return "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif";
    } else if (teamName === "Boston Celtics") {
      return "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif";
    } else if (teamName === "Brooklyn Nets") {
      return "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif";
    } else if (teamName === "Charlotte Hornets") {
      return "https://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif";
    } else if (teamName === "Chicago Bulls") {
      return "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif";
    } else if (teamName === "Cleveland Cavaliers") {
      return "https://content.sportslogos.net/logos/6/222/thumbs/22253692023.gif";
    } else if (teamName === "Dallas Mavericks") {
      return "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif";
    } else if (teamName === "Denver Nuggets") {
      return "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif";
    } else if (teamName === "Detroit Pistons") {
      return "https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif";
    } else if (teamName === "Golden State Warriors") {
      return "https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif";
    } else if (teamName === "Houston Rockets") {
      return "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif";
    } else if (teamName === "Indiana Pacers") {
      return "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif";
    } else if (teamName === "Los Angeles Clippers") {
      return "https://content.sportslogos.net/logos/6/236/thumbs/23637762019.gif";
    } else if (teamName === "Los Angeles Lakers") {
      return "https://content.sportslogos.net/logos/6/237/thumbs/23773242024.gif";
    } else if (teamName === "Memphis Grizzlies") {
      return "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif";
    } else if (teamName === "Miami Heat") {
      return "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif";
    } else if (teamName === "Milwaukee Bucks") {
      return "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif";
    } else if (teamName === "Minnesota Timberwolves") {
      return "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif";
    } else if (teamName === "New Orleans Pelicans") {
      return "https://content.sportslogos.net/logos/6/4962/thumbs/496292922024.gif";
    } else if (teamName === "New York Knicks") {
      return "https://content.sportslogos.net/logos/6/216/thumbs/21671702024.gif";
    } else if (teamName === "Oklahoma City Thunder") {
      return "https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif";
    } else if (teamName === "Orlando Magic") {
      return "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif";
    } else if (teamName === "Philadelphia 76ers") {
      return "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif";
    } else if (teamName === "Phoenix Suns") {
      return "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif";
    } else if (teamName === "Portland Trail Blazers") {
      return "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif";
    } else if (teamName === "Sacramento Kings") {
      return "https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif";
    } else if (teamName === "San Antonio Spurs") {
      return "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif";
    } else if (teamName === "Toronto Raptors") {
      return "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif";
    } else if (teamName === "Utah Jazz") {
      return "https://content.sportslogos.net/logos/6/234/thumbs/23485132023.gif";
    } else if (teamName === "Washingto Wizards") {
      return "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif";
    }

    return "";
  };

  return (
    <div className="card-deck mb-4">
      <div
        className={`card hoverable ${displayCard ? "clicked" : ""}`}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <img
          className="card-img-top card-img"
          src={item.img}
          alt="Card image cap"
          onClick={() => setDisplayCard(!displayCard)}
        />
        <div className="card-body" >
          <h5 className="card-title">
            {item.year} - {parseInt(item.year) + 1} Season Overview
          </h5>
          {displayCard ? (
            <div className="card-text">
              {item.champs !== "" ? (
                <div className="champs">Champions: {item.champs}</div>
              ) : (
                ""
              )}
              {item.mvp !== "" ? (
                <div className="mvp">Most Valuable Player: {item.mvp}</div>
              ) : (
                ""
              )}
              {item.dpoy !== "" ? (
                <div className="dpoy">
                  Defensive Player of the Year: {item.dpoy}
                </div>
              ) : (
                ""
              )}
              {item.link !== "" ? (
                <div>
                  <div>Season Recap:</div>
                  <a href={item.link}>{item.link}</a>
                </div>
              ) : (
                ""
              )}
              <select
                onChange={handleTeamChange}
                value={teams}
                onClick={() => setSeason((prevSeason) => item.year)}
              >
                <option value="0">Search Teams Season Record</option>
                <option value="Atlanta Hawks">Atlanta Hawks</option>
                <option value="Boston Celtics">Boston Celtics</option>
                <option value="Brooklyn Nets">Brooklyn Nets</option>
                <option value="Charlotte Hornets">Charlotte Hornets</option>
                <option value="Chicago Bulls">Chicago Bulls</option>
                <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
                <option value="Dallas Mavericks">Dallas Mavericks</option>
                <option value="Denver Nuggets">Denver Nuggets</option>
                <option value="Detroit Pistons">Detroit Pistons</option>
                <option value="Golden State Warriors">
                  Golden State Warriors
                </option>
                <option value="Houston Rockets">Houston Rockets</option>
                <option value="Indiana Pacers">Indiana Pacers</option>
                <option value="Los Angeles Clippers">
                  Los Angeles Clippers
                </option>
                <option value="Los Angeles Lakers">Los Angeles Lakers</option>
                <option value="Memphis Grizzlies">Memphis Grizzlies</option>
                <option value="Miami Heat">Miami Heat</option>
                <option value="Milwaukee Bucks">Milwaukee Bucks</option>
                <option value="Minnesota Timberwolves">
                  Minnesota Timberwolves
                </option>
                <option value="New Orleans Pelicans">
                  New Orleans Pelicans
                </option>
                <option value="New York Knicks">New York Knicks</option>
                <option value="Oklahoma City Thunder">
                  Oklahoma City Thunder
                </option>
                <option value="Orlando Magic">Orlando Magic</option>
                <option value="Philadelphia 76ers">Philadelphia 76ers</option>
                <option value="Phoenix Suns">Phoenix Suns</option>
                <option value="Portland Trail Blazers">
                  Portland Trail Blazers
                </option>
                <option value="Sacramento Kings">Sacramento Kings</option>
                <option value="San Antonio Spurs">San Antonio Spurs</option>
                <option value="Toronto Raptors">Toronto Raptors</option>
                <option value="Utah Jazz">Utah Jazz</option>
                <option value="Washington Wizards">Washington Wizards</option>
              </select>
              {teams ? (
                <div>
                  <img src={logo} alt={`Logo for ${teams}`} />
                  <div>{displayRecord}</div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <p className="card-text">
              <small className="text-muted">Click image to read more...</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NbaSeason;
