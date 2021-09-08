import React, { useEffect } from "react";
import { getCat, fetchFail } from "./../actions";
import { connect } from "react-redux";
//import axios from "axios";

const Cat = (props) => {
  const { cat, isFetching, error } = props;

  useEffect(() => {
    props.getCat();
  }, []);

  if (error) {
    return <h2>We have an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a cat for you!</h2>;
  }

  const handleClick = () => {
    props.getCat();
  };

  return (
    <>
      <h2>Check Out this cat!</h2>
      <img src={cat} alt="cat" width={200} />
      <br />
      <button onClick={handleClick}>Get A New Cat!</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCat, fetchFail })(Cat);
