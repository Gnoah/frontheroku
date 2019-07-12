import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBContainer} from "mdbreact";
import PostFrontToBack from './Component/postWithUpload_frontToBack';
import List from './Component/List'
import AfficheProfil from './Component/AfficheProfil'
 class App extends Component {
  render() {
    return (
      <Router>
        <MDBContainer>
          <div className="container">
            <Route path="/" component={PostFrontToBack} />
            <Route path="/" component={List} />
            <Route path="/profil/:profilId" exact component={AfficheProfil} />
          </div>
        </MDBContainer>
      
    </Router>     
    )
  }
}
export default App;