import React, {useState} from 'react';
import {Text, FlatList, Image, View, Dimensions} from 'react-native';
import {styles} from './styles';

const {width} = Dimensions.get('window');

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScrollEnd = e => {
    const horizontalOffSet = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffSet / width);
    setActiveIndex(index);
  };
  const renderImage = ({item}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
        style={styles.list}
      />
      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
