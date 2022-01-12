import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  View,
} from "react-native";

import {
  Container,
  Content,
  CotainerTitle,
  TitleBold,
  TitleNormal,
  FillYourBetText,
  ChooseGameText,
  Description,
  NumbersContainer,
  ScrollViewContainer,
  ActionButtonsContainer,
} from "./styles";

import {
  ButtonSelectGame,
  Header,
  NumberButton,
  ActionButtons,
  ModalCart,
} from "@components/index";

import { listGamesConfig } from "@shared/services/endpoints";

import * as cartActions from "@store/actions/cart";

export type GamesData = {
  id: number;
  color: string;
  description: string;
  max_number: number;
  price: number;
  range: number;
  type: string;
};

type ListGames = {
  min_cart_value: number;
  types: GamesData[];
};

const NewBet = () => {
  const [listGames, setListGames] = useState<ListGames>({} as ListGames);
  const [selectedGame, setSelectedGame] = useState<GamesData>({} as GamesData);
  const [numbersSelected, setNumbersSelected] = useState<number[]>(
    [] as number[]
  );
  const [loading, setLoading] = useState(true);

  const cart = useSelector(
    (reducer: { cart: { itemsToSave: { id: number; numbers: [] }[] } }) =>
      reducer.cart.itemsToSave
  );

  const [cartModalVisible, setCartModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await listGamesConfig();
      setListGames(response);
      setSelectedGame({
        ...response.types[0],
      });
      setLoading(false);
    };
    getData();
  }, []);

  const selectGameHandler = (selectedData: GamesData) => {
    setNumbersSelected([]);
    setSelectedGame({
      ...selectedData,
    });
  };

  const selectNumberHandler = (value: number) => {
    let aux = [...numbersSelected];

    if (
      !numbersSelected.includes(value) &&
      numbersSelected.length === selectedGame.max_number
    ) {
      return Alert.alert(
        "You can't do it.",
        `You can't select more numbers than ${selectedGame.max_number}.`,
        [{ text: "Close", style: "destructive" }]
      );
    }

    if (numbersSelected.includes(value)) {
      aux.splice(aux.indexOf(value), 1);

      setNumbersSelected([...aux]);
    } else {
      setNumbersSelected((current) => [...current, value]);
    }
  };

  const completeGameHandler = () => {
    const newArr = [...numbersSelected];
    const max = selectedGame.max_number;

    if (numbersSelected.length < max) {
      while (newArr.length < max) {
        let newNumber = Math.ceil(Math.random() * selectedGame.range);
        if (!newArr.includes(newNumber)) {
          newArr.push(newNumber);
        }
      }
      return setNumbersSelected([...newArr]);
    }

    Alert.alert(
      "You can't do it.",
      `You can't select more numbers than ${selectedGame.max_number}.`,
      [{ text: "Close", style: "destructive" }]
    );
  };

  const clearGameHandler = () => {
    setNumbersSelected([]);
  };

  const addToCartHandler = () => {
    let exist = cart.some((item) => {
      return (
        item.numbers.join(",") ===
          numbersSelected.sort((a, b) => a - b).join(",") &&
        selectedGame.id === item.id
      );
    });

    if (exist) {
      return Alert.alert("Exists", "This bet already exists in your cart.", [
        { text: "Close", style: "destructive" },
      ]);
    }

    if (numbersSelected.length === selectedGame.max_number) {
      dispatch(
        cartActions.addToCartAction(
          {
            game_id: selectedGame.id,
            numbers: [...numbersSelected].sort((a, b) => a - b),
          },
          {
            id: selectedGame.id,
            color: selectedGame.color,
            price: selectedGame.price,
            type: selectedGame.type,
            numbers: [...numbersSelected].sort((a, b) => a - b),
          }
        )
      );
      setNumbersSelected([]);
      Alert.alert("Success!!", "This bet has been added to your cart.", [
        { text: "Close", style: "destructive" },
      ]);
    } else {
      Alert.alert(
        "Not enough numbers",
        `You must select ${selectedGame.max_number} numbers. \n(Missing ${
          selectedGame.max_number - numbersSelected.length
        } to complete)`,
        [{ text: "Close", style: "destructive" }]
      );
    }
  };

  const renderNumbers = () => {
    let { color } = selectedGame;
    let aux = [];
    for (let i = 1; i <= selectedGame.range; i++) {
      aux.push(
        <NumberButton
          color={color}
          active={numbersSelected.includes(i) ? true : false}
          number={i}
          key={i}
          selectThisNumber={() => selectNumberHandler(i)}
        />
      );
    }
    return aux;
  };

  return (
    <Container>
      <Header
        btnLeft="Home"
        btnRight="Cart"
        numberItemsCart={cart.length}
        cartVisibleFunction={() =>
          cartModalVisible
            ? setCartModalVisible(false)
            : setCartModalVisible(true)
        }
      />
      <Content>
        {loading ? (
          <ActivityIndicator
            color={"#B5C401"}
            style={{ alignSelf: "center", marginTop: "80%" }}
            size={30}
          />
        ) : (
          <>
            <CotainerTitle>
              <TitleBold>NEW BET</TitleBold>
              <TitleNormal>FOR {selectedGame.type.toUpperCase()}</TitleNormal>
            </CotainerTitle>
            <ChooseGameText>Choose a game</ChooseGameText>
            <View style={{ height: 31 }}>
              <FlatList
                data={listGames.types}
                keyExtractor={(item) => item.type}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => (
                  <ButtonSelectGame
                    color={item.color}
                    name={item.type}
                    active={selectedGame.type === item.type ? true : false}
                    onPress={() => selectGameHandler(item)}
                  />
                )}
              />
            </View>
            <FillYourBetText>Fill your bet</FillYourBetText>
            <Description>{selectedGame.description}</Description>
            <ScrollViewContainer>
              <ScrollView style={{ marginTop: 10 }}>
                <NumbersContainer>{renderNumbers()}</NumbersContainer>
              </ScrollView>
            </ScrollViewContainer>
            <ActionButtonsContainer>
              <ActionButtons
                text="Complete Game"
                onPress={completeGameHandler}
              />
              <ActionButtons text="Clear Game" onPress={clearGameHandler} />
            </ActionButtonsContainer>
            <ActionButtons
              text="Add to cart"
              cart={true}
              onPress={addToCartHandler}
            />
          </>
        )}
      </Content>
      <ModalCart
        visible={cartModalVisible}
        minPrice={listGames.min_cart_value}
        onClose={() => setCartModalVisible(false)}
      />
    </Container>
  );
};

export default NewBet;
