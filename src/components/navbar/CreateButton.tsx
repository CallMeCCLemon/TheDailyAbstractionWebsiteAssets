import React from "react";
import { AppRoute } from "../AppRouter";
import { NavLinkButton } from "./NavLinkButton";

const CreateButton = () => {
  return <NavLinkButton route={AppRoute.NEW} text={"+ Create"} />;
};

export default CreateButton;
