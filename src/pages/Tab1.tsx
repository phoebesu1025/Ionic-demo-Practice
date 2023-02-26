import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonActionSheet,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";
import type { OverlayEventDetail } from "@ionic/core";

const Tab1: React.FC = () => {
  const [present] = useIonActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TEST</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="container">
          <IonButton
            onClick={() =>
              present({
                header: "edit",
                subHeader: "Do you want to edit this page",
                buttons: [
                  {
                    text: "Deleteeeetototototttttttttt",

                    role: "destructive",
                    data: {
                      action: "delete",
                    },
                  },
                  {
                    text: "Share",
                    data: {
                      action: "share",
                    },
                  },
                  {
                    text: "Cancel",
                    role: "cancel",
                    data: {
                      action: "cancel",
                    },
                  },
                ],
                onDidDismiss: ({ detail }) => setResult(detail),
              })
            }
          >
            Open
          </IonButton>
          {result && <code>{JSON.stringify(result, null, 2)}</code>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
