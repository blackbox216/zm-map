import React, { useState } from 'react';
import { IonButton, IonCol,IonInput, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import City from './City';
import TEAM from './Team';

interface EditCityFormProps {
    city: City;
    citySetter: Function;
    isModalOpenSetter: Function;
}

const EditCityForm: React.FC<EditCityFormProps> = ({ city, citySetter, isModalOpenSetter }) => {

    const [team, setTeam] = useState<TEAM>(city.team ?? TEAM.SHADOW);
    const [soldiers, setSoldiers] = useState<number>(city.getNumSoldiers());
  
    return (
        <form className="ion-padding">
            <IonToolbar>
                <IonTitle>{"Editing " + city.name}</IonTitle>
            </IonToolbar>
            <IonRow>
                <IonCol>Select Team</IonCol>
                <IonCol>
                    <IonList>
                        <IonRadioGroup value={team} placeholder="shadow" onIonChange={(e) => setTeam(e.detail.value)}>
                            {
                                Object.keys(TEAM).map(val => {
                                    val = val.toLowerCase();
                                    return <IonItem>
                                        <IonLabel> {val}</IonLabel>
                                        <IonRadio value={val}></IonRadio>
                                    </IonItem>
                                })
                            }
                        </IonRadioGroup>
                    </IonList>
                </IonCol>
            </IonRow>
            
            <IonItem>
                <IonLabel position="floating">Number of Soldiers</IonLabel>
                <IonInput value={soldiers} onIonChange={(e) => {
                    var newValue = e.detail.value;
                    if (newValue) {
                        setSoldiers(parseInt(newValue));
                    }
                } } onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        document.getElementById("saveButton")?.click();
                    }
                } }/>
            </IonItem>

            <IonRow>
                <IonCol>
                    <IonButton className="ion-margin-bottom" type="button" expand="block" onClick={() => {
                            setTeam(city.getDefaultTeam())
                            setSoldiers(city.getDefaultSoldiers())
                        }}>
                            Reset
                    </IonButton>
                </IonCol>
                <IonCol>
                    <IonButton id="saveButton" className="ion-margin-bottom" type="button" expand="block" onClick={() => {
                        city.team = team;
                        city.soldiers = soldiers;
                        citySetter(city);
                        isModalOpenSetter(false); // close modal!

                        // persist to local storage 
                        // await Storage.set({
                        //     key: String(city.num),
                        //     value: city.toJson(),
                        // })
                        window.localStorage.setItem(String(city.num), city.toJson());

                        //alert((team ?? "none") + " with soldiers: " + soldiers); // DEBUG ONLY
                        
                    }}>
                        Save
                    </IonButton>
                </IonCol>
            </IonRow>
            
        </form>
  );
};

// function onSave(city: City, newTeam?: TEAM, newSoldiers?: number): React.MouseEventHandler<HTMLIonButtonElement> {
//     city.team = newTeam;
//     city.soldiers = newSoldiers;
// }

export default EditCityForm;
