import React, { Component } from "react";
import { connect } from "react-redux";

class ChonXe extends Component {
  //   handleChangeCar = (url) => {
  //     this.setState({ urlImg: url });
  //   };

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <img className="w-100" src={this.props.url} alt="" />
            </div>
            <div className="col-6 d-flex flex-column py-3">
              <button
                onClick={() => {
                  this.props.handleChangeCar("./img/car/red-car.jpg");
                }}
                className="btn btn-danger py-3 m-3"
              >
                Red Car
              </button>
              <button
                onClick={() => {
                  this.props.handleChangeCar("./img/car/black-car.jpg");
                }}
                className="btn btn-dark py-3 m-3"
              >
                Black Car
              </button>
              <button
                onClick={() => {
                  this.props.handleChangeCar("./img/car/silver-car.jpg");
                }}
                className="btn btn-secondary py-3 m-3"
              >
                Silver Car
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    url: state.carReducer.carUrl,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCar: (url) => {
      dispatch({
        type: "magic",
        payload: url,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChonXe);
