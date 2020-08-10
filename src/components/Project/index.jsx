import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Img,
  Title,
  Desc,
  ButtonLinkList,
  LinkButton,
  LinkIcon,
  TrelloIcon,
  GithubIcon,
  LinkName,
} from './styles';

const IconPicker = url => {
  if (url.includes('github') && !url.includes('agentf')) {
    return <GithubIcon />;
  }
  if (url.includes('trello')) {
    return <TrelloIcon />;
  }
  return <LinkIcon />;
};

export const Project = ({ desc, imgUrl, links, title }) => {
  return (
    <Wrapper>
      <Img src={imgUrl} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <ButtonLinkList>
        {links.map(({ name, url }) => (
          <LinkButton
            key={`${name}-link`}
            type="button"
            onClick={() => {
              window.open(url, '_blank');
            }}
          >
            {IconPicker(url)}
            <LinkName>{name}</LinkName>
          </LinkButton>
        ))}
      </ButtonLinkList>
    </Wrapper>
  );
};

Project.propTypes = {
  desc: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};
