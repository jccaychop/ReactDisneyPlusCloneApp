import React from 'react';
import {
    Background,
    ButtonGroup,
    ButtonSubGroup,
    Container,
    Image,
    Information,
    Logo,
    Multimedia,
    Overview,
    TagRow,
    SignUpButton,
    PlayButton,
    Section,
    TabGroup,
    TagGroup,
    TrailerButton,
    AddListButton,
    GroupWatchButton,
    Tag,
    TagGenres,
    ImageTag
} from './styles/media';

const Media = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Media;

Media.Multimedia = function MediaMultimedia({ children, ...restProps }) {
    return <Multimedia {...restProps}>{children}</Multimedia>
};

Media.Background = function MediaBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
};

Media.Image = function MediaImage({ ...restProps }) {
    return <Image {...restProps} />
};

Media.Section = function MediaSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>
};

Media.TabGroup = function MediaTabGroup({ children, ...restProps }) {
    return <TabGroup {...restProps}>{children}</TabGroup>
};

Media.Information = function MediaInformation({ children, ...restProps }) {
    return <Information {...restProps}>{children}</Information>
};

Media.Logo = function MediaLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
};

Media.TagGroup = function MediaTagGroup({ children, ...restProps }) {
    return <TagGroup {...restProps}>{children}</TagGroup>
};

Media.TagRow = function MediaTagRow({ children, ...restProps }) {
    return <TagRow {...restProps}>{children}</TagRow>
};

Media.Tag = function MediaTag({ children, ...restProps }) {
    return <Tag {...restProps}>{children}</Tag>
};

Media.ImageTag = function MediaImageTag({ children, ...restProps }) {
    return <ImageTag {...restProps}>{children}</ImageTag>
};

Media.TagGenres = function MediaTagGenres({ children, ...restProps }) {
    return <TagGenres {...restProps}>{children}</TagGenres>
};

Media.ButtonGroup = function MediaButtonGroup({ children, ...restProps }) {
    return <ButtonGroup {...restProps}>{children}</ButtonGroup>
};

Media.ButtonSubGroup = function MediaButtonSubGroup({ children, ...restProps }) {
    return <ButtonSubGroup {...restProps}>{children}</ButtonSubGroup>
};

Media.SignUpButton = function MediaSignUpButton({ children, ...restProps }) {
    return <SignUpButton {...restProps}>{children}</SignUpButton>
};

Media.PlayButton = function MediaPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
};

Media.TrailerButton = function MediaTrailerButton({ children, ...restProps }) {
    return <TrailerButton {...restProps}>{children}</TrailerButton>
};

Media.AddListButton = function MediaAddListButton({ children, ...restProps }) {
    return <AddListButton {...restProps}>{children}</AddListButton>
};

Media.GroupWatchButton = function MediaGroupWatchButton({ children, ...restProps }) {
    return <GroupWatchButton {...restProps}>{children}</GroupWatchButton>
};

Media.Overview = function MediaOverview({ children, ...restProps }) {
    return <Overview {...restProps}>{children}</Overview>
};
