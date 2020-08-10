import React from "react";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };

  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout(() => {
      this.setState({ isLoding: false });
    }, 6000);
  }

  render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
