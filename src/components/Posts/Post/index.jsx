import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLink } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { DiTrello } from 'react-icons/di';
import { FaSave } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import {
  PostWrapper,
  ImgWrapper,
  Img,
  HiddenFileInput,
  Title,
  Desc,
  EditOptions,
  EditOption,
  LinkOptions,
  LinkOption,
} from './styles';

const Post = ({
  title,
  links,
  src,
  desc,
  editable,
  handleEdit,
  handleAddImage,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [showTitleEditOptions, setShowTitleEditOptions] = useState(false);
  const [newDesc, setNewDesc] = useState(desc);
  const [showDescEditOptions, setShowDescEditOptions] = useState(false);

  const imgWrapperElement = useRef(null);
  const [showImg] = useIntersectionObserver(imgWrapperElement);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgInputRef = useRef(null);

  return (
    <PostWrapper>
      <ImgWrapper
        type="button"
        disabled={!editable}
        ref={imgWrapperElement}
        onClick={() => {
          if (editable && imgInputRef.current) {
            imgInputRef.current.click();
          }
        }}
      >
        {showImg && <Img src={src} alt={`${title} thumbnail`} />}
        {editable && (
          <HiddenFileInput
            type="file"
            ref={imgInputRef}
            accept="image/png, image/jpeg"
            onChange={({ target: { files } }) => handleAddImage(files[0])}
          />
        )}
      </ImgWrapper>
      <Title
        contentEditable={editable}
        ref={titleRef}
        onClick={() => setShowTitleEditOptions(true)}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            titleRef.current.innerText = newTitle;
            setShowTitleEditOptions(false);
          }
        }}
        role="textbox"
        tabIndex={editable ? '0' : '-1'}
      >
        {newTitle}
      </Title>
      {showTitleEditOptions && (
        <EditOptions>
          <EditOption
            type="button"
            onClick={() => {
              handleEdit({ title: titleRef.current.innerText });
              setNewTitle(titleRef.current.innerText);
              setShowTitleEditOptions(false);
            }}
          >
            <FaSave />
          </EditOption>
          <EditOption
            type="button"
            onClick={() => {
              titleRef.current.innerText = newTitle;
              setShowTitleEditOptions(false);
            }}
          >
            <GiCancel />
          </EditOption>
        </EditOptions>
      )}
      <Desc
        contentEditable={editable}
        ref={descRef}
        onClick={() => setShowDescEditOptions(true)}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            descRef.current.innerText = newDesc;
            setShowDescEditOptions(false);
          }
        }}
        role="textbox"
        tabIndex={editable ? '0' : '-1'}
      >
        {newDesc}
      </Desc>
      {showDescEditOptions && (
        <EditOptions>
          <EditOption
            type="button"
            onClick={() => {
              handleEdit({ desc: descRef.current.innerText });
              setNewDesc(descRef.current.innerText);
              setShowDescEditOptions(false);
            }}
          >
            <FaSave />
          </EditOption>
          <EditOption
            type="button"
            onClick={() => {
              descRef.current.innerText = newDesc;
              setShowDescEditOptions(false);
            }}
          >
            <GiCancel />
          </EditOption>
        </EditOptions>
      )}
      {links && links.length && (
        <LinkOptions>
          {links.map(({ name, url }) => (
            <LinkOption
              title={name}
              type="button"
              onClick={() => window.open(url, '_blank')}
            >
              {name.toLowerCase().includes('site') && <AiOutlineLink />}
              {name.toLowerCase().includes('repository') && <GoMarkGithub />}
              {name.toLowerCase().includes('board') && <DiTrello />}
            </LinkOption>
          ))}
        </LinkOptions>
      )}
    </PostWrapper>
  );
};

Post.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  desc: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleAddImage: PropTypes.func.isRequired,
};

export default Post;
