import styles from "./KerrysFooter.module.css"

function KerrysFooter() {
    return (
        <div className={styles.footer}>
            <div>
                <h2>COMPANY</h2>
                <div>
                    <h3>About Us</h3>
                    <h3>Careers</h3>
                    <h3>Partners</h3>
                </div>
            </div>
            <div>
                <h2>COURSES</h2>
                <div>
                    <h3>Register</h3>
                    <h3>Login</h3>
                    <h3>Projects</h3>
                    <h3>Teachers</h3>
                    <h3>Parents</h3>
                    <h3>Resources</h3>
                </div>
            </div>
            <div>
                <h2>SUPPORT</h2>
                <div>
                    <h3>FAQs</h3>
                    <h3>Helpdesk</h3>
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div>
                <h2>LEGAL</h2>
                <div>
                    <h3>Terms & Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>
            </div>
            <div>
                <h4>LevelUp Works</h4>
                <div>
                    <h3>
                        LevelUp Works is an Auckland-Based <br />
                        enterprise dedicated to developing game- <br />
                        based leraning software to help teachers in <br />
                        response to the New Zealand Digital <br />
                        Technologies & Hangarau Matihiko. <br />
                        alan@levelupworks.com <br />
                        (021) 668 185
                    </h3> 
                </div>
            </div>
            

        </div>
    )
}

export default KerrysFooter