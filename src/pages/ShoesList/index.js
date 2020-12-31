import React from "react";
import PageLayout from "../../common/PageLayout";
import ShoesCard from "../../components/ShoesCard";
const ShoesList = () => {
  return (
    <PageLayout>
      <ShoesCard
        image={
          "https://product.hstatic.net/1000284478/product/50i_32shc7011_1_b366054fa58848d7b6d2ccb37d4369da_1024x1024.jpg"
        }
        title={"Shoes 1 "}
        description={"content 1 "}
      />
    </PageLayout>
  );
};

export default ShoesList;
