import image from "../../../images/p3.png";
import cardimage from "../../../images/card-icon-1.png";
import { Col } from "antd";
import { Desc, SubTitle, Title } from "../Fonts/Font";
import BTN from "../Buttons/Button";

export const ProductCard = () => {
  const productData = [
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3,199 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
    {
      image: image,
      title: "Acoustic Guitar",
      price: "3499 INR",
    },
  ];
  return productData.map((item, index) => {
    const { image, title, price } = item;
    return (
      <Col key={index} className="gutter-row" lg={6} md={6} sm={8} xs={12}>
        <div className="card-style">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <Title text={title} align="center" />
          <SubTitle text={price} align="center" />
          <BTN text="Buy Now" btnclass="primary-btn" />
        </div>
      </Col>
    );
  });
};

export const ServiceCard = () => {
  const serviceData = [
    {
      image: cardimage,
      title: "Title 001",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 002",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 003",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 004",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 005",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 006",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
  ];
  return serviceData.map((item, index) => {
    const { image, title, description } = item;
    return (
      <Col key={index} className="gutter-row" xs={12} sm={8} md={8} lg={8}>
        <div className="service-style">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <Title text={title} align="center" />
          <Desc text={description} align="center" />

          <BTN text="Read More" btnclass="secondary-btn" />
        </div>
      </Col>
    );
  });
};
