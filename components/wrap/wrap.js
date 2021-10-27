import { Main } from "../main/main";
import { Profile } from "../profile/profile";
import { BrowserRouter, Route } from "react-router-dom";

export const Wrap = () => {
  return (
    <BrowserRouter>
      <>
        <div className="wrap">
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Profile} />
          
        </div>
      </>
    </BrowserRouter>
  );
};
