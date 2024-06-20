import { LitElement, html } from "lit-element";
import styles from "./home-page-styles"
import "../components/character-card/character-card";
import "../components/favorite-characters/favorite-characters";

class HomePage extends LitElement {
  static get styles() {
    return [styles]
  }

  static get properties() {
    return {
      characters: {
        type: Array
      },
      favorities: {
        type: Array
      },
      showDialog:{
        type: Boolean
      }
    }
  }

  constructor() {
    super()
    this.characters = []
    this.addEventListener("update-favorite-character", this.handleUpdateFavorites)
    this.addEventListener("update-close-dialog", this.closeDialog)
    this.favorities = []
    this.showDialog = false
  }
  connectedCallback() {
    super.connectedCallback()
    this.getCharacters()
  }
  handleUpdateFavorites(event) {
    const { character } = event.detail
    console.log();
    if (!this.favorities.includes(character)) {
      this.favorities.push(character)
    }
    else {
      const positionCharacter = this.favorities.indexOf(character)
      this.favorities.splice(positionCharacter, 1)
    }
    console.log("update characteres");
    console.log(this.favorities);
    this.requestUpdate();
  }
  dialog(){
    this.showDialog = true
    this.requestUpdate();
  }
  closeDialog(event){
    const { showDialog } = event.detail
    this.showDialog = showDialog;
    this.requestUpdate();
  }

  async getCharacters() {
    await fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => (res.json()))
      .then(({ info, results }) => this.characters = results)
  }

  render() {
    return html`
      <button class="btn__favorites" @click="${this.dialog}">
        <p>Ver</p>
        <p>favoritos</p>
      </button>
      <favorite-characters .showDialog="${this.showDialog}" .characters="${this.favorities}"></favorite-characters>

      ${this.characters.map((character) => (
      html`<character-card 
        .character="${character}" 
        .isFavorite="${this.favorities.includes(character)}"
        />
        `
    ))}
    `
  }
}

customElements.define("home-page", HomePage)