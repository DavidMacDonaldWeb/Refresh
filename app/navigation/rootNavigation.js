import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);//if object is not null then call navigate method

export default {
  navigate,
};