import React from 'react';
import {Link} from 'react-router-dom';

import {TERMS_OF_SERVICE, PRIVACY_POLICY, REGISTER} from 'lib/routes';

import {ReactComponent as Coffee} from 'images/coffee.svg';
import featureIcon from 'images/feature-icon.svg';
import featureEditor from 'images/features-editor.png';
import featureEditorM from 'images/features-editor-m.png';
import featureFeed from 'images/features-feed.png';
import featureFeedM from 'images/features-feed-m.png';
import featureSocial from 'images/features-social.png';
import featureSocialM from 'images/features-social-m.png';
// import hero from 'images/hero1.jpg';
import hero2 from 'images/hero2.jpg';
import ideas from 'images/ideas-image.png';
import nextWork from 'images/next-work.svg';
import solFanfiction from 'images/sol-fanfiction.png';
import solFiction from 'images/sol-fiction.png';
import solNonfiction from 'images/sol-nonfiction.png';
import logoBig from 'images/taleguild-logo-big.png';
import logoS from 'images/taleguild-logo-small.svg';
// import logoM from 'images/taleguild-logo-white.svg';

const URL = 'https://taleguild.com/';

const COFFEE_URL = 'https://www.buymeacoffee.com/taleguildstory';

export default function Home() {
	return (
		<>
			<header className="header">
				<div className="header__logo-box">
					<img src={logoBig} alt="Logo" className="header__logo" />
				</div>
				<nav className="header__nav-box">
					<a href="#features" className="btn-text">
						Features
					</a>
					<a href="#solutions" className="btn-text">
						Solutions
					</a>
					<a href="#next" className="btn-text">
						What is next?
					</a>
					<a href="#coffee" className="btn-text">
						Contact us
					</a>
					<a
						href={COFFEE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-text-cta"
					>
						<Coffee width="20" height="20" fill="#fff" />
						Buy us a coffee
					</a>
				</nav>
			</header>

			{/* <!-- HERO --> */}
			<section className="hero">
				<div className="hero__box--content">
					<h1 className="heading-1">Join our guild of writers and essayists.</h1>
					<p className="text">
						Write short stories and essays and share it with the rest of the world.
					</p>
					<div className="hero__buttons-box">
						<Link to={REGISTER} className="btn-primary">
							Join us now
						</Link>
						<a
							href={URL}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-secondary"
						>
							Read stories
						</a>
					</div>
				</div>
				<div className="hero__box--img">
					<img src={hero2} alt="Hero" className="hero-img" />
				</div>
			</section>

			{/* <!-- FEATURES --> */}
			<section className="section u-margin-top-big" id="features">
				<hr className="line u-margin-bottom-big" />
				<h2 className="section-title">Features</h2>

				{/* <!-- EDITOR --> */}
				<div className="section__container">
					<div className="section__box">
						<picture className="section-img">
							<source srcSet={featureEditorM} media="(max-width: 56.25em)" />
							<img
								srcSet={featureEditor}
								alt="Footer Logo"
								className="section-img"
								src={featureEditor}
							/>
						</picture>
					</div>
					<div className="section__box--content">
						<h2 className="heading-2">We have a clean and simple editor.</h2>
						<p className="text">
							Minimalistic and powerful tool just for writing. It's like lightsaber
							for writers. Simple and efficent.
						</p>
						<ul className="small-list">
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Multiple pages</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Toolbar</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Autosave</p>
							</li>
						</ul>
						<Link to={REGISTER} className="btn-primary">
							Start writing now
						</Link>
					</div>
				</div>

				{/* <!-- SOCIAL --> */}
				<div className="section__container">
					<div className="section__box--ghost">
						<img src={featureSocialM} alt="Features" className="section-img" />
					</div>
					<div className="section__box--content">
						<h2 className="heading-2">Follow artists and collaborate with them.</h2>
						<p className="text">
							With help of guild members, you can shape your stories. Find and
							collaborate with graphic designers, translators, editors etc.
						</p>
						<ul className="small-list">
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Followers</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Likes and comments</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Collaboration</p>
							</li>
						</ul>
						<div className="section__buttons-box">
							<Link to={REGISTER} className="btn-primary">
								Follow now
							</Link>
						</div>
					</div>
					<div className="section__box--img">
						<img src={featureSocial} alt="Features" className="section-img" />
					</div>
				</div>

				{/* <!-- FEED --> */}
				<div className="section__container">
					<div className="section__box">
						<picture className="section-img">
							<source srcSet={featureFeedM} media="(max-width: 56.25em)" />
							<img
								srcSet={featureFeed}
								alt="Footer Logo"
								className="section-img"
								src={featureFeed}
							/>
						</picture>
					</div>
					<div className="section__box--content">
						<h2 className="heading-2">Read stories while you are waiting for bus.</h2>
						<p className="text">
							You like to read books? Stories? You can do that on your phone. If your
							bus arrives at the time, don't worry, you can save the story and read it
							later.
						</p>
						<ul className="small-list">
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Explore stories</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Saved stories</p>
							</li>
							<li className="small-list__item">
								<img
									src={featureIcon}
									alt="Solutions"
									className="small-list__img"
								/>
								<p className="text-list-small">Categories</p>
							</li>
						</ul>
						<div className="section__buttons-box">
							<a href={URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
								Read stories now
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- SOLUTIONS --> */}
			<section className="section" id="solutions">
				<hr className="line u-margin-bottom-big" />
				<h2 className="section-title u-margin-bottom-big">Solutions</h2>
				<div className="section__container">
					<div className="card">
						<img src={solFiction} alt="Solutions" className="card__img" />
						<div className="card__content">
							<h3 className="heading-3">Fiction & Fantasy</h3>
							<p className="text-small">
								Create your fantasy world and unique characters, places, languages,
								houses and religions. Find graphic designers, editors and artists
								who will help you build your world.
							</p>
						</div>
					</div>

					<div className="card">
						<img src={solNonfiction} alt="Solutions" className="card__img" />
						<div className="card__content">
							<h3 className="heading-3">Nonfiction & Essays</h3>
							<p className="text-small">
								Write your thoughts, ideas and concepts about philosophy, science,
								art and society. Share with guild members and readers and discuss
								topics you like.
							</p>
						</div>
					</div>

					<div className="card">
						<img src={solFanfiction} alt="Solutions " className="card__img" />
						<div className="card__content">
							<h3 className="heading-3">Fanfiction</h3>
							<p className="text-small">
								If you are fan of Star Wars, Witcher, A Song of Ice and Fire, you
								can write fanfiction stories. Be creative and open while you are
								exploring that worlds.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- WHAT IS NEXT --> */}
			<section className="section u-margin-bottom-big" id="next">
				<hr className="line u-margin-bottom-big" />
				<h2 className="heading-2">What is next?</h2>
				<p className="text">
					We are planning to create a lot of things in next months. You can see it here so
					you can know what you can expect.
				</p>
				<div className="section__container">
					<ul className="list">
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Chat and Messages</p>
						</li>
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Dark Side and Dark Mode</p>
						</li>
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Coins. A lot of coins.</p>
						</li>
					</ul>

					<ul className="list">
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Social Login</p>
						</li>
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Groups and small guilds</p>
						</li>
						<li className="list__item">
							<img src={nextWork} alt="Solutions" className="list__img" />
							<p className="text-list">Some of your ideas...</p>
						</li>
					</ul>
				</div>
			</section>

			{/* <!-- FEEDBACK --> */}
			<section className="hero u-margin-top-big" id="coffee">
				<div className="hero__box--content">
					<h1 className="heading-1">Share your ideas with us</h1>
					<p className="text">
						If you have suggestions and ideas about app, be free to contact us. We would
						like to create this platform with you. Be free to send us any idea you have
						and suggestions for features. Together we are building our guild of stories.
					</p>
					<a
						href="mailto:ideas@taleguild.com?subject=Your idea"
						className="btn-text-color"
					>
						ideas@taleguild.com
					</a>
				</div>
				<div className="hero__box--img">
					<img src={ideas} alt="Hero" className="feedback-img" />
				</div>
			</section>

			{/* <!-- BUY COFFEE --> */}
			<hr className="line u-margin-top-big" />
			<section className="cta u-margin-top-big">
				<h2 className="cta__heading">Support us</h2>
				<p className="cta__text">
					Taleguild is FREE. But, if you like it, please consider supporting us.
				</p>
				<a
					href={COFFEE_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="btn-secondary"
				>
					Buy us a coffee
				</a>
			</section>

			{/* <!-- FOOTER --> */}
			<footer className="footer u-margin-top-big">
				<img src={logoS} alt="Logo" className="footer__logo" />
				<nav className="footer__nav-box">
					<Link to={TERMS_OF_SERVICE} className="btn-text">
						Terms of service
					</Link>
					<Link to={PRIVACY_POLICY} className="btn-text">
						Privacy policy
					</Link>
				</nav>
				<p className="footer__copyright">© 2020 Taleguild - All Rights Reserved</p>
			</footer>
		</>
	);
}
