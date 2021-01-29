import React from "react";
import CategoryTemplate from "../templates/CategoryTemplate";

const CategoryView = (props) => {
  return (
    <CategoryTemplate location={props.location.pathname}>
      {props.location.pathname}
    </CategoryTemplate>
  );
};

export default CategoryView;
