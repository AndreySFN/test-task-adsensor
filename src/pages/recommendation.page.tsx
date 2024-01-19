import {PageLayout} from "../layouts/page-layout.tsx";
import {mockCards} from "../api/mock.ts";
import {Card} from "../atoms";
import {ICardsResponseModel} from "../transport";
import styled from "styled-components";
import {useMobile} from "../utils";
import {IWithMobile} from "../types";

interface IRecommendationPageContentProps extends IWithMobile {
    isChildrenEven: boolean
}

const RecommendationPageContent = styled.div<IRecommendationPageContentProps>(
    ({isMobile, isChildrenEven}: IRecommendationPageContentProps) => ({
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        boxSizing: 'border-box',
        gap: '8px',
        ':last-child': {
            gridColumn: !isMobile && isChildrenEven ? 'span 2' : ''
        }
    }))
export const RecommendationPage = () => {
    const isMobile = useMobile()
    return <PageLayout title='Замечания и рекомендации'>
        <RecommendationPageContent isMobile={isMobile} isChildrenEven={!(mockCards.length % 2 === 0)}>
            {mockCards.map(({id, text, title, color, number}: ICardsResponseModel) =>
                <Card
                    key={id}
                    number={number}
                    title={title}
                    text={text}
                    sideColor={color}
                />
            )}
        </RecommendationPageContent>
    </PageLayout>
}
