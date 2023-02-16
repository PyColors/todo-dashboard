import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./quoteSlice";

export const Quote = () => {
  const { quote, author } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <div>
      <p>“{quote}”</p>
      <p>{author}</p>
    </div>
  );
};
