import React from "react";
import { FlatList } from "react-native";

import { ContainerListButtons, FiltersText } from "./styles";

import ButtonSelectGame from "@components/ButtonSelectGame";
import { GamesData } from "@screens/NewBet";

type Props = {
  data: GamesData[];
  filter: string[];
  disabled: boolean;
  onSelectFilter: (type: string) => void;
};

const FilterButtonsList = ({
  data,
  filter,
  disabled,
  onSelectFilter,
}: Props) => {
  return (
    <ContainerListButtons>
      <FiltersText>Filters:</FiltersText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => (
          <ButtonSelectGame
            active={filter.includes(item.type)}
            name={item.type}
            color={disabled ? "gray" : item.color}
            disabled={disabled}
            onPress={() => onSelectFilter(item.type)}
          />
        )}
      />
    </ContainerListButtons>
  );
};

export default FilterButtonsList;
