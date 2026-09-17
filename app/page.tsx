"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero-totebag.jpg";
import wasteImage from "../assets/textile-waste.jpeg";
import denimImage from "../assets/denim-source.jpg";
import toteFront from "../assets/totebag-front.jpg";
import toteAngle from "../assets/totebag-angle.jpg";
import processOne from "../assets/process-01.jpg";
import processTwo from "../assets/process-02.jpg";
import processThree from "../assets/process-03.jpg";
import processFour from "../assets/process-04.jpg";
import finishing from "../assets/finishing.jpg";
import digitalisasi from "../assets/digitalisasi.png";
import aldo from "../assets/team/aldo-anggota.jpg";
import alia from "../assets/team/alia-anggota.jpg";
import anggun from "../assets/team/anggun-anggota.jpg";
import bunga from "../assets/team/bunga-anggota.jpg";
import chikal from "../assets/team/chikal-anggota.jpg";
import deris from "../assets/team/deris-anggota.jpg";
import dina from "../assets/team/dina-anggota.jpg";
import dinar from "../assets/team/dinar-anggota.jpg";
import fachry from "../assets/team/fachry-anggota.jpg";
import fardhan from "../assets/team/Fardhan-Ketua.jpg";
import ghofur from "../assets/team/ghofur-anggota.jpg";
import habi from "../assets/team/habi-anggota.jpg";
import ihwan from "../assets/team/ihwan-anggota.jpg";
import pipit from "../assets/team/pipit-anggota.jpg";
import pirda from "../assets/team/pirda-anggota.jpg";
import rafi from "../assets/team/rafi-anggota.jpg";
import raisya from "../assets/team/raisya-anggota.jpg";
import refan from "../assets/team/refan-anggota.png";
import rizki from "../assets/team/rizki-anggota.jpg";
import wandi from "../assets/team/wandi-anggota.jpg";
import zalfa from "../assets/team/zalfa-anggota.jpg";
import zulian from "../assets/team/zulian-anggota.png";

const navItems = [
  { id: "tentang", label: "Tentang" },
  { id: "masalah", label: "Masalah" },
  { id: "proses", label: "Proses" },
  { id: "teknologi", label: "Teknologi" },
  { id: "produk", label: "Produk" },
  { id: "dampak", label: "Dampak" },
  { id: "tim", label: "Tim" },
];

const aboutPoints = [
  { number: "01", title: "Produk", text: "Tote Bag" },
  { number: "02", title: "Material", text: "Kain Sisa" },
  { number: "03", title: "Teknologi", text: "Digital" },
];

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image?: StaticImageData;
};

const processSteps: ProcessStep[] = [
  { number: "01", title: "PILIH", description: "Memilih kain sisa yang masih layak digunakan.", image: processOne },
  { number: "02", title: "SELEKSI", description: "Menentukan bahan berdasarkan kondisi dan kesesuaiannya.", image: processTwo },
  { number: "03", title: "DESAIN", description: "Menentukan bentuk dan kombinasi kain untuk tote bag.", image: processThree },
  { number: "04", title: "BUAT", description: "Memotong, menyusun, dan menjahit bahan.", image: processFour },
  { number: "05", title: "FINISHING", description: "Merapikan hasil akhir agar siap digunakan.", image: finishing },
  { number: "06", title: "DIGITALISASI", description: "Mengembangkan identitas dan pengalaman digital untuk mendukung produk.", image: digitalisasi },
];

const impactCards = [
  { label: "LINGKUNGAN", text: "Memanfaatkan kain sisa agar memiliki fungsi baru." },
  { label: "FUNGSI", text: "Menghasilkan tote bag yang dapat digunakan kembali dalam aktivitas sehari-hari." },
  { label: "TEKNOLOGI", text: "Menghubungkan produk dengan informasi digital." },
];

const teamMembers = [
  { name: "Fardhan", role: "Ketua", image: fardhan },
  { name: "Aldo", role: "Anggota", image: aldo },
  { name: "Alia", role: "Anggota", image: alia },
  { name: "Anggun", role: "Anggota", image: anggun },
  { name: "Bunga", role: "Anggota", image: bunga },
  { name: "Chikal", role: "Anggota", image: chikal },
  { name: "Deris", role: "Anggota", image: deris },
  { name: "Dina", role: "Anggota", image: dina },
  { name: "Dinar", role: "Anggota", image: dinar },
  { name: "Fachry", role: "Anggota", image: fachry },
  { name: "Ghofur", role: "Anggota", image: ghofur },
  { name: "Habi", role: "Anggota", image: habi },
  { name: "Ihwan", role: "Anggota", image: ihwan },
  { name: "Pipit", role: "Anggota", image: pipit },
  { name: "Pirda", role: "Anggota", image: pirda },
  { name: "Rafi", role: "Anggota", image: rafi },
  { name: "Raiya", role: "Anggota", image: raisya },
  { name: "Refan", role: "Anggota", image: refan },
  { name: "Rizki", role: "Anggota", image: rizki },
  { name: "Wandi", role: "Anggota", image: wandi },
  { name: "Zalfa", role: "Anggota", image: zalfa },
  { name: "Zulian", role: "Anggota", image: zulian },
  { name: "Firly", role: "Anggota", image: null, placeholder: "Guest" },
  { name: "Fabian", role: "Anggota", image: null, placeholder: "Guest" },
];

