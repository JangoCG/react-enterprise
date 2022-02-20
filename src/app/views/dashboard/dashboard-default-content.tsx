import React, { useEffect } from "react";
import { getSalesAxios } from "services/saleService";

const DashboardDefaultContent = () => {
  useEffect(() => {
    getSalesAxios();
  }, []);
  return <div>DashboardDefaultContent</div>;
};

export default DashboardDefaultContent;
