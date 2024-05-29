import styled from "styled-components";

const LinechartTitle = styled.div`
    position: absolute;
    left: clamp(15px, 1vw, 30px);
    top: clamp(15px, 1vw, 30px);

    & span {
        display: block;
        font-size: 16px;
        color: white;
        line-height: 1em);
        opacity: 0.5;
    }
`

const RenderLegend = () => {
    return (
        <LinechartTitle>
            <span>Durée moyenne des</span>
            <span>sessions</span>
        </LinechartTitle>
    )
}

RenderLegend.displayName = 'RenderLegend';

export default RenderLegend;
