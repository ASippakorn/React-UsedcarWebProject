import React from "react";


const Team = () => (
  <section className="team">


    <div className="team-member">
      <img src="/img/team1.png" alt="Kantanat Chamnien" />
      <p className="name">Kantanat Chamnien</p>
      <p className="email">Email : kantanat.cha@mahidol.ac.th</p>
      <p className="id">ID: 6687008</p>
      <p className="work">Figma,React</p>
      <a
        href="https://www.instagram.com/kkachbb/"
        target="_blank" //Open in new tab
        title="Social Link"
      >
        IG: KKACHBB
      </a>
    </div>
    <br></br>
    <div className="team-member">
      <img src="/img/team2.png" alt="Sippakorn Chotiwachira" />
      <p className="name">Sippakorn Chotiwachira</p>
      <p className="email">Email : sippakorn.cho@mahidol.ac.th</p>
      <p className="id">ID: 6687055</p>
      <p className="work">Lead Programming React,Nodejs,SQL</p>
      <a
        href="https://www.instagram.com/a_ctwcr/"
        target="_blank" //Open in new tab
        title="Social Link">
          IG: A_CTWCR
      </a>

    </div>
    <br></br>
    <div className="team-member">
      <img src="/img/team3.png" alt="Arthittaya Wongsalab" />
      <p className="name">Arthittaya Wongsalab</p>
      <p className="email">Email : thithika.daw@mahidol.ac.th</p>
      <p className="id">ID: 6687081</p>
      <p className="work">app.css</p>
      <a
        href="https://www.instagram.com/arthittaya_yaya/"
        target="_blank" //Open in new tab
        title="Social Link">
          IG
      </a>
    </div>
  </section>

);

export default Team;