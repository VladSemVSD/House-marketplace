import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';
import Slider from '../components/Slider';

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeder">Explore</p>
      </header>
      <main>
        <Slider></Slider>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="category/rent">
            <img
              src={rentCategoryImage}
              alt="places for rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places fro rent</p>
          </Link>
          <Link to="category/sale">
            <img
              src={sellCategoryImage}
              alt="places for sale"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places fro sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
