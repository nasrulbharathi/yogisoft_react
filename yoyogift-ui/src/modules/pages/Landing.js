import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import YoYoGiftImg from "../../assets/images/YoyoGift.png";
import Grid from "@material-ui/core/Grid";
import Styles from "../../assets/css/Landing.module.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cardsConfig: [
        {
          key: 1,
          src: "https://images.gyft.com/merchants/i-1466456891460_667_hd.png",
          alt: "amazon",
          name: "Whole Foods Market",
        },
        {
          key: 2,
          src:
            "https://images.gyft.com/merchants/i-188-1346844971201-60_hd.png",
          alt: "Ebay",
          name: "Ebay",
        },
        {
          key: 3,
          src: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
          alt: "amazon",
          name: "Amazon",
        },
        {
          key: 4,
          src: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
          alt: "Flipkart",
          name: "Flipkart",
        },
        {
          key: 5,
          src: "https://pngimg.com/uploads/amazon/amazon_PNG21.png",
          alt: "Zomato",
          name: "Zomato",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div id="promo-ribbon" className={Styles.offerMessage}>
          Use code TRAVEL15 to get 15% off
        </div>
        <div className={Styles.mainSlide}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <h1 className={Styles.sectionTitle}>
                Buy, Send, & Redeem Gift Cards
              </h1>
              <div className={Styles.sectionText}>
                <p>YoYo makes it easy for you to give the perfect gift card</p>
                <p>and conveniently manage them from any device!!</p>
              </div>
              <Link
                to="/giftCards"
                onClick={this.handleClick}
                className={Styles.cardsBtn}
              >
                <Button variant="contained">Explore Cards</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={YoYoGiftImg} className={Styles.GiftImg} alt="YoYoImg" />
            </Grid>
          </Grid>
        </div>
        <div className={Styles.vendors}>
          <h2 className={Styles.vendorTitle}>
            Buy Gift Cards from your favourite Vendors
          </h2>
          <div style={{ textAlign: "center" }}>
            {this.state.cardsConfig.map((card) => {
              return (
                <div className={Styles.vendorContainer} key={card.key}>
                  <img
                    className={Styles.vendorImage}
                    src={card.src}
                    alt={card.alt}
                  />
                  <p className={Styles.vendorName}>{card.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