const productGallery = [
  { image: toteFront, title: "Depan", caption: "Tampilan yang sederhana dan fungsional." },
  { image: toteAngle, title: "Sisi", caption: "Bentuk yang mudah dibawa dalam keseharian." },
  { image: heroImage, title: "Akhir", caption: "Kain sisa yang menemukan fungsi baru." },
] as const;

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("tentang");

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -60%", threshold: 0.1 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="#top" className="brand-wordmark" aria-label="Beranda KainKita">KainKita</a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Buka navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Navigasi utama">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">KainKita • JEMBAR</p>
          <h1>
            KainKita
            <span>Tote Bag</span>
          </h1>
          <p className="hero-tag">From Waste to Worth</p>
          <p className="hero-text">
            Memberi kain sisa kesempatan untuk menjadi sesuatu yang kembali berguna.
          </p>
          <a href="#tentang" className="primary-button">
            Jelajahi Cerita <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hero-media reveal">
          <Image
            src={heroImage}
            alt="Tote bag KainKita dari kain sisa"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 52vw"
          />
        </div>
      </section>

      <section className="section about-section reveal" id="tentang">
        <div className="section-heading">
          <SectionLabel>Dari Sisa Menjadi Bermakna</SectionLabel>
          <p className="section-kicker">Apa yang kami buat?</p>
        </div>

        <div className="intro-grid">
          <div className="story-panel">
            <p>
              KainKita memanfaatkan kain sisa yang masih layak untuk diolah menjadi tote bag
              yang dapat digunakan kembali.
            </p>
            <p>
              Proyek ini menggabungkan pemanfaatan kain sisa, produk fungsional, dan teknologi
              digital dalam satu cerita yang praktis dan berkelanjutan.
            </p>
            <div className="story-visual">
              <Image
                src={denimImage}
                alt="Material denim yang masih layak dimanfaatkan"
                fill
                sizes="(max-width: 700px) 100vw, 28vw"
              />
            </div>
          </div>

          <div className="info-points">
            {aboutPoints.map(({ number, title, text }) => (
              <div key={number} className="info-point">
                <span className="info-number">{number}</span>
                <div>
                  <p className="info-title">{title}</p>
                  <p className="info-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section image-break reveal" id="masalah">
        <div className="problem-visual">
          <div className="problem-image">
            <Image src={wasteImage} alt="Kain sisa yang belum dimanfaatkan" fill sizes="(max-width: 700px) 100vw, 42vw" />
          </div>
          <div className="problem-copy">
            <SectionLabel>Kenapa Kain Sisa?</SectionLabel>
            <div className="before-after">
              <div className="before-card">
                <span className="mini-label">SEBELUM</span>
                <h3>Kain Sisa</h3>
                <p>Tidak terpakai atau tersimpan dan berpotensi menjadi limbah.</p>
              </div>

              <div className="arrow-column" aria-hidden="true">
                <span className="arrow-line">→</span>
              </div>

              <div className="after-card">
                <span className="mini-label">SESUDAH</span>
                <h3>KainKita Tote Bag</h3>
                <p>Produk fungsional yang dapat digunakan kembali dengan cerita digital di dalamnya.</p>
              </div>
            </div>
            <p className="problem-quote">Kami percaya sesuatu yang tersisa masih bisa memiliki cerita baru.</p>
          </div>
        </div>
      </section>

      <section className="section process-section reveal" id="proses">
        <div className="section-heading process-heading">
          <SectionLabel>Dari Kain Sisa Menjadi Tote Bag</SectionLabel>
          <p className="section-kicker">Bagaimana kain sisa menjadi tote bag?</p>
        </div>

        <div className="process-grid">
          {processSteps.map(({ number, title, description, image }) => {
            const isDigital = title === "DIGITALISASI";

            return (
              <article key={title} className={`process-card ${isDigital ? "is-digital" : ""}`}>
                <span className="process-step">{number}</span>
                <div className="process-image">
                  {image ? (
                    <Image src={image} alt={`${title} proses pembuatan tote bag`} fill sizes="(max-width: 700px) 100vw, 18vw" />
                  ) : null}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section technology-section reveal" id="teknologi">
        <div className="technology-copy">
          <SectionLabel>Teknologi di Balik KainKita</SectionLabel>
          <h2>Produk Fisik, Informasi Digital, Pengalaman yang Lebih Utuh</h2>
          <p>
            Teknologi menjadi bagian dari cara KainKita memperkenalkan cerita, proses, dan
            informasi produk secara digital. Produk fisik tidak berdiri sendiri; ia menjadi pintu
            masuk ke pengalaman yang lebih lengkap dan mudah dipahami.
          </p>
        </div>

        <div className="technology-flow" aria-label="Diagram teknologi KainKita">
          <div className="flow-step">
            <span className="flow-label">PRODUK FISIK</span>
          </div>
          <span className="flow-arrow desktop-arrow" aria-hidden="true">
            →
          </span>
          <span className="flow-arrow mobile-arrow" aria-hidden="true">
            ↓
          </span>
          <div className="flow-step">
            <span className="flow-label">INFORMASI DIGITAL</span>
          </div>
          <span className="flow-arrow desktop-arrow" aria-hidden="true">
            →
          </span>
          <span className="flow-arrow mobile-arrow" aria-hidden="true">
            ↓
          </span>
          <div className="flow-step">
            <span className="flow-label">PENGALAMAN PENGGUNA</span>
          </div>
        </div>
      </section>

      <section className="section product-section reveal" id="produk">
        <div className="section-heading product-heading">
          <SectionLabel>Kenali KainKita</SectionLabel>
          <p className="section-kicker">Apa yang kami hasilkan?</p>
        </div>

        <div className="product-feature">
          <div className="product-visual">
            <Image src={toteFront} alt="Tote bag KainKita" fill sizes="(max-width: 700px) 100vw, 48vw" />
          </div>

          <div className="product-detail">
            <div className="detail-block">
              <span>Material</span>
              <strong>Kain Sisa</strong>
            </div>
            <div className="detail-block">
              <span>Produk</span>
              <strong>Reusable Tote Bag</strong>
            </div>
            <div className="detail-block">
              <span>Teknologi</span>
              <strong>Pengalaman Digital</strong>
            </div>

            <a href="#teknologi" className="secondary-button">
              Jelajahi Cerita <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="product-gallery">
          {productGallery.map(({ image, title, caption }) => (
            <figure key={title} className="gallery-item">
              <div className="gallery-image">
                <Image src={image} alt={`${title} tampilan KainKita`} fill sizes="(max-width: 700px) 100vw, 24vw" />
              </div>
              <figcaption>
                <span>{title}</span>
                <small>{caption}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section impact-section reveal" id="dampak">
        <div className="section-heading impact-heading">
          <SectionLabel>Dampak Kecil, Makna Berarti</SectionLabel>
          <p className="section-kicker">Apa nilai yang ingin kami berikan?</p>
        </div>

        <div className="impact-grid">
          {impactCards.map(({ label, text }) => (
            <article key={label} className="impact-card">
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section team-section reveal" id="tim">
        <div className="team-header">
          <SectionLabel>Di Balik KainKita</SectionLabel>
          <div>
            <p className="team-community">Kelompok JEMBAR</p>
            <p className="team-campus">PKKMB</p>
            <p className="team-campus">Institut Teknologi Garut</p>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map(({ name, role, image, placeholder }) => (
            <article key={name} className="team-card">
              <div className="team-photo">
                {image ? (
                  <Image src={image} alt={`Foto ${name}`} fill sizes="(max-width: 700px) 100vw, 18vw" />
                ) : (
                  <div className="team-placeholder" aria-label={`${name} guest placeholder`}>
                    <span>{placeholder}</span>
                  </div>
                )}
              </div>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section closing-section reveal">
        <div className="closing-grid">
          <div>
            <SectionLabel>From Waste to Worth</SectionLabel>
            <h2>
              FROM WASTE
              <span>TO WORTH.</span>
            </h2>
            <p className="closing-note">[Pesan kelompok akan ditambahkan]</p>
          </div>
          <div className="closing-meta">
            <p>KainKita Tote Bag</p>
            <p>Made with purpose. Connected by technology.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="brand-wordmark footer-wordmark">JEMBAR</p>
          <p>KainKita Tote Bag</p>
        </div>

        <div className="footer-tagline">
          Memberi kain sisa kesempatan untuk memiliki fungsi dan cerita baru.
        </div>
      </footer>
    </main>
  );
}
