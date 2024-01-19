import styled from "styled-components";
import {IWithChildren} from "../types";

export interface IPageLayoutProps extends IWithChildren {
    title?: string;
}

const PageLayoutContainer = styled.div({
    padding: '16px 30px 29px 32px',
})

const Title = styled.div({
    fontSize: '24px',
    fontWeight: 600,
    paddingBottom: '20px'
})
export const PageLayout = ({title, children}: IPageLayoutProps) => {
    return <PageLayoutContainer>
        {title && <Title>{title}</Title>}
        <div>
            {children}
        </div>
    </PageLayoutContainer>
}
