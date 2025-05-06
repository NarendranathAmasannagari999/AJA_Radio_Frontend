import React, { useState, useEffect } from 'react';
import styles from './RadioLandingPage.module.css';
import { FaPlay, FaPause, FaRandom, FaUsers, FaMicrophone, FaNewspaper, FaGlobe, FaMapMarkerAlt, FaFutbol, FaSmile, FaRegCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { GiSoundWaves, GiMicrophone, GiRadioTower } from 'react-icons/gi';
import { motion } from 'framer-motion';

const RadioLandingPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentShow, setCurrentShow] = useState(null);
  const [groups, setGroups] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [activeTab, setActiveTab] = useState('live');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Generate mock data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Current show data
      setCurrentShow({
        title: "Morning Buzz with AJA Team",
        team: [
          { name: "Alex Johnson", role: "RJ", group: "Team Alpha" },
          { name: "Sam Wilson", role: "National News", group: "Team Beta" },
          { name: "Priya Patel", role: "Regional News", group: "Team Gamma" },
          { name: "Jamie Smith", role: "Sports", group: "Team Delta" },
          { name: "Taylor Brown", role: "Entertainment", group: "Team Omega" }
        ],
        currentSegment: "Entertainment News",
        nextSegment: "Daily Riddle in 5 minutes"
      });

      // Office groups data
      setGroups([
        { 
          name: "Team Alpha", 
          members: ["Alex Johnson", "Casey Lee", "Jordan Taylor", "Morgan Blake", "Riley Smith", "Taylor Swift"],
          nextShow: "Tomorrow, 9:00 AM"
        },
        { 
          name: "Team Beta", 
          members: ["Sam Wilson", "Jamie Fox", "Drew Barry", "Pat Johnson", "Chris Evans", "Emma Stone"],
          nextShow: "Wednesday, 2:00 PM"
        },
        { 
          name: "Team Gamma", 
          members: ["Priya Patel", "Amit Shah", "Neha Kumar", "Raj Patel", "Sunita Rao", "Vijay Singh"],
          nextShow: "Thursday, 11:00 AM"
        },
        { 
          name: "Team Delta", 
          members: ["Jamie Smith", "Ryan Reynolds", "Blake Lively", "Tom Hardy", "Natalie Portman", "Chris Hemsworth"],
          nextShow: "Friday, 3:00 PM"
        },
        { 
          name: "Team Omega", 
          members: ["Taylor Brown", "Emma Watson", "Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Bonnie Wright"],
          nextShow: "Next Monday, 10:00 AM"
        }
      ]);

      // Weekly schedule
      setSchedule([
        { day: "Monday", time: "9:00 AM", show: "Morning Buzz", team: "Team Alpha" },
        { day: "Tuesday", time: "2:00 PM", show: "Tech Talk", team: "Team Beta" },
        { day: "Wednesday", time: "11:00 AM", show: "News Hour", team: "Team Gamma" },
        { day: "Thursday", time: "4:00 PM", show: "Entertainment Now", team: "Team Delta" },
        { day: "Friday", time: "3:00 PM", show: "Fun Friday", team: "Team Omega" }
      ]);
    }, 800);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const generateRandomTeam = () => {
    alert("Generating new random team for next show! This would call your API in production.");
  };

  const renderRoleIcon = (role) => {
    switch(role) {
      case 'RJ': return <FaMicrophone className={styles.roleIcon} />;
      case 'National News': return <FaGlobe className={styles.roleIcon} />;
      case 'Regional News': return <FaMapMarkerAlt className={styles.roleIcon} />;
      case 'Sports': return <FaFutbol className={styles.roleIcon} />;
      case 'Entertainment': return <FaNewspaper className={styles.roleIcon} />;
      case 'Riddle Master': return <FaSmile className={styles.roleIcon} />;
      default: return <FaUsers className={styles.roleIcon} />;
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            <GiRadioTower className={styles.logoIcon} />
            <span>AJA Radio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <button onClick={() => { setActiveTab('live'); scrollToSection('live-section'); }}>
              Live
            </button>
            <button onClick={() => { setActiveTab('schedule'); scrollToSection('live-section'); }}>
              Schedule
            </button>
            <button onClick={() => { setActiveTab('teams'); scrollToSection('live-section'); }}>
              Teams
            </button>
            <button onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </button>
            <button onClick={() => scrollToSection('cta-section')}>
              Join Us
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileNavLinks}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button onClick={() => { setActiveTab('live'); scrollToSection('live-section'); setIsMenuOpen(false); }}>
              Live
            </button>
            <button onClick={() => { setActiveTab('schedule'); scrollToSection('live-section'); setIsMenuOpen(false); }}>
              Schedule
            </button>
            <button onClick={() => { setActiveTab('teams'); scrollToSection('live-section'); setIsMenuOpen(false); }}>
              Teams
            </button>
            <button onClick={() => { scrollToSection('how-it-works'); setIsMenuOpen(false); }}>
              How It Works
            </button>
            <button onClick={() => { scrollToSection('cta-section'); setIsMenuOpen(false); }}>
              Join Us
            </button>
          </motion.div>
        )}
      </nav>

      {/* Animated Header */}
      <header className={styles.header}>
        <motion.div 
          className={styles.logoContainer}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <GiRadioTower className={styles.logoIcon} />
          <div>
            <h1 className={styles.logoText}>AJA Radio</h1>
            <p className={styles.tagline}>Your Office Radio Culture</p>
          </div>
        </motion.div>
        
        <motion.div
          className={styles.headerWave}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Live Show Section */}
        <section id="live-section" className={styles.liveSection}>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'live' ? styles.active : ''}`}
              onClick={() => setActiveTab('live')}
            >
              Live Now
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'schedule' ? styles.active : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'teams' ? styles.active : ''}`}
              onClick={() => setActiveTab('teams')}
            >
              Teams
            </button>
          </div>

          {activeTab === 'live' && currentShow && (
            <motion.div
              className={styles.liveShow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.showHeader}>
                <h2>{currentShow.title}</h2>
                <div className={styles.audioControls}>
                  <button 
                    className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
                    onClick={togglePlay}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                    {isPlaying ? " PAUSE" : " LISTEN LIVE"}
                  </button>
                  <div className={styles.showStatus}>
                    <span className={styles.currentSegment}>Now: {currentShow.currentSegment}</span>
                    <span className={styles.nextSegment}>Next: {currentShow.nextSegment}</span>
                  </div>
                </div>
              </div>

              <div className={styles.showTeam}>
                <h3>Today's Team</h3>
                <div className={styles.teamGrid}>
                  {currentShow.team.map((member, index) => (
                    <motion.div 
                      key={index}
                      className={`${styles.teamMember} ${member.role === 'RJ' ? styles.rj : ''}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={styles.memberRole}>
                        {renderRoleIcon(member.role)}
                        <span>{member.role}</span>
                      </div>
                      <div className={styles.memberInfo}>
                        <h4>{member.name}</h4>
                        <p>{member.group}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div
              className={styles.scheduleContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Weekly Schedule</h2>
              <div className={styles.scheduleGrid}>
                {schedule.map((item, index) => (
                  <motion.div 
                    key={index}
                    className={styles.scheduleItem}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={styles.scheduleDay}>{item.day}</div>
                    <div className={styles.scheduleTime}>{item.time}</div>
                    <div className={styles.scheduleShow}>{item.show}</div>
                    <div className={styles.scheduleTeam}>{item.team}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'teams' && (
            <motion.div
              className={styles.teamsContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.teamsHeader}>
                <h2>Office Teams</h2>
                <button 
                  className={styles.generateButton}
                  onClick={generateRandomTeam}
                >
                  <FaRandom /> Generate Next Team
                </button>
              </div>
              
              <div className={styles.teamsGrid}>
                {groups.map((group, index) => (
                  <motion.div 
                    key={index}
                    className={styles.teamCard}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3>{group.name}</h3>
                    <div className={styles.teamMembers}>
                      {group.members.map((member, idx) => (
                        <span key={idx} className={styles.memberName}>{member}</span>
                      ))}
                    </div>
                    <div className={styles.nextShow}>
                      <FaRegCalendarAlt />
                      <span>Next show: {group.nextShow}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.howItWorks}>
          <h2>How AJA Radio Works</h2>
          <div className={styles.stepsContainer}>
            <motion.div 
              className={styles.step}
              whileHover={{ y: -5 }}
            >
              <div className={styles.stepNumber}>1</div>
              <h3>Automatic Selection</h3>
              <p>Our system randomly selects 6 members from the scheduled team each day.</p>
            </motion.div>
            
            <motion.div 
              className={styles.step}
              whileHover={{ y: -5 }}
            >
              <div className={styles.stepNumber}>2</div>
              <h3>Role Assignment</h3>
              <p>One member becomes the RJ, others get news categories automatically.</p>
            </motion.div>
            
            <motion.div 
              className={styles.step}
              whileHover={{ y: -5 }}
            >
              <div className={styles.stepNumber}>3</div>
              <h3>Daily Content</h3>
              <p>National, regional, sports, entertainment news plus a fun riddle!</p>
            </motion.div>
            
            <motion.div 
              className={styles.step}
              whileHover={{ y: -5 }}
            >
              <div className={styles.stepNumber}>4</div>
              <h3>Team Rotation</h3>
              <p>All 5 office teams participate equally throughout the week.</p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta-section" className={styles.ctaSection}>
          <GiSoundWaves className={styles.ctaWave} />
          <h2>Ready to Join the Fun?</h2>
          <p>Be part of our office radio culture and showcase your hidden talents!</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>View Your Upcoming Slot</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <GiRadioTower />
            <span>AJA Radio</span>
          </div>
          <div className={styles.footerLinks}>
            <button onClick={() => scrollToSection('live-section')}>Live</button>
            <button onClick={() => scrollToSection('how-it-works')}>How It Works</button>
            <button onClick={() => scrollToSection('cta-section')}>Join Us</button>
          </div>
          <div className={styles.footerSocial}>
            <span>Follow Us:</span>
            <div className={styles.socialIcons}>
              {/* Social icons would go here */}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} AJA Radio. Part of our office culture.</p>
        </div>
      </footer>
    </div>
  );
};

export default RadioLandingPage;