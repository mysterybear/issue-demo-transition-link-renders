import Link from "gatsby-plugin-transition-link";
import React from "react";
import SEO from "../components/seo";


const SecondPage = () => {
  console.log("second page render")
  return (
    <>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
}

export default SecondPage;
