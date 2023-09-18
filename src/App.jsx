import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import classes from "./App.module.scss";

import SampleColumn from "./components/sample-column/SampleColumn";
import Artwork from "./components/artwork/Artwork";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [photo, setPhoto] = useState("gallery-1.jpg");
  const [showMobileNav, setShowMobileNav] = useState(false);

  const turnOnMobileNav = () => setShowMobileNav(true);
  const turnOffMobileNav = () => setShowMobileNav(false);

  const turnOffModal = () => {
    setModalActive(false);
  };

  const onLoadPhoto1 = () => {
    setModalActive(true);
    setPhoto("gallery-1.jpg");
  };

  const onLoadPhoto2 = () => {
    setModalActive(true);
    setPhoto("gallery-2.jpg");
  };

  const onLoadPhoto3 = () => {
    setModalActive(true);
    setPhoto("gallery-3.jpg");
  };

  const onLoadPhoto4 = () => {
    setModalActive(true);
    setPhoto("gallery-4.jpg");
  };

  const onLoadPhoto5 = () => {
    setModalActive(true);
    setPhoto("gallery-5.jpg");
  };

  const onLoadPhoto6 = () => {
    setModalActive(true);
    setPhoto("gallery-6.jpg");
  };

  const prevPhoto = () => {
    let placeholderPhoto = photo;
    placeholderPhoto = placeholderPhoto.slice(8, 9);
    placeholderPhoto === "1"
      ? (placeholderPhoto = 6)
      : (placeholderPhoto = Number(placeholderPhoto) - 1);

    setPhoto(`gallery-${placeholderPhoto}.jpg`);
  };
  const nextPhoto = () => {
    let placeholderPhoto = photo;
    placeholderPhoto = placeholderPhoto.slice(8, 9);
    placeholderPhoto === "6"
      ? (placeholderPhoto = 1)
      : (placeholderPhoto = Number(placeholderPhoto) + 1);

    setPhoto(`gallery-${placeholderPhoto}.jpg`);
  };

  return (
    <React.Fragment>
      <div className={classes["page-wrapper"]}>
        <header className={classes["header-wrapper"]}>
          <nav className={classes["nav-wrapper"]}>
            <Link
              to="anchor-about"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              About
            </Link>
            <Link
              to="anchor-my-journey"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              My Journey
            </Link>
            <Link
              to="anchor-exhibitions"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              Exhibitions
            </Link>
            <Link
              to="anchor-artwork"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              Artwork
            </Link>
            <Link
              to="anchor-gallery"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              Gallery
            </Link>
            <Link
              to="anchor-commissions"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              Commissions
            </Link>
            <Link
              to="anchor-contact"
              smooth={true}
              duration={500}
              className={classes["nav-button"]}
            >
              Contact
            </Link>
          </nav>

          <button
            className={classes["mobile-nav-button--open"]}
            onClick={turnOnMobileNav}
          >
            Open Nav
          </button>

          {showMobileNav === true && (
            <nav className={classes["nav-wrapper-mobile"]}>
              <Link
                to="anchor-about"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                About
              </Link>
              <Link
                to="anchor-my-journey"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                My Journey
              </Link>
              <Link
                to="anchor-exhibitions"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                Exhibitions
              </Link>
              <Link
                to="anchor-artwork"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                Artwork
              </Link>
              <Link
                to="anchor-gallery"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                Gallery
              </Link>
              <Link
                to="anchor-commissions"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                Commissions
              </Link>
              <Link
                to="anchor-contact"
                smooth={true}
                duration={500}
                className={classes["nav-button"]}
                onClick={turnOffMobileNav}
              >
                Contact
              </Link>

              <button
                className={classes["mobile-nav-button--close"]}
                onClick={turnOffMobileNav}
              >
                Close Nav
              </button>
            </nav>
          )}
        </header>

        <section className={classes["section-hero"]}>
          <div className={classes["hero-images-wrapper"]}>
            <div className={classes["hero-image-1"]} />
            <div className={classes["hero-image-2"]} />
          </div>
          <div className={classes["hero-text-wrapper"]}>
            <h1 className={classes["hero-h1"]}>Kayleigh Parks</h1>
            <h2 className={classes["hero-h2"]}>Abstract Artist</h2>
            <p className={classes["hero-para"]}>
              I've been immersed in the world of painting for a decade now. The
              journey of being an artist is a complex balancing act between my
              inner visionary and skeptic, but I've come to deeply appreciate
              this transformative process. It has not only enriched my
              understanding of the world but has also been a mirror reflecting
              insights about myself.
            </p>
            <Link
              to="anchor-sample-works"
              smooth={true}
              duration={500}
              className={classes["hero-nav-button"]}
            >
              Get to know my art
            </Link>
          </div>
        </section>

        <section id="anchor-about" className={classes["section-about"]}>
          <div className={classes["about-text-wrapper"]}>
            <h2 className={classes["about-h2"]}>
              I specialize in acrylic on canvas and abstract concepts.
            </h2>
            <p className={classes["about-paragraph"]}>
              I'm a committed artist who is passionate about exploring
              self-expression through my art. Fueled by the beauty of nature,
              the complexity of emotions, and the nuances of human life, my goal
              is to craft visually striking works that engage both the mind and
              the heart. By skillfully blending form, hue, and texture, I seek
              to expand the limits of my artistic practice while sparking
              curiosity and thoughtful discussion in those who view my pieces.
              My art serves as both a mirror of my evolving creative path and a
              tribute to the transformative power of creativity in fostering
              meaningful conversations.
            </p>
          </div>
          <div className={classes["about-image-wrapper"]}>
            <img
              className={classes["about-image"]}
              src="/imgs/about-painting.jpg"
              alt="painting"
            />
          </div>
        </section>

        <section
          id="anchor-my-journey"
          className={classes["section-my-journey"]}
        >
          <div className={classes["my-journey-quote-wrapper"]}>
            <p className={classes["quotemark--1"]}>”</p>
            <div className={classes["my-journey-column"]}>
              <h2 className={classes["my-journey-h2"]}>My Journey</h2>
              <p className={classes["my-journey-paragraph"]}>
                I'm a self-taught artist based in London, and my art is a
                harmonious blend of intuition and a deep well of inspiration
                that I continually draw from.
              </p>
              <p className={classes["my-journey-paragraph"]}>
                Each painting I create is more than just a canvas; it's a
                complex tapestry that interlaces rich histories and compelling
                narratives. While I'm inspired by the works of great artists
                like Lee Krasner, Joan Mitchell, Willem de Kooning, Vincent van
                Gogh, and Claude Monet, I've developed a unique style. I utilize
                an array of artistic tools and techniques, which allows for a
                textured and deeply personal connection with each of my
                creations.
              </p>
              <p className={classes["my-journey-paragraph"]}>
                By selecting a palette of vivid colors and embracing contrasting
                shades, I aim to articulate my own emotions in harmony with the
                ever-changing moods of nature. My expressionist works capture
                the essence of landscapes, offering immediate emotional
                engagement while preserving the tranquil expansiveness of the
                natural world.
              </p>
              <p className={classes["my-journey-paragraph"]}>
                Beyond the technical aspects, my art is imbued with a sense of
                spiritual balance. Through my work, I extend an invitation to
                viewers, encouraging them to revel in the awe-inspiring wonders
                of the universe. Each painting is crafted with the intention of
                fostering a deep appreciation for the beauty that surrounds us,
                serving as a poignant reminder of the interconnectedness of all
                things.
              </p>
            </div>
            <p className={classes["quotemark--2"]}>“</p>
          </div>
        </section>

        <section
          id="anchor-exhibitions"
          className={classes["section-exhibitions"]}
        >
          <div className={classes["exhibitions-grid-wrapper"]}>
            <h2 className={classes["exhibitions-h2"]}>Exhibitions</h2>
            <h3
              className={classes["exhibitions-h3"]}
              id={classes["exhibitions-h3--1"]}
            >
              Group Exhibitions
            </h3>
            <div className={classes["exhibitions-sub-grid--1-wrapper"]}>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  Platinum Palette Prize 2014, Mumbai
                </li>
                <li className={classes.li}>"The Grand Frame" 2015, Sydney</li>
                <li className={classes.li}>Global Rising Talent Award 2016</li>
                <li className={classes.li}>
                  La Bella Galleria, 2016, Paris, France
                </li>
                <li className={classes.li}>Facets of Passion 2016, New York</li>
                <li className={classes.li}>
                  "The Grand Frame" 2016 Art Show at the Kuroyama Gallery in
                  Tokyo
                </li>
                <li className={classes.li}>
                  Champion of the Arabian Artistry Contest 2018, Riyadh
                </li>
                <li className={classes.li}>
                  Art Bazaar 2018, Moderna Art Space, Barcelona
                </li>
                <li className={classes.li}>Global Rising Talent Award 2018</li>
                <li className={classes.li}>
                  The Elite Circle Art Festival, 2018, Hong Kong
                </li>
                <li className={classes.li}>Alpine Art Showcase 2019, Geneva</li>
                <li className={classes.li}>
                  Osaka International Art Fair, 2019
                </li>
              </ul>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  Cerulean Canvas Honors 2017, Berlin
                </li>
                <li className={classes.li}>"Visions Unveiled" 2018, Toronto</li>
                <li className={classes.li}>
                  Continental Artistic Excellence Award 2019
                </li>
                <li className={classes.li}>
                  Galerie de Lumière, 2019, Rome, Italy
                </li>
                <li className={classes.li}>
                  Whispers of Nature 2020, San Francisco
                </li>
                <li className={classes.li}>
                  "Visions Unveiled" 2020 Art Gala at the Luminosa Gallery in
                  Milan
                </li>
                <li className={classes.li}>
                  Victor of the Pan-Asian Creativity Summit 2021, Seoul
                </li>
                <li className={classes.li}>
                  Art Nexus 2021, Vanguard Art Hall, Amsterdam
                </li>
                <li className={classes.li}>
                  Continental Artistic Excellence Award 2021
                </li>
                <li className={classes.li}>
                  The Prestige Art Soiree, 2021, Buenos Aires
                </li>
              </ul>
            </div>
            <div className={classes["exhibitions-sub-grid--2-wrapper"]}>
              <h3
                className={classes["exhibitions-h3"]}
                id={classes["exhibitions-h3--2"]}
              >
                Solo Exhibitions
              </h3>
              <ul className={classes.ul}>
                <li className={classes.li}>"Fortuity" 2015, Muscat, Oman</li>
                <li className={classes.li}>
                  Shortlisted for the solo exhibition 2018 at the Orion Gallery
                  in London
                </li>
                <li className={classes.li}>
                  "Flourish" 2019, Abu Dhabi, U.A.E at the Quintessence Art
                  House
                </li>
              </ul>
              <h3
                className={classes["exhibitions-h3"]}
                id={classes["exhibitions-h3--3"]}
              >
                Press Release
              </h3>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  "Highlights of 2016" book released by Global Rising Talent
                  Award 2016
                </li>
                <li className={classes.li}>
                  The Asian Art Connoisseur Book 2018
                </li>
                <li className={classes.li}>
                  Creative Visions at the Interior Elegance magazine, July 2020
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="anchor-sample-works"
          className={classes["section-sample-works"]}
        >
          <h2 className={classes["sample-heading"]}>Sample Works</h2>
          <div className={classes["u-row"]}>
            <SampleColumn
              image="sample-1.jpg"
              title="Midnight Calling"
              dimensions="120x80 cm"
              concept="Acrylic on canvas"
              year="2017"
            />

            <SampleColumn
              image="sample-2.jpg"
              title="Scattered Chaos"
              dimensions="120x80 cm"
              concept="Acrylic on canvas"
              year="2017"
            />

            <SampleColumn
              image="sample-3.jpg"
              title="Ocean Dream"
              dimensions="120x80 cm"
              concept="Acrylic on canvas"
              year="2023"
            />
          </div>
        </section>

        <section id="anchor-artwork" className={classes["section-artwork"]}>
          <Artwork
            image="artwork-1.jpg"
            title="Patchwork"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2018"
            description={`In creating "Patchwork," my aim was to explore the complexities and nuances of human emotions and experiences, much like the intricate pieces of a quilt. Each stroke and color choice represents a different facet of life—joy, sorrow, love, and conflict—woven together to form a unified whole. Rather than using just my hands and fingers, I employed a variety of tools and techniques to add depth and texture, making each "patch" distinct yet harmoniously blended with the others. The painting serves as a metaphorical tapestry, inviting viewers to delve into their own patchwork of emotions and experiences, while contemplating the beauty and intricacy of life's interconnected moments.`}
            sold="sold"
          />

          <Artwork
            image="artwork-2.jpg"
            title="Sunshine"
            dimensions="120cm x 120cm"
            concept="Acrylic on canvas"
            year="2021"
            description={`In crafting "Sunshine," my intention was to encapsulate the transformative power of light, both literally and metaphorically. I chose a palette dominated by warm yellows, radiant oranges, and subtle hints of gold to evoke the sensation of sunlight filtering through the morning mist. Utilizing various artistic tools and techniques, I layered these colors to create a luminous effect, aiming to capture the sun's ability to uplift the spirit and illuminate the shadows. The painting is not just a visual representation of a sunny day; it's an invitation to experience joy, hope, and the rejuvenating energy that comes with each new dawn.`}
          />

          <Artwork
            image="artwork-3.jpg"
            title="Lifestream"
            dimensions="120cm x 120cm"
            concept="Acrylic on canvas"
            year="2023"
            description={`While creating "Lifestream," my focus was on capturing the fluidity and ever-changing nature of life itself. I employed swirling patterns of blues, greens, and silvers to represent the flow of energy that courses through all living things. Using a variety of tools and techniques, I added intricate details to evoke the sense of a dynamic, ever-moving stream. The painting aims to draw viewers into a contemplative state, encouraging them to consider their own journey through the ebbs and flows of life. "Lifestream" serves as a visual meditation on the interconnectedness of all existence, inviting viewers to reflect on the continuous cycle of growth, change, and renewal.`}
          />

          <Artwork
            image="artwork-4.jpg"
            title="Harvest"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2023"
            description={`In conceptualizing "Harvest," my goal was to celebrate the fruits of labor, growth, and the cyclical nature of life. I chose a rich palette of earthy browns, vibrant oranges, and deep reds to evoke the essence of autumn, a season synonymous with harvesting. Utilizing a mix of artistic tools and techniques, I layered textures to give the impression of abundant fields and bountiful yields. The painting serves as a tribute to the rewards that come from hard work and perseverance, as well as a reminder of the natural cycles of sowing and reaping. "Harvest" invites viewers to reflect on their own journeys, acknowledging both the efforts made and the blessings received.`}
            sold="sold"
          />

          <Artwork
            image="artwork-5.jpg"
            title="Ruins"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2022"
            description={`While creating "Ruins," my intention was to delve into the themes of decay, transformation, and the passage of time. I chose a subdued palette of grays, muted blues, and earth tones to capture the haunting beauty of forgotten structures and lost civilizations. Using a variety of artistic tools and techniques, I added layers of texture to give the painting a weathered, aged appearance. "Ruins" is more than a depiction of physical decay; it's an exploration of the impermanence of human endeavors and the inevitable cycle of creation and dissolution. The painting invites viewers to ponder the transient nature of existence, while finding beauty in the remnants of what once was.`}
          />

          <Artwork
            image="artwork-6.jpg"
            title="Midnight Calling"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2017"
            description={`In creating "Midnight Calling," my aim was to capture the enigmatic allure and quietude of the night. I opted for a palette dominated by deep blues, blacks, and shimmering silvers to evoke the mystery and serenity of midnight. Using a range of artistic tools and techniques, I layered these colors to create a celestial backdrop, punctuated by what could be interpreted as stars or distant calls in the night. The painting serves as a gateway into the introspective moments that often come when the world sleeps, inviting viewers to explore their own thoughts, dreams, and midnight musings. "Midnight Calling" is an ode to the tranquil yet profound moments that the cloak of night offers, encouraging a deeper connection with our inner selves.`}
            sold="sold"
          />

          <Artwork
            image="artwork-7.jpg"
            title="Aquatic Serenade"
            dimensions="120cm x 120cm"
            concept="Acrylic on canvas"
            year="2018"
            description={`While crafting "Aquatic Serenade," my focus was on capturing the ethereal beauty and tranquility of underwater worlds. I chose a palette rich in shades of blue, turquoise, and hints of iridescent pearl to evoke the feeling of being submerged in a peaceful oceanic realm. Utilizing various artistic tools and techniques, I created flowing patterns and textures to mimic the movement of water and marine life. The painting aims to immerse viewers in a serene aquatic environment, inviting them to experience the calming effects of water and the hidden wonders beneath the surface. "Aquatic Serenade" serves as a visual hymn to the ocean, celebrating its majesty while encouraging a sense of awe and respect for its depths.`}
            sold="sold"
          />

          <Artwork
            image="artwork-8.jpg"
            title="Port in the Storm"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2019"
            description={`In conceptualizing "Port in the Storm," my aim was to capture the essence of sanctuary and resilience amid chaos. I chose a palette of dark blues and grays to represent the turbulent skies and churning seas, contrasted by warm yellows and golds to signify the safety of the harbor. Using a variety of artistic tools and techniques, I layered these colors to create a scene where the port emerges as a beacon of light and stability amidst the surrounding tempest. The painting serves as a metaphor for finding peace in turbulent times, inviting viewers to reflect on their own havens and sources of strength. "Port in the Storm" is a visual testament to the enduring human spirit, offering a sense of hope and solace when facing life's challenges.`}
          />

          <Artwork
            image="artwork-9.jpg"
            title="Scattered Chaos"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2017"
            description={`While creating "Scattered Chaos," my intention was to encapsulate the frenetic energy and unpredictability of life's chaotic moments. I opted for a bold, discordant palette of reds, blacks, and splashes of neon to convey a sense of urgency and disarray. Using an array of artistic tools and techniques, I applied paint in a seemingly random yet calculated manner, creating a complex web of lines, shapes, and textures. The painting aims to evoke a visceral reaction, compelling viewers to confront their own experiences with chaos and disorder. "Scattered Chaos" serves as a visual exploration of life's complexities, inviting viewers to find meaning or perhaps even beauty in the midst of turmoil.`}
          />

          <Artwork
            image="artwork-10.jpg"
            title="Emerald Dreamscape"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2016"
            description={`In crafting "Emerald Dreamscape," my focus was on creating a surreal and enchanting world that exists in the realm of dreams and imagination. I chose a lush palette dominated by various shades of emerald green, accented with golds and soft whites, to evoke a sense of wonder and otherworldliness. Utilizing a range of artistic tools and techniques, I layered these colors to form intricate patterns and ethereal landscapes, aiming to transport viewers into a dreamlike state. The painting serves as a gateway to the subconscious, inviting viewers to explore their own dreams, hopes, and innermost thoughts. "Emerald Dreamscape" is a celebration of the limitless possibilities that exist within our minds, encouraging a deeper connection with our imaginative selves.`}
            sold="sold"
          />

          <Artwork
            image="artwork-11.jpg"
            title="Ocean Dream"
            dimensions="120cm x 80cm"
            concept="Acrylic on canvas"
            year="2023"
            description={`While creating "Ocean Dream," my intention was to capture the mesmerizing allure and infinite possibilities of the ocean in a dreamlike context. I chose a palette rich in shades of blue, teal, and aquamarine, accented with silvery whites to evoke the moon's reflection on water. Using various artistic tools and techniques, I layered these colors to create a fluid, almost hypnotic, seascape that blurs the line between reality and imagination. The painting aims to transport viewers into a tranquil oceanic realm that exists in the realm of dreams, offering a respite from the everyday world. "Ocean Dream" serves as a visual lullaby, inviting viewers to explore their own dreams and find serenity in the embrace of imagined tides.`}
          />
        </section>

        <section id="anchor-gallery" className={classes["section-gallery"]}>
          <div className={classes["gallery-grid-wrapper"]}>
            <h2 className={classes["gallery-title"]}>Photo Gallery</h2>
            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--1"]}
              src="/imgs/gallery-1.jpg"
              alt="Kayleigh painting"
              onClick={onLoadPhoto1}
            />

            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--2"]}
              src="/imgs/gallery-2.jpg"
              alt="All art has been contemporary"
              onClick={onLoadPhoto2}
            />

            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--3"]}
              src="/imgs/gallery-3.jpg"
              alt="Katrina walking through a gallery"
              onClick={onLoadPhoto3}
            />

            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--4"]}
              src="/imgs/gallery-4.jpg"
              alt="Street art"
              onClick={onLoadPhoto4}
            />

            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--5"]}
              src="/imgs/gallery-5.jpg"
              alt="Many paintings in various stages of completion"
              onClick={onLoadPhoto5}
            />

            <img
              className={classes["gallery-image"]}
              id={classes["gallery-image--6"]}
              src="/imgs/gallery-6.jpg"
              alt="View of the outside of a gallery"
              onClick={onLoadPhoto6}
            />
          </div>
        </section>

        <section
          id="anchor-commissions"
          className={classes["section-commissions"]}
        >
          <div className={classes["commissions-grid"]}>
            <h2 className={classes["commissions-h2"]}>Commissions</h2>
            <h3 className={classes["commissions-h3"]} id={classes["h3-slots"]}>
              Two slots per month
            </h3>

            <h3
              className={classes["commissions-h3"]}
              id={classes["h3-timeline"]}
            >
              Timeline
            </h3>
            <p
              className={classes["commissions-paragraph"]}
              id={classes["para-1"]}
            >
              To maintain a high standard of quality and provide personalized
              attention to my clients, I limit myself to accepting only two
              commission slots each month.
            </p>

            <div className={classes["u-column"]} id={classes["para-2"]}>
              <p className={classes["commissions-paragraph"]}>
                The cost and time frame for completing a commissioned piece will
                vary based on its complexity.
              </p>
              <p className={classes["commissions-paragraph"]}>
                Don't hesitate to reach out with any questions or inquiries.
              </p>
            </div>
          </div>
        </section>

        <section id="anchor-contact" className={classes["section-contact-me"]}>
          <h2 className={classes["contact-me-h2"]}>Contact Me</h2>
          <h3 className={classes["contact-me-h3"]}>Address</h3>
          <p className={classes["contact-me-paragraph"]}>Kayleigh Parks</p>
          <p className={classes["contact-me-paragraph"]}>
            42 Baker Street, Flat 3B
          </p>
          <p className={classes["contact-me-paragraph"]}>London, W1U 7AJ</p>
          <p className={classes["contact-me-paragraph"]}>United Kingdom</p>
          <h3 className={classes["contact-me-h3"]}>Phone</h3>
          <p className={classes["contact-me-paragraph"]}>+44 20 7123 4567</p>
          <h3 className={classes["contact-me-h3"]}>Email</h3>
          <p className={classes["contact-me-paragraph"]}>
            kayleigh.parks@kayleigh-art.co.uk
          </p>
        </section>
      </div>

      {modalActive === true && (
        <div className={classes["modal-grid"]}>
          <div className={classes["modal-background"]} onClick={turnOffModal} />
          <button className={classes["close-modal"]} onClick={turnOffModal}>
            X
          </button>
          <button
            className={classes["nextPrev"]}
            id={classes.prev}
            onClick={prevPhoto}
          >
            {"<"}
          </button>
          <div className={classes["photo-wrapper"]}>
            <img className={classes.photo} src={`/imgs/${photo}`} />
          </div>
          <button
            className={classes["nextPrev"]}
            id={classes.next}
            onClick={nextPhoto}
          >
            {">"}
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
