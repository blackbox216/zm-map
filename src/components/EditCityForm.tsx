import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow, IonTitle } from '@ionic/react';
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
        // IonContent to enable scrolling if browser size cuts off the buttons
        <IonContent> 
            <form className="ion-padding">
                <IonItem>
                    <IonTitle>{"Editing " + city.name}</IonTitle>
                </IonItem>
                <IonItem>
                    <IonCol>
                        <IonLabel>Select Team</IonLabel>
                    </IonCol>
                    <IonCol>
                        <IonRadioGroup value={team} placeholder="shadow" onIonChange={(e) => setTeam(e.detail.value)}>
                            <IonRow>
                            {
                                Object.keys(TEAM).map(val => {
                                    val = val.toLowerCase();
                                    return <IonCol>
                                        <IonItem>
                                            <IonLabel> {val}</IonLabel>
                                            <IonRadio value={val}></IonRadio>
                                        </IonItem>
                                    </IonCol>
                                })
                            }
                            </IonRow>
                        </IonRadioGroup>
                    </IonCol>
                </IonItem>
                
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
                        <IonButton className="ion-margin" type="button" expand="block" onClick={() => {
                                setTeam(city.getDefaultTeam())
                                setSoldiers(city.getDefaultSoldiers())
                            }}>
                                Reset
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id="saveButton" className="ion-margin" type="button" expand="block" onClick={() => {
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
        </IonContent>
  );
};

// function onSave(city: City, newTeam?: TEAM, newSoldiers?: number): React.MouseEventHandler<HTMLIonButtonElement> {
//     city.team = newTeam;
//     city.soldiers = newSoldiers;
// }

export default EditCityForm;
