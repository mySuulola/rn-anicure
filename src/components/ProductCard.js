import React from 'react';
import { Card, Title, Paragraph} from 'react-native-paper';



const ProductCard = ({product}) => {
    return (
      <Card
        style={{
          margin: 20,
          maxWidth: 200,
          height: 300,
        }}>
        <Card.Content>
          <Card.Cover
            style={{
              maxWidth: 300,
              maxHeight: 200,
            }}
            source={{uri: product.image}}
          />
          <Title
          style={{
            fontSize: 13,

          }}

          >{`${product.name}`}</Title>
          <Paragraph>{product.unit_cost_price}</Paragraph>
        </Card.Content>
      </Card>
    );
  };

  export default ProductCard;
