import React, { useState, useEffect } from "react";

const DataPreprocessing = () => {
    const [greeting, setGreeting] = useState("Welcome to the Alzheimer's Disease Web App");
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        let greetingMessage = "Welcome to the Alzheimer's Disease Web App";

        if (hours >= 5 && hours < 12) {
            greetingMessage = "Good Morning! Welcome to the Alzheimer's Disease Web App";
        } else if (hours >= 12 && hours < 18) {
            greetingMessage = "Good Afternoon! Welcome to the Alzheimer's Disease Web App";
        } else {
            greetingMessage = "Good Evening! Welcome to the Alzheimer's Disease Web App";
        }

        setGreeting(greetingMessage);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Logic for processing uploaded file goes here
    };

    return (
        <div style={styles.body}>
            <nav style={styles.navbar}>
                <a style={styles.navbarBrand} href="#">Alzheimer's Disease Web App</a>
                <div style={styles.navLinks}>
                    <a style={styles.navLink} href="/train">Train Model</a>
                    <a style={styles.navLink} href="/predict">Prediction</a>
                    <a style={styles.navLink} href="/mlflow-ui">Experiment</a>
                </div>
            </nav>

            <h1 style={styles.heading}>{greeting}</h1>

            {!isProcessing ? (
                <form style={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="file" style={styles.label}>Upload Dataset:</label>
                    <input type="file" id="file" name="file" accept=".csv,.xlsx" required />
                    <input type="submit" style={styles.submitButton} value="Start Preprocessing" />
                </form>
            ) : (
                <div style={styles.overlay}>
                    <div style={styles.spinner}></div>
                    <p style={styles.overlayText}>Processing...</p>
                </div>
            )}

            <footer style={styles.footer}>
                <p>&copy; Hiranayamay Tyagi 2023</p>
            </footer>
        </div>
    );
};

// Styles
const styles = {
    body: {
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "linear-gradient(to bottom, #0076b6, #003865)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    navbar: {
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#000",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 999,
    },
    navbarBrand: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "20px",
    },
    navLinks: {
        display: "flex",
        gap: "20px",
    },
    navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
    },
    heading: {
        color: "#fff",
        textAlign: "center",
        fontSize: "32px",
        margin: "20px 0",
    },
    form: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "30px",
        maxWidth: "600px",
        textAlign: "center",
    },
    label: {
        fontWeight: "bold",
        display: "block",
        marginBottom: "10px",
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    spinner: {
        width: "50px",
        height: "50px",
        border: "5px solid #fff",
        borderTop: "5px solid #0076b6",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
    overlayText: {
        color: "#fff",
        marginTop: "10px",
        fontSize: "18px",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
    },
};

export default DataPreprocessing;
