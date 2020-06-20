import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import AscendingButton from "@material-ui/icons/SwapVert";
import IconButton from "@material-ui/core/IconButton";
import DescendingButton from "@material-ui/icons/SwapVerticalCircle";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import _ from "lodash";
import {
  comparePointsAsc,
  comparePointsDesc,
  compareCountAsc,
  compareCountDesc,
  compareValidityAsc,
  compareValidityDesc,
} from "../utility/CompareForSort";
import GiftsList from "../atoms/GiftsList";
import history from "../atoms/history";
import { fetchCards, fetchCard, fetchCardFilter } from "../gifts/state/actions";

const sortCategoryArray = ["Points", "Count", "Validity"];
export class GiftsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: true,
      sortByValue: "None",
      filterValue: "All",
      searchValue: "",
    };

    this.handleSearch = _.debounce(this.handleSearch, 300);
  }
  componentDidMount() {
    this.props.fetchCards();
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  handleSortButtonClick = () => {
    const e = {
      target: {
        value: this.state.sortByValue,
      },
    };
    this.onChangeSort(e);
    this.setState({ sortOrder: !this.state.sortOrder });
  };

  onChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
    this.handleSearch(value);
  };

  handleSearch = (selectedValue) => {
    this.setState({
      filterValue: "All",
    });
    let newGiftCard = [];
    if (selectedValue !== "") {
      newGiftCard = this.props.giftCards.filter((giftCard) => {
        return (
          giftCard.cardName
            .toLowerCase()
            .indexOf(selectedValue.toLowerCase()) !== -1
        );
      });
    } else {
      newGiftCard =
        this.state.filterValue && this.state.filterValue !== "All"
          ? this.props.giftCardsFiltered
          : this.props.giftCards;
    }
    this.props.fetchCardFilter(newGiftCard);
  };

  onChangeRetailer = (e) => {
    const selectedValue = e.target.value;
    this.setState({
      filterValue: e.target.value,
      searchValue: "",
    });
    let newGiftCard = [];
    if (selectedValue !== "All") {
      this.props.giftCards.forEach((element) => {
        if (element.cardRetailer === selectedValue) {
          newGiftCard.push(element);
        }
      });
    } else {
      newGiftCard = this.props.giftCards;
    }
    this.props.fetchCardFilter(newGiftCard);
  };

  onChangeSort = (e) => {
    const { sortOrder } = this.state;
    let giftCards;
    if (this.state.searchValue !== "") {
      giftCards = this.props.giftCardsFiltered;
    } else {
      giftCards =
        this.state.filterValue === "All"
          ? this.props.giftCards
          : this.props.giftCardsFiltered;
    }
    this.setState({
      sortByValue: e.target.value,
      sortOrder: !this.state.sortOrder,
    });
    let newGiftCard = giftCards;
    if (e.target.value !== "None") {
      switch (e.target.value) {
        case "Points":
          newGiftCard = sortOrder
            ? giftCards.sort(comparePointsAsc)
            : giftCards.sort(comparePointsDesc);
          break;
        case "Count":
          newGiftCard = sortOrder
            ? giftCards.sort(compareCountAsc)
            : giftCards.sort(compareCountDesc);
          break;
        case "Validity":
          newGiftCard = sortOrder
            ? giftCards.sort(compareValidityAsc)
            : giftCards.sort(compareValidityDesc);
          break;
        default:
      }
    }
    this.props.fetchCardFilter(newGiftCard);
  };

  addUpdateForm = () => {
    history.push("/AddUpdateForm");
  };

  render() {
    if (this.props.giftCards.length === 0) {
      return (
        <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
      );
    }
    let cardRetailerArray = [];
    for (let i = 0; i < this.props.giftCards.length; i++) {
      cardRetailerArray.push(this.props.giftCards[i].cardRetailer);
    }
    let uniqueCardRetailerArray = [...new Set(cardRetailerArray)];
    return (
      <>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <label style={{ marginLeft: "2%" }}>Filter by Retailer:</label>
            <Select
              style={{
                marginLeft: "2%",
                marginTop: "4%",
                width: "100px",
                height: "35px",
              }}
              value={this.state.filterValue}
              native
              onChange={this.onChangeRetailer}
              input={<OutlinedInput labelWidth={0} name="kpiValue" />}
            >
              <option value="All">All</option>
              {uniqueCardRetailerArray.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <label style={{ marginLeft: "2%" }}>Sort by:</label>
            <Select
              style={{
                marginLeft: "2%",
                marginTop: "4%",
                marginRight: "2%",
                width: "100px",
                height: "35px",
              }}
              native
              onChange={this.onChangeSort}
              input={<OutlinedInput labelWidth={0} name="sortByValue" />}
            >
              <option value="None">None</option>
              {sortCategoryArray.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </Select>
            {this.state.sortOrder ? (
              <Tooltip
                title={
                  this.state.sortByValue === "Validity"
                    ? "Oldest to Newest"
                    : "Low to High"
                }
              >
                <IconButton
                  onClick={this.handleSortButtonClick}
                  disabled={this.state.sortByValue === "None"}
                >
                  <AscendingButton />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                title={
                  this.state.sortByValue === "Validity"
                    ? "Newest to Oldest"
                    : "High to Low"
                }
              >
                <IconButton onClick={this.handleSortButtonClick}>
                  <DescendingButton />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={12} sm={3}>
            {this.props.userDetails.isAdmin ? (
              <Button
                style={{ marginTop: "4%", marginRight: "3%", marginLeft: "2%" }}
                variant="contained"
                color="primary"
                onClick={this.addUpdateForm}
              >
                ADD CARD
              </Button>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="input-with-icon-textfield"
              label="Search"
              onChange={this.onChange}
              value={this.state.searchValue}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <div style={{ textAlign: "center" }}>
          <GiftsList
            {...this.props}
            handleClickCard={this.handleClickCard}
            handleUpdateClick={this.handleUpdateClick}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    giftCards: state.gifts.giftCards,
    giftCardsFiltered: state.gifts.giftCardsFiltered,
    userDetails: state.login.detailsObject,
  };
};

GiftsListContainer.propTypes = {
  classes: PropTypes.object,
};

export default connect(mapStateToProps, {
  fetchCards,
  fetchCard,
  fetchCardFilter,
})(GiftsListContainer);
