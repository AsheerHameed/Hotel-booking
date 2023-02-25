import React from "react";
import "./message.css";
import apostropheStart from "../../assets/apostrophe1.png";
import apostropheEnd from "../../assets/apostrophe2.png";
const Message = () => {
  return (
    <div className="message_container section__padding">
      <div className="message_head flex__center">
        <h2>Message from the owner</h2>
      </div>
      {/* <div className="message_bg flex__center"></div> */}

      <div className="message_content">
        <div className="apostropheStart">
          <img src={apostropheStart} alt="apostrophe" />
        </div>
        <div>
          <p>
            As the owner of this hotel, I am committed to providing our guests
            with a comfortable and memorable experience. Our hotel is not just a
            place to stay, but a destination where guests can relax, unwind, and
            connect with the natural beauty of the surrounding area.
            <br />
            <br />
          </p>
        </div>
        <div>
          <p>
            My goal is to create an environment where guests feel welcome and at
            home, and where they can enjoy all the comforts and amenities of a
            high-end hotel. I believe that our hotel offers something unique and
            special, with 24/7 wifi, hot water, bonfires, and tents for a
            one-of-a-kind experience.
            <br />
            <br />
          </p>
        </div>
        <div>
          <p>
            I am proud of the excellent reviews our hotel has received, and I am
            committed to maintaining the high standards that have earned us a
            rating of 4.7 stars. Our staff is dedicated to providing
            personalized and attentive service to ensure that every guest has a
            wonderful stay.
            <br />
            <br />
          </p>
        </div>
        <div>
          <p>
            My vision for our hotel is to be a place where guests can create
            lifelong memories, whether they are on a romantic getaway, family
            vacation, or business trip. I want our guests to leave feeling
            refreshed, rejuvenated, and eager to return.
            <br />
            <br />
          </p>
        </div>
        <div>
          <p>
            Thank you for considering our hotel for your stay. We look forward
            to welcoming you and providing you with an unforgettable experience
            near the sea shore.
            <br />
            <br />
          </p>
        </div>
        <div className="apostropheEnd">
          <img src={apostropheEnd} alt="apostrophe" />
        </div>
      </div>
    </div>
  );
};

export default Message;
