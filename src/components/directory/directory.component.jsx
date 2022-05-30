import { useContext } from "react";
import { Link } from "react-router-dom";
import Directory_Context from "../../context/directory/directory.context";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

function Directory() {
  const sections = useContext(Directory_Context);
  return (
    <>
      <div className="directory">
        <div className="hero-text">
          <div className="text">
            Fabrics that speaks <div className="line" />
          </div>
          <div className="descp">
            We{" "}
            <b id="bolded-color">
              provide clothes
              <br /> more than{" "}
            </b>{" "}
            just
            <br /> <b id="bolded-color">stiched fabrics.</b>
          </div>
          <Link to="/shop">
            <button className="shop-now">Shop Now</button>
          </Link>
        </div>
        <div className="directory-menu">
          {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
          <div className="see-more">
            <Link to="/shop">
              <div className="inner-container">
                See All <br /> Categories
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Directory;
