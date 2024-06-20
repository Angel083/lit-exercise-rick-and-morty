import { css } from "lit-element";

export default css`
    :host{
        border: 1px solid black;
        border-radius: 20px;
        box-shadow: 2px 2px 2px;
        max-width: 400px;
        width: 100%;
        padding: 0 1rem 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
    }
    .charactes__img{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .charactes__img img{
        width: 100%;
        border-radius: 20px;
    }
    .charactes__info{
        overflow: hidden;
        cursor: default;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    p{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: 0;
    }
    .btn__add-favorite{
        border: 1px solid green;
        background-color: green;
        border-radius: 1.25rem;
        padding: .25rem .5rem;
        color: white;
        cursor: pointer;
    }
    .btn__add-favorite:hover{
        transition: all 200ms ease-in;
        color: green;
        background-color: white;
    }
    @media screen and (min-width : 420px){
        :host{
            width: 100%;
            padding: 0 1rem 0 0;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }
        .charactes__info{
            align-items:flex-start;
        }
        .charactes__img img{
        height:  10rem;
        width: 10rem;
        border-radius: 20px 0  0 20px;
        }
        
    }
    
`