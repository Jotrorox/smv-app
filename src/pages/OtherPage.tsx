import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './OtherPage.css';

const OtherPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anderes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Anderes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hier weden andere dinge angezeigt" />
      </IonContent>
    </IonPage>
  );
};

export default OtherPage;
