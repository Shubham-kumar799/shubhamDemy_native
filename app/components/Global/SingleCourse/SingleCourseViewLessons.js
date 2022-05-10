//utils
import React, { useState } from 'react';

//components
import { StyleSheet, View } from 'react-native';
import PreviewPlayer from './PreviewPlayer';
import {
  List,
  IconButton,
  Modal,
  Portal,
  Text,
  Provider,
} from 'react-native-paper';

const PreviewModal = ({
  title,
  preview,
  previewVisible,
  setPreviewVisible,
}) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Modal
      visible={previewVisible}
      onDismiss={() => setPreviewVisible(false)}
      contentContainerStyle={containerStyle}
    >
      <PreviewPlayer preview={preview} title={title} />
    </Modal>
  );
};

const SingleCourseViewLessons = ({ route }) => {
  const { lessons } = route.params;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [preview, setPreview] = useState(null);

  return (
    <View style={styles.container}>
      {lessons.map((lesson, index) => (
        <List.Item
          style={styles.listItem}
          key={lesson._id}
          title={lesson.title}
          left={props => (
            <View {...props} style={styles.indexContainer}>
              <Text>{index + 1}.</Text>
            </View>
          )}
          right={props =>
            lesson.free_preview && (
              <View {...props} style={styles.previewTextContainer}>
                <IconButton
                  icon="eye-check"
                  size={15}
                  onPress={() => {
                    setPreviewVisible(true);
                    setPreview(lesson);
                  }}
                />
              </View>
            )
          }
        />
      ))}
      <Portal>
        <Provider>
          <PreviewModal
            previewVisible={previewVisible}
            setPreviewVisible={setPreviewVisible}
            preview={preview?.video}
            title={preview?.title}
          />
        </Provider>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SingleCourseViewLessons;
