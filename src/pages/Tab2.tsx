import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonContent, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { takePhoto, photos, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo gallery</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        {/* where we will add a button that opens the camera*/}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="why it's not changed" />

        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />

              </IonCol>
            ))}
          </IonRow>
        </IonGrid>




        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => { takePhoto() }}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>




    </IonPage >


  );
};

export default Tab2;
