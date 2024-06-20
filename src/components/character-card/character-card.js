import { LitElement, html } from "lit-element";
import styles from "./character-card-styles"

class CharacterCard extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      character: {
        type: Object
      },
      isFavorite: {
        type: Boolean
      }
    }
  }

  constructor() {
    super()
    this.character = {}
    this.isFavorite = false
  }

  addFavorities() {
    this.dispatchEvent(new CustomEvent('update-favorite-character', {
      detail: { character: this.character },
      bubbles: true,
      composed: true,
    }));
  }


  render() {
    return html`
      <div class="charactes__img">
        <img src="${this.character.image}" alt="img_charactes">
      </div>
      <div class="charactes__info">
        <p title="${this.character.name}">Nombre: ${this.character.name}</p>
        <p>Especie: ${this.character.species}</p>
        <p>Genero: ${this.character.gender}</p>
        <button @click="${this.addFavorities}" class="btn__add-favorite">${this.isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"} </button>
      </div>
    `
  }
}

customElements.define("character-card", CharacterCard)