import React, { Component, useState, useEffect } from "react";
import { getFavoriteShowsByUserId2 } from "./helpers";
import { FavoriteShow } from "./FavoriteShows";

//Hooks approach (currently rendered)
export const ProfileHome = props => {
    const [shows, setShows] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getFavoriteShowsByUserId = async userId => {
        let response;
        try {
            response = await fetch(`http://localhost:3000/users/${userId}`);
        } catch (ex) {
            return setError(ex);
        }
        if (!response.ok) {
            return setError(response);
        }
        setLoading(false);
        const user = await response.json();
        console.log("HIIII", user)
        return user.shows
    }
    
    const parseShows = async (userId) => {
      const shows = await getFavoriteShowsByUserId(userId);
      const plays = shows.filter((show) => {
        return show.category.includes("broadway" && "play")
      });
      const sortedPlays = plays.sort((a, b) => {
        return b.rating - a.rating;
      });
      return setShows(sortedPlays)
    }

    useEffect(() => {
      parseShows(props.userId);
    }, [])

    return (
        <div>
            <header className="header">
                <p>{loading ? "Loading..." : null}</p>
                <p>{error ? "Error Loading..." : null}</p>
                <h1>{!loading && !error ? "Favorite Shows" : null}</h1>
            </header>
            <section>
              {shows.map(show => (
                  <FavoriteShow 
                    title={show.title}
                    category={show.category}
                    url={show.url}
                    rating={show.rating}
                  />
                ))}
            </section>
      </div>
    )

  }



// Class component/ Child-as-function rendering / rendered props 
// helper function imported from './helpers.js'

export class ProfileHome2 extends Component {
  state = {
    loading: true,
    error: false,
    data: [],
  }

  async componentDidMount() {
    const shows = await getFavoriteShowsByUserId2(this.props.userId);
    const plays = shows.filter((show) => {
      return show.category.includes("broadway" && "play")
    });
    const sortedPlays = plays.sort((a, b) => {
      return b.rating - a.rating;
    });
    const playsArray = sortedPlays.map(play => Object.values(play));
    this.setState({ loading: false, data: playsArray })
  }

  render() {
    return (
      <div>
        {this.props.children({
          ...this.props,
          ...this.state,
        })}
      </div>
    );
  }
    
};
