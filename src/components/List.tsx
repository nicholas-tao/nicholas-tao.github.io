import { IItem } from "../types";
import { Link } from "./Link";
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

interface ListProps {
  description: string;
  items: IItem[];
}

export const List = ({ description, items }: ListProps) => (
  <Wrapper>
    <Description>{description}</Description>
    <Items>
      {items.map((item) => (
        <Item key={item.description}>
          {item.emoji && <>{item.emoji} </>}
          {item.description}{" "}
          {item.company && <Link href={item.link ?? ""}>{item.company}</Link>}
        </Item>
      ))}
    </Items>
  </Wrapper>
);

// -- Styled Components --

const Wrapper = styled.div``;

const Description = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${colors.textSecondary};
  margin: 0 0 4px;
`;

const Items = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const Item = styled.li`
  font-size: 17px;
  line-height: 1.8;
  color: ${colors.textSecondary};

  &::marker {
    color: ${colors.markerColor};
    font-size: 14px;
  }
`;
