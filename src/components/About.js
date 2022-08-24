import React from 'react'
import styles from './About.module.css'
import NavBar from './NavBar'
import img from '../Assets/IMG_4856.jpg'

function About() {
    return (
        <div>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.body_child}>
                    <h1>ABOUT</h1>
                </div>
                <div className={styles.about_imageWrapper}>
                    <img src={img} alt= 'Darasimi'/>
                </div>
                <div className={styles.test}>
                    <p>
                        I am a young 18 year old-web developer based in Nigeria. I am currently a student studying
                        computer science at <span className={styles.span}><a href='https://unilag.edu.ng/' target='_blank' rel="noreferrer">The University of Lagos. </a></span>
                        I picked interest in coding at a very young and vital stage of my life, When I wrote
                        just HTML and CSS before moving unto Javascript in the later future. Over the years and the past few months
                        , I have gained alot of coding experience from participating in hackathons and building different
                        projects using my Javascript skills. Coding isn't the
                        only thing i've always had a thing for, I picked interest in music production which I practice during my leisure. I am also a big fan of good music. Can't
                        lie, Listening to good music helps relieve me of stress at times 🧘🏾‍♂️. My favorite genres are the
                        <span className={styles.span}><a href='https://open.spotify.com/playlist/37i9dQZF1DWZCOSaet9tpB?si=CCqYdEECRUSK9vBdDqkPLw' target='_blank' rel="noreferrer"> Afrobeats</a></span>,
                        <span className={styles.span}><a href='https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=rpV5O1dKRMW__x-yGrIAxQ' target='_blank' rel="noreferrer"> UK Drill </a></span>
                        and <span className={styles.span}><a href='https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX5mILnBJLA26?si=tfL8-88fS6y5w-i_I3OXNA' target='_blank' rel="noreferrer"> Amapiano</a></span>.
                        I love the <span className={styles.w3}>log drums</span><span className={styles.emoji3}>🪘</span>.
                    </p>
                </div>
                <div className={styles.body_child}>
                    <h1>MY SKILLS</h1>
                </div>
                <div className={styles.skills}>
                   
                </div>
            </div>
        </div>
    )
}

export default About