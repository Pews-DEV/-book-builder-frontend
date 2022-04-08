import { useEffect } from 'react'
import Modal from 'react-modal'

import * as S from './styles'

const BaseModal = (props) => {
  function closeModal() {
    props.setModalIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  const customStyles = {
    ...S.defaultModalStyles,
    content: {
      ...S.defaultModalStyles.content,
      ...props.customContent
    }
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={props.contentLabel || 'Modal'}
      style={customStyles}
    >
      <S.ModalClose onClick={closeModal}>X</S.ModalClose>
      {props.children}
    </Modal>
  )
}

export default BaseModal