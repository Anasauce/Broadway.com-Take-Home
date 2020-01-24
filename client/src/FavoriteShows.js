import React, { Component } from "react";


// Hooks approach (currently rendered)

export const FavoriteShow = props => {
    return (
        <div className="show-card">
            <h2>{props.title}</h2>
            <ul>
                {props.category.map(item => { 
                    return <li className="show-card__details">{item}</li>
                })}
            </ul>
            <p>{props.url}.com</p>
            <p>Rating: {props.rating}</p>
        </div>
    )
}



// Class component/ Child-as-function rendering

export class FavoriteShows extends Component {

    render() {
        return (
          <div>
            <div className="header">
              {this.props.renderHeader(this.props)}
            </div>
            <div className="footer">
              {
                this.props.data.map((item) => this.props.renderListItem(item))
              }
            </div>
            <div className="footer">
              {this.props.children}
            </div>
          </div>
        );
      }

}

