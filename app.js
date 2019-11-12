function Header(props) {
  return(
    <header>
      <h1 className="mainHeader">{ props.title }</h1>
    </header>
  );
}

function Contact() {
  return(
    <div className="contact">
      <address>
        <a href="sallystudent@gmail.com">sallystudent@gmail.com</a><br></br>
        <a href="tel:+13115552368">(311) 555-2368</a>
    </address>
    <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="a picture of Sally Student"></img>
    </div>
  );
}

function Main() {
  return(
    <div className="experience">
      <h2>Experience</h2>
    <h3>The Muse - New York, NY</h3>
    <p>Senior Editor, Branded Content</p>
    <p>August 2015 - March 2019</p>
    <ul>
      <li>Bacon ipsum dolor amet pork chop pork brisket pig cow, ham chuck pancetta spare ribs chicken beef. Capicola
        andouille flank tenderloin ham pastrami.</li>
      <li>Ham prosciutto turducken, biltong bresaola venison hamburger pork loin. Strip steak flank biltong, corned beef
        pastrami brisket shoulder spare ribs swine meatball pork loin filet mignon venison cupim. </li>
      <li>Buffalo leberkas tongue tenderloin corned beef beef ribs spare ribs meatball pork chop chicken cupim.</li>
      <li>Venison chicken biltong ham, sirloin filet mignon rump alcatra frankfurter fatback shank andouille.</li>
      <li>Corned beef turkey rump, ribeye strip steak bacon picanha. Strip steak sirloin chicken, tail prosciutto
        brisket turducken rump.</li>
    </ul>

    <h3>Soapbox Feminist Camp - New York, NY</h3>
    <p>Editor, Branded Content</p>
    <p>August 2012 - March 2015</p>
    <ul>
      <li>Bacon ipsum dolor amet pork chop pork brisket pig cow, ham chuck pancetta spare ribs chicken beef. Capicola
        andouille flank tenderloin ham pastrami.</li>
      <li>Ham prosciutto turducken, biltong bresaola venison hamburger pork loin. Strip steak flank biltong, corned beef
        pastrami brisket shoulder spare ribs swine meatball pork loin filet mignon venison cupim. </li>
      <li>Buffalo leberkas tongue tenderloin corned beef beef ribs spare ribs meatball pork chop chicken cupim.</li>
      <li>Venison chicken biltong ham, sirloin filet mignon rump alcatra frankfurter fatback shank andouille.</li>
      <li>Corned beef turkey rump, ribeye strip steak bacon picanha. Strip steak sirloin chicken, tail prosciutto
        brisket turducken rump.</li>
    </ul>
    </div>
  );
}

function Education() {
  return(
    <div className="education">
      <section>
        <h2>Education</h2>
        <p>American University(2009-2012)</p>
      </section>
    </div>
  );
}

function App() {
  return(
    <div className='resume'>
      <Header title="Sally Student"/>
      <Contact />
      <Main />
      <Education />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
