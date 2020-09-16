import React, { useEffect } from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";

function ShopItem(props) {
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(1);
  useEffect(() => {
    let discount = props.item.min * props.item.price * props.item.discount;

    setCount(props.item.min);
    setPrice(props.item.min * props.item.price - discount);
  }, []);
  const plusCount = () => {
    if (count < props.item.max) {
      setCount((prevCount) => prevCount + 1);
      let discount = (count + 1) * props.item.price * props.item.discount;
      setPrice((count + 1) * props.item.price - discount);
    }
  };
  const minusCount = () => {
    if (count > props.item.min) {
      setCount((prevCount) => prevCount - 1);
      let discount = (count + 1) * props.item.price * props.item.discount;
      setPrice((count - 1) * props.item.price - discount);
    }
  };
  return (
    <Item key={props.item.id}>
      {props.item.discount != 0 ? (
        <Item.Image
          src={"public/static/images/" + props.item.img}
          label={{
            as: "p",
            color: "red",
            corner: "right",
            icon: "percent",
          }}
        />
      ) : (
        <Item.Image src={"public/static/images/" + props.item.img} />
      )}
      <Item.Content>
        <Item.Header as="a">{props.item.headerEn}</Item.Header>
        {props.item.discount != 0 ? (
          <Item.Meta>
            <span>
              {props.item.dateFrom}-{props.item.dateTo} discount{" "}
              {props.item.discount * 100}%
            </span>
          </Item.Meta>
        ) : null}
        <Item.Description style={{ minHeight: "45px" }}>
          {props.item.textEn}
        </Item.Description>
        <Item.Extra>
          <Label.Group>
            <Label>
              <Icon name="user" /> {count + " persons"}
            </Label>
            <Label
              as="p"
              color={props.item.discount != 0 ? "red" : "green"}
              tag
            >
              {price + " ₪"}
            </Label>
          </Label.Group>
          <Button.Group a>
            <Button
              icon
              onClick={minusCount}
              disabled={count == props.item.min}
            >
              <Icon name="minus" />
            </Button>

            <Button icon onClick={plusCount} disabled={count == props.item.max}>
              <Icon name="plus" />
            </Button>
          </Button.Group>
          <Button primary>Add to cart</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
export default ShopItem;
