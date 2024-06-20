import { LitElement, html} from "lit-element";
import styles from "./favorite-characters-styles"
import "../character-card/character-card";

class FavoriteCharacters extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      characters: {
        type: Array
      },
      showDialog : {
        type: Boolean
      }
    }
  }

  constructor() {
    super()
    this.characters = []
    this.showDialog = false
  }

   closeDialog(){
    this.showDialog = false;
     this.dispatchEvent(new CustomEvent('update-close-dialog', {
      detail: { showDialog: this.showDialog },
      bubbles: true,
      composed: true,
    }));
  }

  updated(changedProperties) {
    console.log(changedProperties);
    if (changedProperties.has('favorities')) {
      console.log(this.characters + "update");
    }
  }


  render() {
    return html`
      <section class="dialog ${this.showDialog? '': 'hidden'}">
          <div class="dialog__main">
              <h1>Listado de favoritos</h1>
              <div class="dialog__body">
                ${this.characters.map((character) => (
                html`<character-card 
                  .character="${character}" 
                  .isFavorite="${this.characters.includes(character)}"
                  />
                  `
              ))}
              </div>
          </div>
          <div class="dialog__close" @click="${this.closeDialog}">
              <div class="dialog__close-content">
                <span class="cross-line"></span>
                <span class="cross-line"></span>
              </div>
          </div>
      </section>
    `
  }
}

customElements.define("favorite-characters", FavoriteCharacters)