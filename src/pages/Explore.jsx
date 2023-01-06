import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeder">Explore</p>
      </header>
      <main>
        {/* Slider */}
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="category/rent">
            <img src={rentCategoryImage} className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places fro rent</p>
          </Link>
          <Link to="category/sale">
            <img src={sellCategoryImage} className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places fro sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
