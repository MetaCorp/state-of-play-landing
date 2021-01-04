// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import PricingBox2 from "../../components/Shared/PricingBox2";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "Particulier",
          price: 4.49,
          duration: "u",
          buttonText: "Acheter Maintenant",
          btnLink: "https://play.google.com/store/apps/details?id=com.company.housely",
          features: [
            { title: "1 état des lieux" },
            { title: "photos illimités" },
            // { title: "Envoi par mail des états des lieux" },
            { title: "Signature électronique sécurisée" },
            { title: "Interlocuteurs, nombre de biens illimités" },
          ],
        },
        {
          id: 2,
          title: "Starter",
          price: 199,
          duration: "an",
          buttonText: "Acheter Maintenant",
          btnLink: "https://play.google.com/store/apps/details?id=com.company.housely",
          isActive: true,
          features: [
            { title: "états des lieux illimités" },
            { title: "photos illimités" },
            // { title: "Envoi par mail des états des lieux" },
            { title: "Synchronisation et sauvegarde sur vos 5 tablettes ou PC" },
            { title: "Signature électronique sécurisée" },
            { title: "Interlocuteurs, nombre de biens illimités" },
          ],
        },
        {
          id: 3,
          title: "Pro",
          price: 369,
          duration: "an",
          buttonText: "Acheter Maintenant",
          btnLink: "https://play.google.com/store/apps/details?id=com.company.housely",
          features: [
            { title: "états des lieux illimités" },
            { title: "photos illimités" },
            // { title: "Envoi par mail des états des lieux" },
            { title: "Synchronisation et sauvegarde sur vos 10 tablettes ou PC" },
            { title: "Signature électronique sécurisée" },
            { title: "Interlocuteurs, nombre de biens illimités" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Choisissez votre tarif"
              desc="pour commencer à utiliser l'application"
            />

            <Row className="align-items-center">
              {/* pricing */}
              <PricingBox2 pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default Pricing;
