import React, { Component } from "react";
import "./Tarifs.css";

class Tarifs extends Component {
  render() {
    return (
      <div id="tarifs" className="Tarifs pb-5">
        <h1>
        Vous avez un projet? Demandez un devis gratuit!
        </h1>
        <div class="container-fluid my-5">
          <section>
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <div class="card pricing-card black-text">
                  <div class="aqua-gradient rounded-top text-center py-3">
                    <h4 class="option">Site vitrine standard</h4>
                  </div>

                  <div class=" card-body striped green-striped card-background px-1">
                    <h2 class="my-4 pb-3 text-center">A partir de 499€*</h2>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i> Développé sur
                        Wordpress
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Charte graphique et
                        maquette prédéfinie
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Selection d’une
                        palette de couleur
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Domaine et
                        hébérgement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Site responsive
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Formulaire de
                        contact
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Liens de partage sur
                        les réseaux sociaux
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Optimisation du
                        référencement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Mise en ligne du
                        site
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> PDF pour
                        l’utilisation du site et des modifications
                      </li>
                    </ul>
                    <button class="mb-3 mt-3 btnDevis btn aqua-gradient btn-rounded d-flex justify-content-center">
                      demander un devis
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card pricing-card black-text">
                  <div class="peach-gradient rounded-top">
                    <h4 class="option text-center py-3">
                      Site vitrine personnalisé
                    </h4>
                  </div>

                  <div class="card-body striped orange-striped card-background px-1">
                    <h2 class="my-4 pb-3 text-center">A partir de 799€*</h2>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i> Développé sur mesure
                        (codé à la main)
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Charte graphique et
                        maquette prédéfinie
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Selection d’une
                        palette de couleur
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Domaine et
                        hébérgement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Site responsive
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Formulaire de
                        contact avec map disponible
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Liens de partage sur
                        les réseaux sociaux
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Optimisation du
                        référencement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Mise en ligne du
                        site
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> PDF pour
                        l’utilisation du site et des modifications
                      </li>
                    </ul>
                    <button class="mb-3 mt-3 btnDevis btn peach-gradient btn-rounded d-flex justify-content-center">
                      Demander un devis
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card pricing-card black-text">
                  <div class="purple-gradient rounded-top">
                    <h4 class="option text-center py-3">Site E-commerce</h4>
                  </div>

                  <div class="card-body striped purple-striped card-background px-1">
                    <h2 class="my-4 pb-3 text-center">A partir de 1999€*</h2>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i> Développé sur
                        Prestashop ou Wordpress
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Charte graphique et
                        maquette prédéfinie
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Selection d’une
                        palette de couleur
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Domaine et
                        hébérgement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Site responsive
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Formulaire de
                        contact avec map disponible
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Liens de partage sur
                        les réseaux sociaux
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Optimisation du
                        référencement
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> Mise en ligne du
                        site
                      </li>
                      <li>
                        <i class="far fa-check-circle"></i> PDF pour
                        l’utilisation du site et des modifications
                      </li>
                    </ul>
                    <button class="mb-3 mt-3 btnDevis btn purple-gradient btn-rounded d-flex justify-content-center">
                      Demander un devis{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Tarifs;
