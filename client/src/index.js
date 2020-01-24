import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ProfileHome} from "./ProfileHome";
import {FavoriteShows} from "./FavoriteShows";
import "./styles.css";


// Hooks approach (currently rendered)

const App = () => {
  return (
    <div className="App">
      <ProfileHome userId="broadwaycom"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));




// Class component/ Child-as-function rendering

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <ProfileHome userId="broadwaycom">
          {
            ({ loading, error, data }) => {
              if (loading) return <span>Loading...</span>
              if (error) return <span>Error loading</span>
              return (
                <FavoriteShows 
                  data={data}
                  renderHeader={() => <span>{loading ? "Loading..." : "Favorite Shows" }</span>}
                  renderListItem={(item) => <div>{item}</div>}
                >
                  <div>We have {data.length} items</div>
                </FavoriteShows>
              )
            }
          }
        </ProfileHome>
      </div>
    );  
  }
}


