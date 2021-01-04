// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import FeatureBox from "./feature-box";

//import images
import featureImg from "../../assets/images/app/feature2.png";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          icon: "monitor",
          title: "Disponible et synchronisé sur l'ensemble des devices",
          desc:
            "Disponible sur tablette/téléphone Android et iOS ainsi que sur Ordinateur. Toutes vos données et états des lieux sont automatiquement synchronisés. Vous pouvez commencer votre état des lieux sur ordinateur et le poursuivre sur tablette ou téléphone.",
        },
        {
          icon: "arrow-right",
          title: "Navigation intuitive et simple",
          desc:
            "L’app a été pensé pour être la plus simple possible, vous naviguez parmis 4 étapes lors de la réalisation de l’état des lieux, et vous pouvez à tout moment revenir sur une étape précédente.",
        },
        {
          icon: "clipboard",
          title: "Un etat des lieux exhaustif",
          desc:
            "Housely vous permet de renseigner les informations du propriétaire, du mandataire, des locataires et du bien. Ces informations sont alors sauvegardées et pourront être ré-utilisées lors de la réalisation d’un autre état des lieux. Vous faisant ainsi gagner un temps précieux.",
        },
        {
          icon: "database",
          title: "Base de donnée / Recherche",
          desc:
            "Housely stocke tous vos états des lieux, interlocuteurs et propriétés, et vous permet grâce à son moteur de recherche d'avoir accès à l'information que vous cherchez, facilement et rapidement.",
        },
        {
          icon: "plus-circle",
          title: "Ajout de pièces, clés et compteurs",
          desc:
            "Parce qu’il existe une multitude de biens immobiliers, nous avons choisi de vous laissez libre de créer autant de pièces que vous souhaitez. Par un simple clic sur +, ajoutez une pièce. Ajoutez les compteurs, les clés, votre assurance ainsi que les commentaires & réserve.",
        },
        {
          icon: "edit-2",
          title: "Signatures sécurisées",
          desc:
            "La signature numérique permettra de valider définitivement l’état des lieux. A partir de cet étape, si une modification était introduite dans le rapport les signatures disparaîtraient.",
        },
        {
          icon: "share-2",
          title: "Partage",
          desc:
            "Après avoir signé numériquement votre état des lieux, vous pourrez alors le partager, l'envoyer par mail, le stocker, l’imprimer.",
        },
        {
          icon: "camera",
          title: "Ajouter des photos et annotez les",
          desc:
            "Grâce à son module de photo, vous pourrez prendre plusieurs photos de chaque élément ou les charger depuis votre ordinateur/tablette/téléphone. Vous pourrez également dessiner sur chaque photo, ce qui permet par exemple de mettre en évidence une tâche, un revêtement abimé ou entourer quelque chose de précis sur votre photo.",
        },
        {
          icon: "list",
          title: "Liste évolutive de références",
          desc:
            "Afin de vous faciliter la réalisation de l'état des lieux, toutes les références ( mûr, sol, porte, équipements, ... ) sont listées dans l'application. Afin de vous offrir une plus grande liberté d’utilisation, Housely s'adapte à vos besoins et vous permet d’enrichir le contenu des listes de références qu'il utilise. Ces entités seront sauvegardées pour ne pas que vous ayez à les compléter de nouveau.",
        },
        {
          icon: "repeat",
          title: "Etat des lieux d'entrée et de sortie",
          desc:
            "Gagnez en temps et en rigueur en remplissant vos états des lieux de sortie à partir de celui d'entrée et vice-versa. Le jour où votre locataire partira, vous pourrez créer en 1 clic son état des lieux de sortie à partir de l'entrée, vous n'aurez plus qu'à annoter les changements. De même, vous pourrez ensuite créer un état des lieux d'entrée à partir de la sortie.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Fonctionnalités"
              desc="Pour les professionnels et les particuliers : que vous soyez propriétaire, mandataire, locataire ou co-locataire, cette solution a été conçue pour vous."
              />

            <Row className="justify-content-center align-items-center">
              <Col lg="8" md="8">
                <Row>
                  <FeatureBox features={this.state.features} />
                </Row>
              </Col>
              <Col
                lg="4"
                md="4"
                xs="12"
                className="mt-4 pt-2 text-center text-md-right"
              >
                <img src={featureImg} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
