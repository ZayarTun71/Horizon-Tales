"use client";

import AboutBox from "@/components/AboutBox";
import Footer from "@/components/Footer";
import styles from "@/scss/About.module.scss";

const About = () => {
    return (
        <div className={styles.s_about}>
            <div className={styles.about_inner}>
                <div className={styles.about_entry}>

                    <h1>Discover Horizon Tales.</h1>
                    <p className={styles.lead_text}>
                        Beyond the horizon lies a world of untold stories, where every sunrise brings a new adventure and every shadow hides a mystery waiting to unfold. These are the tales of wanderers who chase the unknown, explorers who dare to step beyond the familiar, and dreamers who see possibilities where others see limits. In these pages, you’ll find echoes of forgotten legends, whispers of distant lands, and the pulse of adventure beating beneath every word.
                    </p>

                    <div className={styles.about_story}>
                        <h3>This Is Our Story</h3>
                        <p className={styles.story_text}>
                            Every journey starts with a spark—an idea, a dream, a moment of curiosity. Ours began with a simple belief: that stories have the power to connect, inspire, and take us places we’ve never been. From late-night conversations to early-morning adventures, we’ve woven our experiences into something real, something that speaks to the dreamers, the explorers, and the ones who refuse to settle.
                            So here we are, crafting tales that feel like a warm sunset drive, a deep ocean breeze, or that quiet moment when everything just clicks. No rush, no pressure—just good vibes, great stories, and a journey we’re excited to share with you.
                        </p>
                    </div>

                    <hr />

                    <div className={styles.our_stories}>
                        <AboutBox title={"Who We Are."} text={"We’re a mix of storytellers, explorers, and dreamers who believe in the power of creativity and connection. Whether it’s through words, ideas, or experiences, we’re here to craft something meaningful—something that sparks curiosity and keeps the adventure alive.No labels, no limits—just a passion for discovering new perspectives, embracing the unknown, and sharing moments that feel real. This is us, and this is just the beginning."} />
                        <AboutBox title={"Our Mission."} text={"To create, inspire, and connect—one story at a time. We believe in the magic of ideas, the power of imagination, and the beauty of shared experiences. Whether through words, visuals, or moments that make you pause, our goal is to spark something real.We’re here for the dreamers, the explorers, and the ones who see the world a little differently. No boundaries, no limits—just a journey fueled by passion, curiosity, and a love for storytelling. "} />
                        <AboutBox title={"Our Vision."} text={"We envision a world where creativity flows freely, stories unite us, and ideas have the power to inspire change. Our goal is to build a community that celebrates exploration, fosters connection, and embraces limitless possibilities. Through every project, we aim to leave a lasting impact and spark meaningful conversations."} />
                        <AboutBox title={"Our Core Values."} text={"Our core values drive everything we do: creativity, authenticity, collaboration, passion, and exploration. We believe in thinking outside the box, staying true to ourselves, and working together to create something meaningful. Fueled by passion and curiosity, we push boundaries and explore new ideas, always striving to build something real that connects with others."} />
                    </div>
                    
                    <Footer/>
                </div>
            </div>

        </div>
    );
};

export default About;
