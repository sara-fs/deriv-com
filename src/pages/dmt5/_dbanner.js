import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    padding: 0 0 0 12rem;
    position: relative;
    height: 40rem;
    justify-content: flex-start;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);

    @media ${device.laptopM} {
        height: 38.4rem;
        padding: 0 0 0 8rem;
    }
    @media ${device.tabletL} {
        height: 34.4rem;
    }
`

const ImageWrapper = styled(Flex)`
    position: absolute;
    width: 50rem;
    top: -2rem;
    right: 12rem;
    z-index: 1;
    height: 100%;

    div {
        width: 100%;
    }

    @media ${device.laptopM} {
        max-width: 43rem;
    }
    @media ${device.tabletL} {
        max-width: 40rem;
    }
`

const TextWrapper = styled.div`
    margin-top: 8rem;

    @media ${device.laptopM} {
        max-width: 37rem;
    }
`
const StyledLinkButton = styled(LinkButton)`
    width: 20.2rem;
    border: unset;
    line-height: 1.5;
    display: inline-block;
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
`

const DBanner = ({ title, data, background_pattern }) => {
    const BackgroundPattern = styled(background_pattern)`
        position: absolute;
        top: 0;
        right: 0;

        @media ${device.laptopM} {
            width: 60rem;
            height: initial;
        }
        @media ${device.tabletL} {
            width: 54rem;
        }
    `
    return (
        <Flex position="relative">
            <ImageWrapper ai="center">
                <QueryImage data={data['deriv_platform']} alt="deriv platform" width="100%" />
            </ImageWrapper>
            <Wrapper>
                <TextWrapper>
                    <StyledHeader color="white" size="5.6rem" mb="4rem" max_width="47rem">
                        {title}
                    </StyledHeader>
                    <StyledLinkButton type="submit" secondary="true" to="/signup/">
                        {localize('Create free demo account')}
                    </StyledLinkButton>
                </TextWrapper>
                <BackgroundPattern />
            </Wrapper>
        </Flex>
    )
}

DBanner.propTypes = {
    background_pattern: PropTypes.object,
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
}

export default DBanner
