import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Content,
  Screen,
  TextDefault,
  ContainerNewBet,
  Loading,
} from "./styles";

import {
  FilterButtonsList,
  FilteredGamesList,
  Header,
} from "@components/index";
import { GamesData } from "../NewBet";
import { listBetConfig, listGamesConfig } from "@shared/services/endpoints";

export type BetList = {
  choosen_numbers: string;
  created_at: string;
  game_id: number;
  id: number;
  price: number;
  type: { id: number; type: string };
};

const Home = () => {
  const [betList, setBetList] = useState<BetList[]>([] as BetList[]);
  const [listGames, setListGames] = useState<GamesData[]>([] as GamesData[]);
  const [filters, setFilters] = useState<string[]>([] as string[]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      setBetList(await listBetConfig());
      let { types } = await listGamesConfig();
      setListGames(types);
      setLoading(false);
    };
    getList();
  }, []);

  const getColor = (type: string) => {
    return listGames.find((item) => type === item.type)?.color;
  };

  const selectFilterHandler = (type: string) => {
    let aux = [...filters];

    if (aux.includes(type)) {
      aux.splice(aux.indexOf(type), 1);
      return setFilters([...aux]);
    }
    aux.push(type);
    setFilters([...aux]);
  };

  const filterListHandler = () => {
    let newList: BetList[] = [];

    if (filters.length > 0) {
      betList.filter((item) => {
        for (let i in filters) {
          if (item.type.type === filters[i]) {
            newList.push({ ...item });
          }
        }
      });
      return newList;
    }
    return betList;
  };

  return (
    <Screen>
      <Header btnLeft="Log Out" btnRight="Account" />
      <Content>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("NewBet")}>
          <ContainerNewBet>
            <TextDefault color="#b5c401">New Bet</TextDefault>
            <Feather
              name="arrow-right"
              size={25}
              color={"#b5c401"}
              style={{ marginLeft: 5, marginTop: 6 }}
            />
          </ContainerNewBet>
        </TouchableWithoutFeedback>
        {loading ? (
          <Loading>
            <ActivityIndicator color={"#B5C401"} size={50} />
          </Loading>
        ) : (
          <>
            <TextDefault color="#707070">RECENT GAMES</TextDefault>
            <FilterButtonsList
              data={listGames}
              onSelectFilter={selectFilterHandler}
              filter={filters}
              disabled={!(betList?.length > 0)}
            />
            <FilteredGamesList
              data={filterListHandler()}
              getItemColor={getColor}
            />
          </>
        )}
      </Content>
    </Screen>
  );
};

export default Home;
