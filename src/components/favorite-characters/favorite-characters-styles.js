import { css } from "lit-element";

export default css`
    :host{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .dialog.hidden {
        display: none;
        width: 50vw;
        height: 50vh;;
    }
    .dialog{
        overflow-y: scroll;
        transition: all 300mx ease-in;
        height: 90vh;
        width:  90vw;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border-radius: 1rem;
        border: 1px solid black;
        display: flex;
        background-color: hsla(0, 0%, 100%, 0.918);
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .dialog__main {
        width: 100%;
    }
    .dialog__body {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    .dialog__close {
        position: absolute;
        width: 50px;
        height: 50px;
        right: 0;
        top: 0;
        margin: 10px 10px 0 0;
    }
    .dialog__close-content{
        transform: translateY(200%)
    }
    .cross-line:nth-child(1){
        position: relative;
        display: block;
        width: 50px; 
        height: 5px;
        transform:  rotate(45deg)  translateY(50%);;
        background-color: black;
    }
    .cross-line:nth-child(2){
        position: relative;
        display: block;
        width: 50px; 
        height: 5px;
        transform:  rotate(-45deg) translateY(-50%);
        background-color: black;

    }
`