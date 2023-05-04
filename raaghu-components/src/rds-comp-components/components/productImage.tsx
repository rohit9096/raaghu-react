import React from "react";
import RdsCompProductImage from "../../rds-comp-product-image/rds-comp-product-image";

export const code_actual = () => {
  return (
    <RdsCompProductImage
      item={{
        imgUrl: "https://www.linkpicture.com/q/product_img_with_title_1.png",
        rating: 3,
        reviews: "See all 123 reviews",
        productTitle: "Basic Tee",
        productDescription:
          "White tees stain easily, and black tees fade. This is going to be gray for a while.",
        colorLabel: "White",
        cost: "$35",
        badgeWithIcon: { badge: "Quality Assured", icon: "featured" },
        ColorSwitcherList: [
          { id: 1, color: "#FFFFFF" },
          { id: 2, color: "#FDD2FF" },
          { id: 3, color: "#BFEAFF" },
        ],
        showAddToBagButton: true,
        showBuyNowButton: true,
        bordered: true,
      }}
    />
  );
};

export default code_actual;
