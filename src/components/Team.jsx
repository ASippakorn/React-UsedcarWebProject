import React from "react";


const Team = () => (
<section className="team">


  <div className="team-member">
    <img src="/img/noimage.jpg" alt="Kantanat Chamnien"  />
    <p className="name">Kantanat Chamnien</p>
    <p className="email">Email : kantanat.cha@mahidol.ac.th</p>
    <p className="id">ID: 6687008</p>
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
    <img src="/img/noimage.jpg" alt="Sippakorn Chotiwachira" />
    <p className="name">Sippakorn Chotiwachira</p>
    <p className="email">Email : sippakorn.cho@mahidol.ac.th</p>
    <p className="id">ID: 6687055</p>
  </div>
  <br></br> 
  <div className="team-member">
    <img src="/img/noimage.jpg" alt="Arthittaya Wongsalab" />
    <p className="name">Arthittaya Wongsalab</p>
    <p className="email">Email : thithika.daw@mahidol.ac.th</p>
    <p className="id">ID: 6687081</p>
  </div>
</section>

);

export default Team;