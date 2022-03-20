import React, { useState } from 'react';
import { IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { TransformComponent } from "react-zoom-pan-pinch";
import City from '../components/City';
import TEAM from '../components/Team';
import Xarrow from "react-xarrows";

export const cityNamesAndDefaultSoldiers = [
  ["云中", 30], // city1
  ["雁门", 15], // city2
  ["代", 15], // city3
  ["蓟", 30], // city4
  ["朔州", 15], // city5
  ["晋阳", 20], // city6
  ["邯郸", 20], // city7
  ["南皮", 15], // city8
  ["邺城", 20], // city9
  ["马陵", 15], // city10
  ["临淄", 30], // city11
  ["上郡", 20], // city12
  ["函谷关", 20], // city13
  ["安邑", 20], // city14
  ["洛阳", 70], // city15
  ["新郑", 70], // city16
  ["大梁", 70], // city17
  ["陈", 20], // city18
  ["曲阜", 15], // city19
  ["寿春", 15], // city20
  ["会稽", 30], // city21
  ["陇西", 30], // city22
  ["北地", 15], // city23
  ["咸阳", 15], // city24
  ["汉中", 15], // city25
  ["丹阳", 20], // city26
  ["鄢", 15], // city27
  ["郢", 30], // city28
  ["信阳", 20], // city29
  ["蜀", 30], // city30
  ["巴", 15], // city31
];

var cityEdges = [
  [1,2],
  [2,3],
  [3,4],
  [4,8],
  [1,5],
  [5,6],
  [2,6],
  [6,7],
  [3,7],
  [7,8],
  [7,9],
  [9,10],
  [7,10],
  [10,11],
  [10,19],
  [6,12],
  [12,13],
  [13,14],
  [13,26],
  [6,14],
  [14,15],
  [6,15],
  [15,17],
  [15,16],
  [17,16],
  [9,17],
  [17,18],
  [18,19],
  [18,20],
  [19,20],
  [20,21],
  [12,23],
  [12,24],
  [23,22],
  [22,24],
  [24,13],
  [24,25],
  [25,30],
  [30,31],
  [25,31],
  [26,31],
  [26,27],
  [15,26],
  [26,27],
  [16,27],
  [27,28],
  [27,29],
  [18,29]
];


export function getTotalSoldiers(team: string, cities: Array<City>) {
  return cities
  .map((city) => city.team?.toUpperCase() === team.toUpperCase() ? city.soldiers ?? 0 : 0)
  .reduce((partialSum, a) => partialSum + a, 0)
}

const Tab1: React.FC = () => {

  var cityObjects = cityNamesAndDefaultSoldiers.map((cityNameAndDefaultSoldiers, index) => {
    var cityName = cityNameAndDefaultSoldiers[0] as string;
    var cityFromStorage = window.localStorage.getItem(String(index+1));
    //console.log(cityFromStorage);
    if (cityFromStorage !== null) return City.fromJson(cityFromStorage);
    return new City(cityName, index+1); //should rarely hit this since we put defaults in localstorage
  })
  //console.log(cityObjects);
  const [cities, citiesSetter] = useState(cityObjects);
  const [totals, totalsSetter] = useState(Object.keys(TEAM).map(val => {
    return <>
        <IonCol>{val}:</IonCol>
        <IonCol>
          {getTotalSoldiers(val, cities)}
        </IonCol>
    </>
  }));

  const [, setRerender] = useState({});
  const forceRerender = async () => {
    //console.log("before delay");
    await delay(10); // wait a bit then force rerender
    //console.log("after delay");
    setRerender({});

    await delay(500); // backup in case page loads slow
    setRerender({});

    await delay(4000); // backup2
    setRerender({});
  };

  return (
    <IonPage onLoad={forceRerender}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonGrid>
        <form className="ion-padding-none">
          {totals}
          <IonButton size='small' type="submit" onClick={() => {
            cities.forEach(city => {
              city = city.withDefaultValues();
              window.localStorage.setItem(String(city.num), city.toJson());
            });
          }}>Reset All Cities</IonButton>
        </form>
      </IonGrid>

      {/* <TransformWrapper initialScale={1} minScale={0.8} maxScale={1} onZoom={forceRerender} onPanning={forceRerender}> */}
        <TransformComponent>
          <img style={{opacity: 0.3}} src="https://raw.githubusercontent.com/blackbox216/zm-map/main/public/assets/img/background.jpg"/>
          
          {
            cities.map((city) => {
              return <ExploreContainer city={city} cities={cities} citiesSetter={citiesSetter} totalsSetter={totalsSetter} />
            })
          }
          {
            cityEdges.map((arr) => {
              return <Xarrow zIndex={1} showHead={false} curveness={0.1} start={"city"+arr[0]} end={"city"+arr[1]}/>
            })
          }
        </TransformComponent>
      {/* </TransformWrapper> */}
      
    </IonPage>
  );
};

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

export default Tab1;