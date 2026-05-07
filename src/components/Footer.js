import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
import { Cormorant } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Footer() {
  return (
    <footer className="iedc-footer">
      <div className="iedc-footer-inner">
        <div className="iedc-footer-top">
          <div className="iedc-brand">
            <img
              src="/logos/iedc.jpeg"
              alt="IEDC Logo"
              className="iedc-main-logo"
            />

            <p className={`iedc-tagline ${cormorant.className}`}>
              Innovate. Lead. Inspire.
            </p>
          </div>

          <FooterColumn
            title="Community"
            links={[
  { label: "Collaborations", href: "/#collaborations" },
  { label: "IEDC Stories", href: "/#iedc-stories" },
  { label: "IEDC Events", href: "/#iedc-events" },
  { label: "IEDC TV", href: "/#iedc-tv" },
]}
          />

          <FooterColumn
  title="Get Involved"
  links={[
    { label: "Become a Member", href: "/get-involved/become-member" },
    { label: "Pitch Your Idea", href: "/get-involved/pitch-your-idea" },
    { label: "Partner With Us", href: "/get-involved/partner-with-us" },
    { label: "Volunteer", href: "/get-involved/volunteer" },
  ]}
/>

          <FooterColumn
title="Resources"
links={[
  { label: "News", href: "/news" },
  { label: "Startup Showcase", href: "/#student-startups" },
  { label: "Our Mission", href: "/#our-mission" },
  { label: "FAQs", href: "/faqs" },
  { label: "Watch Live", href: "/live" },
]}
/>

          <div className="iedc-column iedc-empty-column"></div>
        </div>

        <div className="iedc-divider" />

        <div className="iedc-footer-bottom">
          <div>
            <p>© 2026 IEDC Saint Berchmans College</p>

            <div className="iedc-affiliations">
              <span>In association with</span>

              <div className="iedc-logos">
                <a
                  href="https://sbcollege.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/logos/sb.jpeg" alt="SB College Logo" />
                </a>

                <a
                  href="https://startupmission.kerala.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/logos/ksum.jpeg" alt="KSUM Logo" />
                </a>
              </div>
            </div>
          </div>

<div className="iedc-socials">
  <a
    href="/contact#linkedin"
    className="social-icon linkedin"
    aria-label="IEDC SB College on LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="/contact#instagram"
    className="social-icon instagram"
    aria-label="IEDC SB College on Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="/contact#facebook"
    className="social-icon facebook"
    aria-label="IEDC SB College on Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="/contact#email"
    className="social-icon email"
    aria-label="Email IEDC SB College"
  >
    <FaEnvelope />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="iedc-column">
      <h3>{title}</h3>

      {links.map((link) =>
        typeof link === "string" ? (
          <p key={link}>{link}</p>
        ) : (
          <Link key={link.href} href={link.href}>
      {link.label}
    </Link>
        )
      )}
    </div>
  );
}