import React from "react";
import "./home.css";

function Home() {
  const styles = {
    pageWrapper: {
      height: "100vh"
    }
  }

  return (
    <div className="page-wrapper" style={styles.pageWrapper}>
      <div className="container-homepage">
        <h1><strong className="text-coffee">code</strong>page</h1>
        <h3>My personal coding manager</h3>
      </div>
      <footer className="footer"> All rights reserved © by RMG </footer>
    </div>
  );
}

export default Home;
