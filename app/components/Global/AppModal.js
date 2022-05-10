import React from 'react';

//components
import { Modal, Portal, ActivityIndicator } from 'react-native-paper';

//utils
import { staticTheme } from '../../config/theme';

const AppModal = ({ visible }) => {
  return (
    <Portal style={{ alignItems: 'center' }}>
      <Modal
        visible={visible}
        dismissable={false}
        contentContainerStyle={{
          backgroundColor: 'transparent',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator color={staticTheme.colors.success} />
      </Modal>
    </Portal>
  );
};

export default AppModal;
