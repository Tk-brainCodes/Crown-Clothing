import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";
import { HomepageContainer } from "./Homepage.styles";
const Homepage = () => {
  return (
    <HomepageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomepageContainer>
  );
};

export default Homepage;
