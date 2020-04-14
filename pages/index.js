import React from "react";
import { getInfo } from "../libs/api";

const Index = ({ info }) => {
  return (
    <div className="bg-red-400">
      Index
      <div>Confirmed : {info.confirmed.value}</div>
      <div>Recovered : {info.recovered.value}</div>
      <div>Deaths : {info.deaths.value}</div>
    </div>
  );
};

Index.getInitialProps = async ({ req, query }) => {
  const info = await getInfo();

  return { info };
};
export default Index;
