import styled from 'styled-components'

const Loading = styled.div `
    position: absolute;
    background: #000000CC;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;

    span {
        color: #fff;
        margin-left: -6px;

        &:after {
            content: ' .';
            animation: dots 1s steps(5, end) infinite;}
        }
    }

    .loader {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;

        div {
            position: absolute;
            border: 4px solid #fff;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        div:nth-child(2) {
            animation-delay: -0.5s;
        }
    }

    @keyframes lds-ripple {
        0% {
            top: 20px;
            left: 20px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        4.9% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 0;
        }
        5% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }

    @keyframes dots {
        0%, 20% {
            color: rgba(0,0,0,0);
            text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);
        }
        40% {
            color: #fff;
            text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);
        }
        60% {
            text-shadow:
            .25em 0 0 #fff,
            .5em 0 0 rgba(0,0,0,0);
        }
        80%, 100% {
            text-shadow:
            .25em 0 0 #fff,
            .5em 0 0 #fff;
        }
    }
`;

export default Loading;