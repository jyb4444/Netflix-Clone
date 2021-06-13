import React from "react";
// HashRouter as Router: HashRouter를 react-router-dom으로부터 가져와서 이름을 바꿔 Router로 사용하도록 한다.
import { HashRouter, BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

// HashRouter는 약간 앱처럼 보여주면서 사용자 페이지의 Hash를 사용한다. (URL에 #가 붙는다.)
// BrowserRouter는 웹 사이트처럼 보여주면서 HTML history API를 사용한다. (URL에 #가 붙지 않고 일반적인 웹사이트처럼 보인다.)

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    // Route는 리액트에서 라우트로 페이지를 만들고 이동할 수 있다.
    // Route는 Router안에 감싸져 있어야 한다.
    // path는 URL을 지정할 수 있고 component에는 해당 URL에 왔을 때 보여줄 컴포넌트를 지정한다.
    <Router>
      <Header></Header>
      {/* Switch컴포넌트는 리액트 라우터가 오직 하나의 Route만 랜더하게 해준다. */}
      {/* 다시말해, /tv나 /tv/abc 모두 하나의 라우트만 랜더해준다. (다른 라우트를 랜더해주지 않는다.) */}
      {/* 그래서 다른 라우트를 랜더해주기 위해서는 /tv에 exact속성을 넣어줘서 정확히 /tv인 경우에만 TV컴포넌트를 랜더해서 보여주도록 한다. */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={TV}></Route>
        {/* 아래와 같이 component가 아닌 render를 통해서도 함수를 실행하고 리턴해서 보여줄 수 있다. */}
        {/* <Route path="/tv/abc" render={() => <h1>TV abc</h1>}></Route> */}
        <Route path="/search" component={Search}></Route>
        {/* Redirect컴포넌트는 path경로에 들어왔을 때 일치하는 Route 컴포넌트를 찾고, 일치하는 것이 없다면 / URL로 리다이렉트 시켜버린다. */}
        {/* from="*"는 모든 페이지를 다 리다이렉트 시킬 수 있다는 의미이고, to는 리다이렉트가 발생했을 때 리다이렉트 시켜버리는 URL을 의미한다. */}
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};