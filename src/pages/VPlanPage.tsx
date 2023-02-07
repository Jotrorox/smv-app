import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './VPlanPage.css';

const VPlanPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vertretungsplan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vertretungsplan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hier wird der Vertretungsplan angezeigt werden" />
      </IonContent>
    </IonPage>
  );
};

export default VPlanPage;
