import './ExploreContainer.css';

import React, { useState } from 'react';
import { IonButton, IonCard, IonCol, IonModal } from '@ionic/react';
import EditCityForm from './EditCityForm';
import City from './City';
import TEAM from './Team';
import { getTotalSoldiers } from '../pages/Tab1';
interface ContainerProps {
  city: City;
  cities: Array<City>;
  citiesSetter: Function;
  totalsSetter: Function;
}

const ExploreContainer: React.FC<ContainerProps> = ({ city, cities, citiesSetter, totalsSetter }) => {

  const [cityMutable, setCity] = useState(city);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <IonCard id={"city"+city.num} className={"city" + city.num}> 
      <IonButton className="cityButton" size="small" id={"button" + city.num} onClick={(e) => setIsModalOpen(true)}>{city.name}</IonButton>
      <IonModal isOpen={isModalOpen} onWillDismiss={(e) => {
        cities[city.num-1] = cityMutable;
        citiesSetter(cities);
        totalsSetter(Object.keys(TEAM).map(val => {
          return <>
              <IonCol>{val}:</IonCol>
              <IonCol>
                {getTotalSoldiers(val, cities)}
              </IonCol>
          </>
        }))
        setIsModalOpen(false); // otherwise clicking outside of modal to dismiss prevents us from opening modal again since it's stuck on true
        //alert("changed.. isModalOpen: " + isModalOpen);
      }}>
        <EditCityForm city={cityMutable} citySetter={setCity} isModalOpenSetter={setIsModalOpen}></EditCityForm>
      </IonModal>

      <div style={{backgroundColor: cityMutable.getTeamColor()}}>{cityMutable.getTeamText()}</div>
      <IonCard className="cityText">{cityMutable.getNumSoldiers() + ' 万兵'}</IonCard>
    </IonCard>
  );
};

export default ExploreContainer;
