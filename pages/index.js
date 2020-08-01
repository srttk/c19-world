import React from "react";
import Layout from "../components/Layout";
import { getInfo } from "../libs/api";

const Index = ({ info }) => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row justify-between justify-around p-3">
        <div className="bg-gray-300 px-4 py-3 text-yellow-400 text-2xl font-light rounded-md shadow mt-2 uppercase">
          Confirmed : {info.confirmed.value}
        </div>
        <div className="bg-gray-300 px-4 py-3 text-green-400 text-2xl font-light rounded-md shadow mt-2 uppercase">
          Recovered : {info.recovered.value}
        </div>
        <div className="bg-gray-300 px-4 py-3 text-red-400 text-2xl font-light rounded-md shadow mt-2 uppercase">
          Deaths : {info.deaths.value}
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, query }) => {
  const info = await getInfo();

  return { info };
};
export default Index;
