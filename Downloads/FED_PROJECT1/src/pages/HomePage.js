import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>♻️ Online Recycling Marketplace</h1>
          <p className={styles.tagline}>Transform Waste into Rewards</p>
          <div className={styles.cta}>
            <Link to="/user/register" className={styles.btnPrimary}>
              Get Started
            </Link>
            {/* <Link to="/user/login" className={styles.btnSecondary}>
              Login
            </Link> */}
          </div>
        </section>

        <section className={styles.section}>
          <h2>What is Recycling Marketplace?</h2>
          <div className={styles.content}>
            <p>
              Our Online Recycling Marketplace is a platform that connects individuals 
              who want to recycle their waste materials with recycling centers and 
              organizations. Instead of throwing away recyclable items, users can post 
              them on our platform, and when they're picked up and processed, users 
              earn reward points.
            </p>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <div className={styles.icon}>📦</div>
                <h3>Easy Posting</h3>
                <p>Post your recyclable items with just a few clicks</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>🚚</div>
                <h3>Pickup Service</h3>
                <p>Schedule pickup for your items</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}>⭐</div>
                <h3>Reward Points</h3>
                <p>Earn points for every item recycled</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How It Reduces Landfill Waste</h2>
          <div className={styles.content}>
            <p>
              Landfills are filling up rapidly, and improper waste disposal contributes 
              significantly to environmental pollution. Our marketplace helps reduce landfill 
              waste by:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Diverting recyclables:</strong> Items that would normally end up in 
                landfills are collected and sent to proper recycling facilities.
              </li>
              <li>
                <strong>Encouraging participation:</strong> The reward system incentivizes 
                people to recycle more, creating a positive feedback loop.
              </li>
              <li>
                <strong>Raising awareness:</strong> By making recycling easy and rewarding, 
                we educate users about the importance of proper waste management.
              </li>
              <li>
                <strong>Supporting circular economy:</strong> Materials are reused and 
                repurposed instead of being discarded, reducing the need for new raw materials.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>How Users Get Reward Points</h2>
          <div className={styles.content}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Post Your Items</h3>
                <p>Upload photos and details of your recyclable items (Paper, Plastic, Metal, E-waste)</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Get Approved</h3>
                <p>Admin reviews and approves your items for pickup</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Pickup & Processing</h3>
                <p>Your items are picked up and sent to recycling facilities</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Earn Points</h3>
                <p>Once marked as completed, you receive reward points based on the item type and quantity</p>
              </div>
            </div>
            <div className={styles.pointsInfo}>
              <p>
                <strong>Point Values:</strong> Different categories have different point values. 
                E-waste typically earns the most points (100+), followed by Metal (20-50), 
                Plastic (20-40), and Paper (10-50) depending on quantity.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Categories We Accept</h2>
          <div className={styles.categories}>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>📄</div>
              <h3>Paper</h3>
              <p>Newspapers, magazines, cardboard, office paper</p>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🥤</div>
              <h3>Plastic</h3>
              <p>Bottles, containers, bags, packaging materials</p>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>🔩</div>
              <h3>Metal</h3>
              <p>Aluminum cans, steel, copper, scrap metal</p>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>💻</div>
              <h3>E-waste</h3>
              <p>Electronics, computers, phones, batteries</p>
            </div>
          </div>
        </section>

        {/* <section className={styles.section}>
          <div className={styles.footerSection}>
            <h2>Ready to Start Recycling?</h2>
            <p>Join thousands of users making a difference</p>
            <Link to="/user/register" className={styles.btnPrimary}>
              Create Account
            </Link>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default HomePage;

