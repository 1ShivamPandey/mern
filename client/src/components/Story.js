import React, { Component } from 'react'
import pots from "../images/Story/pots.jpg";
import plate from "../images/Story/plate.png";
import mug from "../images/Story/mug.jpeg";
import vase from "../images/Story/vase.jpg";



export default class Story extends Component {
    render() {
        return (
            <>
                      <div className="story">
        <div className="storycontainer">
          <div>
            <div className="storybox">
              <img className="storyimg" src={vase} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={plate} />
            </div>
            <p className="story-txt-margin-left">Plate</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={mug} />
            </div>
            <p className="story-txt-margin-left">Mug</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Pot</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>

          <div>
            <div className="storybox">
              <img className="storyimg" src={pots} />
            </div>
            <p className="story-txt-margin-left">Vase</p>
          </div>
        </div>
      </div>

            </>
        )
    }
}
