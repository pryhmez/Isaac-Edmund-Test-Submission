import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


function withRouter (Child) {
   return function WithRouter (props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        // other relevant props
        return <Child {...props} navigate={navigate} location={location} params={params} />;
  }
}

export default withRouter;