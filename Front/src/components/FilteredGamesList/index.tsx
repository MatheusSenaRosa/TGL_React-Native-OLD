import React from "react";
import { FlatList } from "react-native";

import { BetList } from "@screens/Home";
import convertMonetaryValue from "@shared/helpers/convertMonetaryValue";

import {
  ColoredDiviser,
  GamesListItem,
  Content,
  TextNumbers,
  DateAndPrice,
  Name,
  EmptyDataContainer,
  EmptyText,
  EmptyDescription,
} from "./styles";

export type Props = {
  data: BetList[];
  getItemColor: (type: string) => string | undefined;
};

const FilteredGamesList = ({ data, getItemColor }: Props) => {
  const dataFormater = (date: string) => {
    let newDate = date.slice(0, 10).split("-");
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
  };
  return (
    <>
      {data?.length === 0 ? (
        <EmptyDataContainer>
          <EmptyText>Empty</EmptyText>
          <EmptyDescription>
            Press on New Bet button to add a new bet.
          </EmptyDescription>
        </EmptyDataContainer>
      ) : (
        <FlatList
          data={data}
          style={{ paddingVertical: 10 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <GamesListItem>
              <ColoredDiviser
                color={getItemColor(item.type.type) || "transparent"}
              />
              <Content>
                <TextNumbers>{item?.choosen_numbers}</TextNumbers>
                <DateAndPrice>
                  {` ${dataFormater(
                    item.created_at
                  )} - (R$ ${convertMonetaryValue(item?.price)})`}
                </DateAndPrice>
                <Name color={getItemColor(item.type.type) || "transparent"}>
                  {item.type.type}
                </Name>
              </Content>
            </GamesListItem>
          )}
        />
      )}
    </>
  );
};

export default FilteredGamesList;
