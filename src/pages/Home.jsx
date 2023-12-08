import React, { useState } from "react";
import Nav from "./Nav";
import "../App.css";
import Footer from "./Footer";

function Home() {
  const ballPics = [
    "https://a.espncdn.com/photo/2017/0519/r210878_600x600_1-1.jpg",
    "https://img.bleacherreport.net/img/slides/photos/003/377/289/hi-res-88977784-michael-jordan-of-the-chicago-bulls-drives-the-ball-up_crop_exact.jpg?w=2975&h=2048&q=85",
    "https://qph.cf2.quoracdn.net/main-qimg-146ed92b1c83233c8b4ea0e21aab5334-lq",
    "https://media.gettyimages.com/id/631858244/photo/los-angeles-ca-russell-westbrook-of-the-oklahoma-city-thunder-dunks-after-a-steal-against-the.jpg?s=612x612&w=0&k=20&c=C7Cn4yrwhJBky-zEmydgB8y_SEhX0oIpuQBM8bhYGPo=",
    "https://media.gettyimages.com/id/1403379980/photo/boston-massachusetts-andre-iguodala-draymond-green-klay-thompson-and-stephen-curry-of-the.jpg?s=612x612&w=0&k=20&c=CfbtYn5A8NewklrELK1iIlWk0OiwPN2u1DGXhyhLQcQ=",
    "https://media.gettyimages.com/id/1781288/photo/atlanta-kobe-bryant-of-the-western-conference-all-stars-talks-with-michael-jordan-of-the-eastern.jpg?s=612x612&w=0&k=20&c=PusLZ6W_M6YC9tekPcDazO2qvwnvF9EyHrcqrlXYXu8=",
    "https://media.gettyimages.com/id/1370221043/photo/philadelphia-pennsylvania-joel-embiid-of-the-philadelphia-76ers-dunks-over-jarrett-allen-of.jpg?s=612x612&w=0&k=20&c=VYeIBQSs3RtorcmeE7BemzEoe1EwCLZiOPkfMrMrYnw=",
    "https://media.gettyimages.com/id/1150842569/photo/toronto-ontario-giannis-antetokounmpo-of-the-milwaukee-bucks-dunks-the-ball-during-the-first.jpg?s=612x612&w=0&k=20&c=hPSzZXhXUT5V0AE44GbOuI6p2fDiblwD5bsPMqzpuOc=",
    "https://media.gettyimages.com/id/1362299697/photo/washington-dc-demar-derozan-of-the-chicago-bulls-hits-the-game-winning-shot-in-the-fourth.jpg?s=612x612&w=0&k=20&c=zNZHZ4wamVj6jMPT6vnLaAWGmGAEoJa49OwtpnJ7pdM=",
    "https://media.gettyimages.com/id/510112884/photo/toronto-on-aaron-gordon-of-the-orlando-magic-dunks-over-stuff-the-orlando-magic-mascot-in-the.jpg?s=612x612&w=0&k=20&c=BUS1dTJkGa7lPHjSAEY919QO_YEJgydAR-Ij5FVflfA=",
    "https://media.gettyimages.com/id/114701872/photo/dallas-tx-dirk-nowitzki-of-the-dallas-mavericks-reacts-after-making-a-three-pointer-in-the.jpg?s=612x612&w=0&k=20&c=WBkI3Aaw6Jxhyipf-dazEB3z-DS1b7m6qw6dIeC4wC8=",
    "https://media.gettyimages.com/id/72033657/photo/houston-vince-carter-of-the-toronto-raptors-elevates-for-a-spectacular-slam-dunk-against-the.jpg?s=612x612&w=0&k=20&c=dDACXUGV0c2DFbJHKDkZXBnd8XVJqBrEhS6snzQlf4s=",
    "https://media.gettyimages.com/id/541546870/photo/oakland-ca-kyrie-irving-of-the-cleveland-cavaliers-shoots-a-three-point-basket-against-the.jpg?s=612x612&w=0&k=20&c=Ggmu9ogHegt-cN_uMMToDtXIdSmrj1_D4RdLLVCdKMg=",
    "https://media.gettyimages.com/id/1391840515/photo/memphis-tennessee-ja-morant-of-the-memphis-grizzlies-dunks-against-dangelo-russell-of-the.jpg?s=612x612&w=0&k=20&c=uUNYzZw7tBcLx4x7rUdhQyIcbuOU1rGXFuKdLyQYOHQ=",
    "https://media.gettyimages.com/id/1246120449/photo/boston-ma-jayson-tatum-of-the-boston-celtics-celebrates-with-the-fans-after-he-sealed-their.jpg?s=612x612&w=0&k=20&c=fkUc8CVMtNEwMtCKGi8WllDxhchB1ZKCvV5WCzm_xVk=",
  ];

  const racingPics = [
    "https://media.gettyimages.com/id/1763677640/photo/mexico-city-mexico-sergio-perez-of-mexico-driving-the-oracle-red-bull-racing-rb19-collides.jpg?s=612x612&w=0&k=20&c=lBRfWqXp1afQOPcayHkCSrnvky4qfZY0Vrg0klGpK3c=",
    "https://media.gettyimages.com/id/1287644943/photo/istanbul-turkey-race-winner-lewis-hamilton-of-great-britain-and-mercedes-gp-celebrates.jpg?s=612x612&w=0&k=20&c=O041Vl7ZqUAyiQksAjvfrN5us0liaZvbbDtm9tbVBNU=",
    "https://media.gettyimages.com/id/1352018234/photo/mexico-city-mexico-sergio-perez-of-mexico-and-red-bull-racing-celebrates-finishing-in-third.jpg?s=612x612&w=0&k=20&c=rcTQ1KyreKUk9GQ9oxMMSyQQ--c_kCD3LUOM5SEy9AA=",
    "https://media.gettyimages.com/id/1388047790/photo/jeddah-saudi-arabia-fireworks-are-pictured-over-the-circuit-during-the-f1-grand-prix-of-saudi.jpg?s=612x612&w=0&k=20&c=yteWOO23nBIY0EyIejs8zNnyDRZHRTrjYJPtUbgrjeg=",
    "https://media.gettyimages.com/id/1385059611/photo/bahrain-bahrain-the-f1-drivers-pose-for-a-photo-on-the-grid-with-their-cars-during-day-one-of.jpg?s=612x612&w=0&k=20&c=2dc2Phlecg7npXxeXlynBZgV1FQ6sMvOZT07enOWu0Q=",
    "https://media.gettyimages.com/id/1406532967/photo/northampton-england-zhou-guanyu-of-china-driving-the-alfa-romeo-f1-c42-ferrari-crashes-at-the.jpg?s=612x612&w=0&k=20&c=P9fOZuXLMTjUkKa8Kg2N0040a5ZQaddJXBSu5rq7D4Y=",
    "https://media.gettyimages.com/id/1437759309/photo/mexico-city-mexico-max-verstappen-of-the-netherlands-driving-the-oracle-red-bull-racing-rb18.jpg?s=612x612&w=0&k=20&c=35jEFEg1uFxyLYvilLgTeZMUk3vjKTi_qhyNJbrpEE0=",
    "https://media.gettyimages.com/id/1399911858/photo/monte-carlo-monaco-charles-leclerc-of-monaco-driving-the-ferrari-f1-75-leads-carlos-sainz-of.jpg?s=612x612&w=0&k=20&c=ZsmTPGmUoamrH2Y1ZdqFSdsDz1V5Xp_EcPdXVHk-GgA=",
    "https://media.gettyimages.com/id/1393152141/photo/imola-italy-max-verstappen-of-the-netherlands-driving-the-oracle-red-bull-racing-rb18.jpg?s=612x612&w=0&k=20&c=oOz46BrWl76cBCMxf_CBVSogT1KU6-aPs-tqXsPNtxQ=",
    "https://media.gettyimages.com/id/1329692793/photo/northampton-england-race-winner-lewis-hamilton-of-great-britain-driving-the-mercedes-amg.jpg?s=612x612&w=0&k=20&c=HESGjT3_rHu6U9G97Ux8UNEBU7wcjsXsrtCaYFdNvQk=",
    "https://media.gettyimages.com/id/1406611190/photo/northampton-england-guanyu-zhou-of-alfa-romeo-and-china-and-george-russell-of-mercedes-and.jpg?s=612x612&w=0&k=20&c=ZzW2Piga0L0bj16hWWeYXAsDj2oYT08E86LoVkfd94s=",
    "https://media.gettyimages.com/id/544392120/photo/spielberg-austria-the-drivers-begin-their-parade-lap-before-the-formula-one-grand-prix-of.jpg?s=612x612&w=0&k=20&c=yZNVmeK40QcjEoid_OTklEUyMkSdWBDEE7VjMkPPlu0=",
    "https://media.gettyimages.com/id/1422804443/photo/monza-italy-a-general-view-of-the-podium-as-race-winner-max-verstappen-of-the-netherlands-and.jpg?s=612x612&w=0&k=20&c=JPdaszyDWn_Acs3VzezyHQsBI3CczKfuU3ZTyBF5iAs=",
    "https://media.gettyimages.com/id/1317141686/photo/barcelona-spain-race-winner-lewis-hamilton-of-great-britain-and-mercedes-gp-celebrates-in.jpg?s=612x612&w=0&k=20&c=P-nLWeQF38MvxGGI-fIi2xAYvKQDdx54tbUAuEfHTTQ=",
  ];

  const [randomNumberBall, setRandomNumberBall] = useState(
    generateRandomNumber(0, ballPics.length - 1)
  );
  const [randomNumberRace, setRandomNumberRace] = useState(
    generateRandomNumber(0, racingPics.length - 1)
  );

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleBasketballClick = () => {
    setRandomNumberBall(generateRandomNumber(0, ballPics.length - 1));
  };

  const handleRacingClick = () => {
    setRandomNumberRace(generateRandomNumber(0, racingPics.length - 1));
  };

  return (
    <div>
      <Nav />
      <header>
        <h1>National Professional Sports Enthusiasts</h1>
      </header>

      <section className="intro-section">
        <p>Welcome to the homepage of the NPSE</p>
      </section>

      <div className="featured-item">
        <h2>We're Glad You're Here!</h2>
        <p>
          It is our hope that this website serves as a hub for all sports
          enthusiasts. Our site is in the earlier stages of its development, so
          there isn't much here yet, but hopefully you enjoy what we have
          created thus far!
        </p>
      </div>

      <span className="photos">
        <div className="basketballPhoto">
          <img
            src={ballPics[randomNumberBall]}
            onClick={handleBasketballClick}
            alt="Random Basketball Pic"
          />
        </div>
        <div className="racingPhoto">
          <img
            src={racingPics[randomNumberRace]}
            onClick={handleRacingClick}
            alt="Random Racing Pic"
          />
        </div>
      </span>

      <Footer />
    </div>
  );
}

export default Home;
