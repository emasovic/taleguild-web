import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';

import {HOME, PRIVACY_POLICY, TERMS_OF_SERVICE} from 'lib/routes';
import {emailRegExp} from 'lib/util';

import {registerUser} from 'redux/user';

import featureIcon from 'images/feature-icon.svg';
import logoBig from 'images/taleguild-logo-big.png';

export default function SignUp() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [repeatPassword, setRepeatPassword] = useState('');
	const [accepted, setAccepted] = useState(false);
	const history = useHistory();

	const dispatch = useDispatch();
	const op = useSelector(state => state.user.op);

	const validate = () => {
		const errors = [];

		!accepted && errors.push('You didnt accepted terms and conditions! \n');
		// password !== repeatPassword && errors.push('Passwords dont match!');
		!emailRegExp.test(email) && errors.push('Invalid email! \n');

		if (errors.length) {
			toast.error(errors.join('\n'));
			return false;
		}

		return true;
	};

	const submit = e => {
		e.preventDefault();
		if (validate()) {
			dispatch(registerUser({username, email, password}, history));
		}
	};

	const buttonClass = op ? 'register__btn disabled' : 'register__btn';
	return (
		<div>
			<header className="header">
				<div className="header__logo-box">
					<Link to={HOME}>
						<img src={logoBig} alt="Logo" className="header__logo" />
					</Link>
				</div>
				<nav className="header__nav-box">
					<Link to={HOME} target="_blank" className="btn-text-cta">
						Back to home
					</Link>
				</nav>
			</header>

			<section className="register">
				<div className="register__box--form">
					<h1 className="heading-3">Sign up</h1>
					<p className="text">Create your account by filling the form below.</p>
					<form className="register__form" onSubmit={submit}>
						<div className="register__input">
							<label htmlFor="username" className="register__label">
								Username
							</label>
							<input
								type="text"
								id="username"
								className="register__inputfield"
								placeholder="Enter unique username"
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</div>
						<div className="register__input">
							<label htmlFor="username" className="register__label">
								Email
							</label>
							<input
								type="text"
								id="email"
								className="register__inputfield"
								placeholder="What is your email address?"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="register__input">
							<label htmlFor="username" className="register__label">
								Password
							</label>
							<input
								type="password"
								id="password"
								className="register__inputfield"
								placeholder="Enter 6+ characters"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="small-list__item">
							<input
								type="checkbox"
								className="register__checkbox"
								checked={accepted}
								onChange={e => setAccepted(e.target.checked)}
							/>
							<p className="text-list-small">
								I agree to
								<Link
									to={TERMS_OF_SERVICE}
									target="_blank"
									className="register__links"
								>
									Terms of Service
								</Link>
								and
								<Link
									to={PRIVACY_POLICY}
									target="_blank"
									className="register__links"
								>
									Privacy Policy
								</Link>
							</p>
						</div>
						<a href="/#" onClick={submit} className={buttonClass}>
							Create account
						</a>
					</form>
				</div>

				<div className="register__box--content">
					<h1 className="heading-2">Write short stories for FREE</h1>
					<p className="text">
						Join us today and find people to help you create your own stories.
					</p>
					<ul className="small-list">
						<li className="small-list__item">
							<img src={featureIcon} alt="Solutions " className="small-list__img" />
							<p className="text-list-small">Clean text editor</p>
						</li>
						<li className="small-list__item">
							<img src={featureIcon} alt="Solutions " className="small-list__img" />
							<p className="text-list-small">Multiple pages</p>
						</li>
						<li className="small-list__item">
							<img src={featureIcon} alt="Solutions " className="small-list__img" />
							<p className="text-list-small">Unlimited storage and autosaving</p>
						</li>
						<li className="small-list__item">
							<img src={featureIcon} alt="Solutions " className="small-list__img" />
							<p className="text-list-small">
								Collaboration with other writers and artists
							</p>
						</li>
						<li className="small-list__item">
							<img src={featureIcon} alt="Solutions " className="small-list__img" />
							<p className="text-list-small">Simple and mobile responsive reading</p>
						</li>
					</ul>
				</div>
			</section>

			<footer className="footer u-margin-top-big">
				<p className="footer__copyright">© 2020 Taleguild - All Rights Reserved</p>
			</footer>
		</div>
	);
}
