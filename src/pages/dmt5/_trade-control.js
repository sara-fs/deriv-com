import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'

const query = graphql`
    query {
        swap_calculator: file(relativePath: { eq: "swap-calculator.png" }) {
            ...fadeIn
        }
        margin_calculator: file(relativePath: { eq: "margin-calculator.png" }) {
            ...fadeIn
        }
    }
`
const Section = styled(SectionContainer)`
    display: flex;
    padding: 0 12rem 0 0;
    justify-content: center;
    margin-top: 8rem;
    align-items: flex-start;
    box-shadow: inset 0 1px 0 0 var(--color-grey-8), inset 0 -1px 0 0 var(--color-grey-8);
`
const ImageWrapper = styled.div`
    margin: 2.4rem 3.4rem;
    width: 38.4rem;
    position: relative;
`
const ControlCard = styled(Flex)`
    background-color: var(--color-grey-25);
    width: 50%;
    padding: 11.9rem 4rem 27.3rem 16rem;
    flex-direction: column;
`
const CalculatorCard = styled(Flex)`
    padding: 4rem 0;
    flex-direction: column;
    margin-left: 2.4rem;
    align-items: center;
    width: 50%;
`
const Button = styled(Flex)`
    width: 64px;
    height: 40px;
    border-radius: 23px;
    background-color: var(--color-grey-25);
    opacity: ${(props) => (props.isLeft ? ' 1' : ' 0.32')};
    border: unset;
    cursor: pointer;
`
const Arrow = styled.div`
    border: solid red;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin: auto;
`

const ArrowRight = styled(Arrow)`
    transform: rotate(-45deg);
`
const ArrowLeft = styled(Arrow)`
    transform: rotate(135deg);
`
const SmallCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: ${(props) => (props.isLeft ? ' var(--color-grey-21)' : ' var(--color-red)')};
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.8rem;
    margin-top: 4rem;
`
const Span = styled.span`
    color: red;
`
const TradeControl = () => {
    const data = useStaticQuery(query)

    const [isLeft, setLeft] = useState(true)
    const buttonClick = (left) => {
        setLeft(left)
    }

    return (
        <Section>
            <ControlCard>
                <Header as="h2" mb="1.2rem">
                    {localize('Take control of your trades on DMT5s')}
                </Header>
                <Text>
                    <Localize
                        translate_text="Explore <0>margin trading</0> on DMT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour."
                        components={[<Span key={0} />]}
                    />
                </Text>
                <Text>
                    {localize(
                        'With the calculators and numerous analytical tools available on the DMT5 platform, you’ll be able to manage your capital and trading positions better.',
                    )}
                </Text>
            </ControlCard>
            <CalculatorCard>
                <Header align="center" as="h4" mb="0.8rem">
                    {isLeft && localize('Margin calculator')}
                    {!isLeft && localize('Swap calculator')}
                </Header>
                <Text align="center" max_width="50.8rem">
                    {isLeft &&
                        localize(
                            'Calculate the margin you need to open and hold your positions with our margin calculator.',
                        )}
                    {!isLeft &&
                        localize(
                            'Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract.',
                        )}
                </Text>
                <Flex ai="center">
                    <Button isLeft={!isLeft} onClick={() => buttonClick(true)}>
                        <ArrowLeft />
                    </Button>

                    {isLeft && (
                        <ImageWrapper>
                            <QueryImage data={data['margin_calculator']} alt="margin calculator" />
                        </ImageWrapper>
                    )}
                    {!isLeft && (
                        <ImageWrapper>
                            <QueryImage data={data['swap_calculator']} alt="swap calculator" />
                        </ImageWrapper>
                    )}

                    <Button isLeft={isLeft} onClick={() => buttonClick(false)}>
                        <ArrowRight />
                    </Button>
                </Flex>
                <Flex>
                    <SmallCircle isLeft={!isLeft} />
                    <SmallCircle isLeft={isLeft} />
                </Flex>
            </CalculatorCard>
        </Section>
    )
}

export default TradeControl
