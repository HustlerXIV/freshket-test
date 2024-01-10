import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/Common/Container";
import { fetchData } from "../../utils/apiData";
import { styled } from "styled-components";
import Loader from "../../components/Common/Loader";

const ResponsiveCardModule = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAttractionsData = async () => {
      try {
        setLoading(true);
        const data = await fetchData("attractions");
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttractionsData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Container center>
        <CardContainer>
          {cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              desc={card.body}
              img={card.img_url}
              tags={card.tagsInfo}
            />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

export default ResponsiveCardModule;
