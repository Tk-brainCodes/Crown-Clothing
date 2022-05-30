import { useContext } from "react";
import Directory_Context from "../../context/directory/directory.context";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";

function Directory() {
  const sections = useContext(Directory_Context);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
export default Directory;
