"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-totebag.jpg";
import denimImage from "../assets/denim-source.jpg";
import wasteImage from "../assets/textile-waste.jpeg";
import toteFront from "../assets/totebag-front.jpg";
import toteAngle from "../assets/totebag-angle.jpg";
import processOne from "../assets/process-01.jpg";
import processTwo from "../assets/process-02.jpg";
import processThree from "../assets/process-03.jpg";
import processFour from "../assets/process-04.jpg";

const navItems = [
  ["about", "About"],
  ["material", "Material"],
  ["product", "Product"],
  ["process", "Process"],
  ["facts", "Facts"],
  ["story", "Story"],
];

const processSteps = [
  ["01", "Collect", "Unused or leftover jeans become our starting material.", processOne],
  ["02", "Prepare", "The denim is cleaned, sorted, and readied for a new life.", processTwo],
  ["03", "Cut", "Useful panels and pockets are carefully mapped and cut.", processThree],
  ["04", "Assemble", "Each piece is arranged to preserve the character of the fabric.", processFour],
  ["05", "Sew", "Stitch by stitch, the parts become one durable tote.", processThree],
  ["06", "Finished", "A practical everyday bag, carrying the story forward.", toteFront],
] as const;

const gallery = [
  [toteFront, "Front view", "A pocket with a past."],
  [toteAngle, "Side view", "Built to move with you."],
  [heroImage, "The finished piece", "One pair of jeans, a new purpose."],
] as const;

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: 0 },
    );
    sections.forEach((section) => section && observer.observe(section));
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jembar home">JEMBAR<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navItems.map(([id, label]) => (
            <a className={activeSection === id ? "active" : ""} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="nav-mark" href="#story" aria-label="Jump to the Jembar story">Scroll to explore <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Upcycled textile project / 2026</p>
          <h1><span>JEMBAR</span><br />Denim,<br /><em>reframed.</em></h1>
          <p className="hero-intro">Unused jeans, carefully reworked into a reusable tote bag with a story worth carrying.</p>
          <a className="button button-dark" href="#process">Discover the process <Arrow /></a>
        </div>
        <div className="hero-image"><Image src={heroImage} alt="Finished upcycled denim tote bag" fill priority sizes="(max-width: 700px) 100vw, 58vw" /></div>
        <div className="hero-note"><span>01</span><span>From something<br />left behind</span></div>
      </section>

      <section className="intro-section reveal" id="about">
        <div><SectionLabel>01 / About Jembar</SectionLabel><h2>A second life,<br /><em>made by hand.</em></h2></div>
        <div className="intro-body"><p>JEMBAR is the group behind an experiment in making useful things from what already exists. We transform unused and leftover jeans into a tote bag that feels familiar, durable, and entirely new.</p><p>It is a small product with a wider question: what else can materials become when we look at them differently?</p><a className="text-link" href="#material">Follow the material <Arrow /></a></div>
      </section>

      <section className="material-section reveal" id="material">
        <div className="material-image"><Image src={denimImage} alt="A pair of unused blue jeans prepared for upcycling" fill sizes="(max-width: 700px) 100vw, 42vw" /></div>
        <div className="material-copy"><SectionLabel>02 / Material origin</SectionLabel><h2>Before the bag,<br /><em>there was denim.</em></h2><p className="placeholder">[Sumber kain jeans akan ditambahkan]</p><p>The origin of this material will be documented here as the story grows. For now, every visible seam reminds us that a garment can be more than one thing in its lifetime.</p></div>
      </section>

      <section className="product-section reveal" id="product">
        <div className="section-heading"><div><SectionLabel>03 / The product</SectionLabel><h2>Meet the everyday<br />carry.</h2></div><p>Upcycled Denim Tote Bag<br /><span>One object, many journeys.</span></p></div>
        <div className="product-grid">{gallery.map(([image, label, copy], index) => <figure className={index === 2 ? "gallery-item featured" : "gallery-item"} key={label}><div className="image-frame"><Image src={image} alt={label} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><figcaption><span>{label}</span><span>{copy}</span></figcaption></figure>)}</div>
      </section>

      <section className="process-section reveal" id="process">
        <div className="section-heading process-heading"><div><SectionLabel>04 / Making process</SectionLabel><h2>From worn<br /><em>to wanted.</em></h2></div><p>Six steps transform a familiar material into something ready for daily use.</p></div>
        <div className="process-grid">{processSteps.map(([number, title, copy, image]) => <article className="process-card" key={number}><div className="process-number">{number}</div><div className="process-photo"><Image src={image} alt={`${title} stage of making the tote bag`} fill sizes="(max-width: 700px) 80vw, 18vw" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="facts-section reveal" id="facts">
        <div className="facts-image"><Image src={wasteImage} alt="Hands cutting denim during the making process" fill sizes="(max-width: 700px) 100vw, 48vw" /></div>
        <div className="facts-copy"><SectionLabel>05 / Why it matters</SectionLabel><p className="display-statement">Waste is not<br /><em>the end</em> of a<br />material’s story.</p><p className="placeholder">[Fakta limbah tekstil akan ditambahkan]</p><p>Verified textile waste facts will live here, giving context to the small, practical choice behind every JEMBAR tote.</p></div>
      </section>

      <section className="story-section reveal" id="story">
        <div className="story-copy"><SectionLabel>06 / Scan the story</SectionLabel><h2>From physical<br />to digital.</h2><p>Every tote will carry a QR Code that opens this story: the denim’s origin, the making process, textile waste facts, documentation, production video, and the people behind JEMBAR.</p><div className="story-flow"><span>PHYSICAL<br />TOTE BAG</span><b>↓</b><span>QR<br />CODE</span><b>↓</b><span>JEMBAR<br />WEBSITE</span></div></div>
        <div className="qr-placeholder"><div className="qr-box"><span>QR</span><span>CODE</span></div><p>QR CODE<br /><small>Final code to be added after deployment</small></p></div>
      </section>

      <section className="future-section reveal"><div className="section-heading"><div><SectionLabel>07 / The people</SectionLabel><h2>Made together.</h2></div><p>The people and documentation will be added as the project comes together.</p></div><div className="member-grid">{["01", "02", "03", "04"].map((number) => <article className="member-card" key={number}><div className="member-photo"><span>[Foto Anggota]</span></div><p>[Nama Anggota]</p><span>[Peran]</span></article>)}</div></section>

      <section className="video-section reveal"><SectionLabel>08 / Production video</SectionLabel><div className="video-placeholder"><span className="play-icon">▶</span><p>[Video proses pembuatan akan ditambahkan]</p><small>Production documentation / coming soon</small></div></section>

      <section className="message-section reveal"><SectionLabel>09 / A note from Jembar</SectionLabel><p className="message">“Small changes in what we make<br />can change how we see <em>what matters.</em>”</p><p className="placeholder">[Pesan kelompok akan ditambahkan]</p></section>

      <footer className="site-footer"><div><a className="wordmark" href="#top">JEMBAR<span>.</span></a><p>Upcycled Denim Tote Bag</p></div><div className="footer-links">{navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-end"><p>Made from what already exists.</p><span>© JEMBAR / 2026</span></div></footer>
    </main>
  );
}
