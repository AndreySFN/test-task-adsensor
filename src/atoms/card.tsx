import styled from "styled-components";
import {CSSProperties} from "styled-components";

export interface ICardProps {
    title?: string;
    text?: string;
    number?: number;
    sideColor?: string;
}

interface ICardContainerProps {
    style?: CSSProperties;
}

const CardContainer = styled.div<ICardContainerProps>(({ style = {} }: ICardContainerProps) => ({
    display: 'flex',
    borderRadius: '8px',
    backgroundColor: '#1A1B1B',
    ...style
}))

interface ISideLIneProps {
    backgroundColor?: string
}

const SideLine = styled.div<ISideLIneProps>(({ backgroundColor = '#FFFFFF' }: ISideLIneProps) => ({
    width: '4px',
    minHeight: '100%',
    borderRadius: '8px 0',
    backgroundColor: backgroundColor
}))

const Content = styled.div({
    padding: '20px 21px 20px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
})

const Title = styled.div({
    fontSize: '18px',
    fontWeight: 500
})

const Text = styled.div({
    fontSize: '14px',
    color: '#8c8d8d',
    paddingTop: '8px',
    fontWeight: 400,
    whiteSpace: 'pre-line'
})

const Number = styled.div({
    fontSize: '18px',
    fontWeight: 700
})
export const Card = ({number, title, sideColor, text}: ICardProps) => {
    return <CardContainer>
        <SideLine backgroundColor={sideColor}/>
        <Content>
            <div>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </div>
            <Number>{number}</Number>
        </Content>
    </CardContainer>
}
