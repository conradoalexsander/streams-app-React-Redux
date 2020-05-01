import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/new" exact component={StreamCreate} />
            <Route path="/edit" exact component={StreamEdit} />
            <Route path="/delete" exact component={StreamDelete} />
            <Route path="/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
