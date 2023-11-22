import profile from "../../public/images/profile.jpg";
class About {
  render() {
    return `
    <div class='check'>
    <div class="heroContainer">
      <section class="hero">
        <figure class="figure aboutFigure">
          <img src="${profile}" alt="my profile picture" loading='lazzy'>
          <figcaption class="offscreen">Gal Parselani</figcaption>
        </figure>
      <h2 class='whiteText'>About Me</h2>
      <p class='whiteText'>Hello! My name is Gal Parselani, a 33-year-old, Jewish, happily married, and a proud resident of Tel Aviv, Israel. Originally from Ra'anana, I cherish the strong bonds with my family, including my wife Hamutal, my brothers, and my adored nephews, who are central to my world.</p>
      <p class='whiteText'>Passionate about gaming, I've been an avid player of Counter-Strike, GTA V, Destiny 2, and Football Manager for over two decades. Beyond the digital realm, I'm a culinary enthusiast, often crafting "Mama Meals" dinners for my wife and me.</p>
      <p class='whiteText'>Staying active is crucial for me. I engage in football, Muay Thai, and functional training, and I'm an enthusiastic sports fan, enjoying everything from Footbal through UFC to tennis. My social life revolves around my close-knit group of friends from school, with whom I regularly catch up.</p>
      <p class='whiteText'>Family time is sacred, particularly during Friday evenings and Saturdays. I believe in giving back and find volunteering deeply rewarding, as it resonates with my life's philosophy of helping others.</p>
      <p class='whiteText'>In every aspect, whether it's through sports, gaming, cooking, or volunteering, I strive to bring joy and positivity to both my life and those around me.</p>
  </section>
  </div>
  </div>
      `;
  }
}

export default About;
