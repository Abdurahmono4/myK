import { Navigate } from "react-router-dom";

function ProtectedRotes({ children, user }) {
  console.log(user);
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

export default ProtectedRotes;
