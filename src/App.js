import React, { Component } from "react";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from "redux";
import { connect, useSelector, useDispatch, useStore } from "react-redux";
import * as TodoActionCreators from "./lib2";
import HooksCaakeContainer from "./useselector";

// import Useset from './useselector'
// console.log(Game,'Game');

const process = state => {
  console.log("process");
  console.log(state);
  state.dispatch({
    type: "ADD",
    number: 100
  });
};
const mapStateToProps = state => {
  console.log(state, "state");
  return state;
};

const ST1 = props => {
  const game = useSelector(state => state.reducer5);
  return <div>{game}</div>;
};

const ST2 = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={process}>DISPATCH</button>
    </div>
  );
};

const ST3 = props => {
  console.log(props, "ST3");
  const { reducer1 } = props;
  console.log(typeof reducer1);
  console.log(reducer1, "REDUCER-XD");
  if (typeof reducer1 == "object") console.log(reducer1.entries());
  const check = reducer1 => {
    return typeof reducer1 == "object";
  };
  return (
    <div>
      <button>ST3</button>
      {check(reducer1)
        ? reducer1.map((content, index) => {
            const contents = Object.keys(content).map((contentx, indexx) => {
              return contentx + ":" + content[contentx];
            });
            return (
              <div>
                {contents.map((contentv, index) => {
                  return <p>{contentv}</p>;
                })}
                <hr />
              </div>
            );
          })
        : ""}
    </div>
  );
};

class APP extends Component {
  state = {};
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(dispatch, "GAME");
    console.log(this.props, "this.props");
    const todolist = bindActionCreators(TodoActionCreators, dispatch);
    console.log(todolist, "TODOLIST");
    console.log("MOUNT");
    console.log(HooksCaakeContainer);

    // Game();
  }

  // shouldComponentUpdate(nextProps){
  //   console.log("props");
  // }
  render() {
    //!
    //?
    // TODO
    // *
    return (
      <div>
        {/* <HooksCaakeContainer></HooksCaakeContainer> */}
        <button onClick={() => process(this.props)}>OK</button>
        <button
          onClick={() =>
            TodoActionCreators.fetchstart(
              "https://jsonplaceholder.typicode.com/posts",
              this.props.dispatch
            )
          }
        >
          OK2
        </button>
        <ST1 />
        <ST2 />
        <ST3 {...this.props} />
      </div>
    );
  }
}
export default connect(mapStateToProps)(APP);
