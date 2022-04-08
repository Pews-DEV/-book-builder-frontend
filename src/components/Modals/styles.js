import styled from 'styled-components'

// We are not able to style react-modal with styled-components
// that's why we are doing like that
// it's not recommended do the same with other styles
export const defaultModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.30)'
  },

  content: {
    position: 'absolute',
    margin: 'auto',
    maxWidth: '400px',
    height: '580px',
    padding: '0 var(--spacing-5)',

    background: 'var(--white)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 'var(--spacing-2)'
  }
}

export const ModalClose = styled.button`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-3);
`