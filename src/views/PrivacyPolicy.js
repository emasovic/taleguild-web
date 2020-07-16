import React from 'react';
import {Link} from 'react-router-dom';

import {TERMS_OF_SERVICE, HOME} from 'lib/routes';

import logoBig from 'images/taleguild-logo-big.png';

export default function PrivacyPolicy() {
	return (
		<>
			<header className="header">
				<div className="header__logo-box">
					<Link to={HOME}>
						<img src={logoBig} alt="Logo" className="header__logo" />
					</Link>
				</div>
				<nav className="header__nav-box">
					<Link to={TERMS_OF_SERVICE} className="btn-text">
						Terms of Service
					</Link>
					<Link to={HOME} target="_blank" className="btn-text-cta">
						Back to home
					</Link>
				</nav>
			</header>

			<section className="privacy">
				<h1 className="heading-2">Privacy Policy</h1>
				<p className="text">
					At Taleguild, accessible at taleguild.com, one of our main priorities is the
					privacy of our visitors. This Privacy Policy document contains types of
					information that is collected and recorded by Taleguild and how we use it. If
					you have additional questions or require more information about our Privacy
					Policy, do not hesitate to contact us through email at contact@taleguild.com
					This privacy policy applies only to our online activities and is valid for
					visitors to our website with regards to the information that they shared and/or
					collect in Taleguild. This policy is not applicable to any information collected
					offline or via channels other than this website. By using our website, you
					hereby consent to our Privacy Policy and agree to its terms.
				</p>

				<h2 className="heading-3">Information we collect</h2>
				<p className="text">
					The personal information that you are asked to provide, and the reasons why you
					are asked to provide it, will be made clear to you at the point we ask you to
					provide your personal information. If you contact us directly, we may receive
					additional information about you such as your name, email address, phone number,
					the contents of the message and/or attachments you may send us, and any other
					information you may choose to provide. When you register for an Account, we may
					ask for your contact information, including items such as name, company name,
					address, email address, and telephone number. Currently (July 2020) we require
					your email address, but in the future, we may ask for additional information.
					When that happens, you will receive email about updates of Privacy Policy and
					Terms of Service. We will use your email address so that we can: Communicate
					with you, either directly or through one of our partners, including for customer
					service, to provide you with updates and other information relating to the
					webste, and for marketing and promotional purposes; Send you emails.
				</p>

				<h2 className="heading-3">Log Files</h2>
				<p className="text">
					Taleguild follows a standard procedure of using log files. These files log
					visitors when they visit websites. All hosting companies do this and a part of
					hosting services' analytics. The information collected by log files include
					internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
					date and time stamp, referring/exit pages, and possibly the number of clicks.
					These are not linked to any information that is personally identifiable. The
					purpose of the information is for analyzing trends, administering the site,
					tracking users' movement on the website, and gathering demographic information.
				</p>

				<h2 className="heading-3">GDPR Privacy Policy (Data Protection Rights)</h2>
				<p className="text">
					We would like to make sure you are fully aware of all of your data protection
					rights. Every user is entitled to the following: The right to access – You have
					the right to request copies of your personal data. We may charge you a small fee
					for this service. The right to rectification – You have the right to request
					that we correct any information you believe is inaccurate. You also have the
					right to request that we complete the information you believe is incomplete. The
					right to erasure – You have the right to request that we erase your personal
					data, under certain conditions. The right to restrict processing – You have the
					right to request that we restrict the processing of your personal data, under
					certain conditions. The right to object to processing – You have the right to
					object to our processing of your personal data, under certain conditions. The
					right to data portability – You have the right to request that we transfer the
					data that we have collected to another organization, or directly to you, under
					certain conditions. If you make a request, we have one month to respond to you.
					If you would like to exercise any of these rights, please contact us.
				</p>

				<h2 className="heading-3">Children's Information</h2>
				<p className="text">
					Another part of our priority is adding protection for children while using the
					internet. We encourage parents and guardians to observe, participate in, and/or
					monitor and guide their online activity. Taleguild does not knowingly collect
					any Personal Identifiable Information from children under the age of 13. If you
					think that your child provided this kind of information on our website, we
					strongly encourage you to contact us immediately and we will do our best efforts
					to promptly remove such information from our records.
				</p>

				<h2 className="heading-3">What can other Taleguild users see?</h2>
				<p className="text">
					Our Services are designed to help you share information with the Taleguild
					community. Any personal information that you voluntarily choose to include in a
					publicly accessible area of the Service will be available to anyone who has
					access to that content (including other Taleguild users), such as your username,
					name, the description you create, as well as the messages and comments you post,
					whether on your profile, or to other users, people you follow, stories you
					write, and many other bits of information that result from your use of the
					Services.
				</p>
			</section>
		</>
	);
}
