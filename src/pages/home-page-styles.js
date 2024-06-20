import { css } from "lit-element";

export default css`
  h1 {
    font-size: 1.2rem;
  }
  :host{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
  }
  .btn__favorites{
    position:fixed;
    right: 1rem;
    bottom:1rem;
    background-color: hsla(0, 0%, 100%, 0.918);
    border: 1px solid hsla(0, 0%, 0%, 0.588);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  .btn__favorites p{
    margin: 0;
  }
`