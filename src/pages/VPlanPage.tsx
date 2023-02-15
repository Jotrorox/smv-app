import { IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
import { RefresherEventDetail } from '@ionic/core';
import React, { useState, useEffect } from 'react';
import { useIonViewDidEnter } from '@ionic/react';
import './VPlanPage.css';

interface Plan {
    [day: string]: {
        [klasse: string]: {
            stunde: string;
            vertreter: string;
            fach: string;
            raum: string;
            vertretungs_text: string;
        };
    };
}

const Vertretungsplan: React.FC = () => {
    const [plan, setPlan] = useState<Plan>({});




    const fetchPlan = async () => {
        const response = await fetch('https://jsonendpoint.com/my-unique/endpoint/x6j0t');
        const data = await response.json();
        setPlan(data);
        console.debug("Fetched Data")
    };

    useEffect(() => {
        fetchPlan();
    }, []);

    const refreshPlan = async (event: CustomEvent<RefresherEventDetail>) => {
        await fetchPlan();
        console.debug("Refresh Complete")
        event.detail.complete();
    };
    useIonViewDidEnter(async () => {
        await fetchPlan();
    });


    // rest of the component code


    const renderTableRows = (day: string, klasse: string) => {
        const { stunde, vertreter, fach, raum, vertretungs_text } = plan[day][klasse];
        return (
            <tr key={`${day}-${klasse}`}>
                <td>{klasse}</td>
                <td>{stunde}</td>
                <td>{vertreter}</td>
                <td>{fach}</td>
                <td>{raum}</td>
                <td>{vertretungs_text}</td>
            </tr>
        );
    };

    const renderCard = (day: string) => {
        const klasses = Object.keys(plan[day]);
        return (
            <div className="card" key={day}>
                <h2 className="card_title">{day}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Klasse</th>
                        <th>Stunde</th>
                        <th>Vertreter</th>
                        <th>Fach</th>
                        <th>Raum</th>
                        <th>Vertretungs-text</th>
                    </tr>
                    </thead>
                    <tbody>
                    {klasses.map((klasse) => renderTableRows(day, klasse))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="title">Vertretungsplan</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={refreshPlan}>
                    <IonRefresherContent />
                </IonRefresher>
                {Object.keys(plan).map((day) => renderCard(day))}
            </IonContent>
        </IonPage>
    );
};

export default Vertretungsplan;
