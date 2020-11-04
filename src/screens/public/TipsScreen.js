import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {Title, List} from 'react-native-paper';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('screen');

const tips = [
  {
    id: 1,
    title: 'How to Vaccinate my birds',
    answer: (
      <View>
        <Title style={{marginTop: 30}}>
          Vaccination can be applied to chicks through injections. The vaccine
          can also be administered in the water and also through eye.
          Vaccination is provided to the birds once in the rearing period and
          once in the laying period.{' '}
        </Title>
        <Title style={{marginTop: 30}}>
          Please, follow manufacturers’/veterinary doctor’s instructions ALWAYS
        </Title>
        <Title style={{marginTop: 30}}>
          Add skimmed milk or vaccine boost to the drinking water before vaccine
          is added at 2-4g/Litres of water
        </Title>
        <Title style={{marginTop: 30}}>
          When giving the drinking water, withdraw water from the birds for 2
          hours before vaccination All vaccination that is to be done via I/O or
          spraying or by injection should be diluted as directed by the
          manufacturer using the appropriate diluents. Where appropriate
          diluents are not available, sterile injection water or sterile
          physiological saline (0.9% NaCl) could be used. Under no circumstances
          should natural spring water (Pure water, Ragolis, Eva water or any
          bottled water) be substituted for injection diluents.
        </Title>
        <Title style={{marginTop: 30}}>
          Give Vitamins for 3days every two weeks and at least one-day before
          and one-day after vaccination. Avoid coccidiosis and other preventable
          diseases. Coccidiostat may be added to the feed at the rearing stage.
          Deworming may be done quarterly in-laying depending on the source of
          feed ingredients or finished feeds. Anti-CRD can be after the above or
          bi-monthly basis depending on the CRD incidence in the area.
        </Title>
      </View>
    ),
  },
  {
    id: 2,
    title: 'Stocking of Day-Old-Chick',
    answer: (
      <View>
        <Title style={{marginTop: 30}}>Physical Characteristics</Title>
        <Title style={{fontWeight: 'bold', fontSize: 14}}>Average body weight:</Title>
        <Title style={{fontSize: 14}}>
          • 850-1000grams for pullets, and 30-35 grams for day old chicks
          pullets
        </Title>
        <Title  style={{fontSize: 14}}> • 35 – 40 grams for day old chick broilers</Title>

        <Title style={{marginTop: 30}}>Hygiene </Title>
        <Title  style={{fontSize: 14}}>
          Before the arrival of a new batch day-old-chick, disinfect the poultry
          house thoroughly and allow the houses and equipments to rest for at
          least two weeks.
        </Title>
        <Title  style={{fontSize: 14}}>
          Change the foot-dip disinfectant daily and make sure everybody
          entering the house dips his or her feet before and when leaving the
          house.{' '}
        </Title>
        <Title  style={{fontSize: 14}}>Use separate slippers for each poultry house</Title>
        <Title  style={{fontSize: 14}}>Minimize human movement in and out of the poultry house.</Title>

        <Title style={{marginTop: 30}}>Brooding </Title>
        <Title>
          Proper brooding temperature is required to keep the chicks in comfort
          during rearing period when they are sensitive to cold and need some
          artificial heat source to maintain their normal temperature. Coal or
          sawdust is burnt for supplying heat at the stage of brooding in the
          poultry farm. Start heating the house 24hours before the arrival of
          the chicks. Place a thermometer in the middle of the house at the
          chick level. Read and record 3-4 times per day.
        </Title>
        <Title style={{marginTop: 30}}>
          Watch behavior to determine the right temperature:{' '}
        </Title>
        <Title  style={{fontSize: 14}}>(a) Too hot- chicks move away from the source of heat</Title>
        <Title  style={{fontSize: 14}}>(b) Too cold- chicks crowd around the source of heat</Title>
        <Title  style={{fontSize: 14}}>(c) Draft- chicks crowd away from the source of heat</Title>
        <Title  style={{fontSize: 14}}>
          (d) Adequate temperature- chicks move freely unmindful of source of
          heat and are evenly spread.
        </Title>
      </View>
    ),
  },
  {
    id: 3,
    title: 'How to de-beak your birds',
    answer: (
      <View>
        <Title style={{marginTop: 30}}>
          De-beaking is done in order to prevent cannibalism (pecking) and feed
          wastage. It is usually done at 10days of age or 8-12 weeks of age.
        </Title>
        <Title style={{marginTop: 30}}>
          Make a cut 2mm away from the nostril of the upper beak with a
          debeaker.
        </Title>
        <Title style={{marginTop: 30}}>Debeak only healthy birds</Title>
        <Title style={{marginTop: 30}}>
          Avoid excessive bleeding by keeping adequately enough feed in the
          troughs
        </Title>
        <Title style={{marginTop: 30}}>
          Give vitamins for 2days before and after debeaking
        </Title>
        <Title>De-beak at the coolest part of the day.</Title>
      </View>
    ),
  },
  {
    id: 4,
    title: 'Focus Areas for effective poultry birds management',
    answer: (
      <View>
        <Title>Management is centered on the following</Title>
        <Title  style={{fontSize: 14}}>• Biosecurity</Title>
        <Title  style={{fontSize: 14}}>• Downtime between flocks</Title>
        <Title  style={{fontSize: 14}}>• Pre-placement preparation.</Title>
        <Title  style={{fontSize: 14}}>• Coccidiosis prevention.</Title>
        <Title  style={{fontSize: 14}}>• Brooding management</Title>
        <Title  style={{fontSize: 14}}>• Litter management</Title>
        <Title  style={{fontSize: 14}}>• Water management </Title>
        <Title  style={{fontSize: 14}}>• Feed management</Title>
        <Title>
          Achieving good results in poultry lies in strict compliance to
          management rules or practices to ensure target is met. Pen(house)
          store and gut health requires operational excellence and attention to
          details as it forestalls economic loss. A combination of quality
          nutrition, veterinary guidance, and increased consideration of Pen,
          store and gut of bird management will help to ensure birds have the
          best possible chance to perform at their maximum potential.
        </Title>
        <Title>
          The acronym “FLAWS” has commonly served as a reminder to check feed,
          light, litter, air, water, (bio)security, sanitation, space and staff.
          FLAWS actually serves as a detailed approach to best management
          practices, not only during brooding but throughout the life of the
          flock that is from a dayold till maturity/culling.
        </Title>
      </View>
    ),
  },
  {
    id: 5,
    title: 'Common signs of infection in the flocks ',
    answer: (
      <View>
        <Title  style={{fontSize: 14}}>
          • The sinuses of the chicken (the area between the eye and the beak)
          are swollen. These may be swollen in such a way that the eyes are
          closed.
        </Title>
        <Title  style={{fontSize: 14}}>
          • Tears and wetness often occur around the eyes and nostrils.{' '}
        </Title>
        <Title  style={{fontSize: 14}}>• Sneezing</Title>
        <Title  style={{fontSize: 14}}>• Coughing</Title>
        <Title  style={{fontSize: 14}}>• Difficulty in breathing</Title>
        <Title  style={{fontSize: 14}}>• Loss of appetite</Title>
        <Title  style={{fontSize: 14}}>• Weakness</Title>
        <Title  style={{fontSize: 14}}>• Weight loss</Title>
      </View>
    ),
  },
  {
    id: 6,
    title: 'Factors affecting bird uniformity',
    answer: (
      <View>
        <Title>Management is centered on the following</Title>
        <Title  style={{fontSize: 14}}>
          • Egg size variation due to multiple parent source flocks,this happens
          where parent flock is not culled out at once.
        </Title>

        <Title  style={{fontSize: 14}}>• Hatchery stress</Title>
        <Title  style={{fontSize: 14}}>• Chick delivery stress</Title>
        <Title  style={{fontSize: 14}}>• Excessive stocking density</Title>
        <Title  style={{fontSize: 14}}>• Chick delivery stress</Title>
        <Title  style={{fontSize: 14}}>• Brooding management</Title>
        <Title  style={{fontSize: 14}}>• Poor nutrition</Title>
        <Title  style={{fontSize: 14}}>• Health issues</Title>
      </View>
    ),
  },
];

const TipsScreen = ({navigation}) => {
  const CardQuestion = ({item}) => (
    <List.Item
      onPress={() =>
        navigation.navigate('TipsDetail', {
          detail: item,
        })
      }
      title={item.title}
      titleStyle={{
        fontSize: 20,
        color: '#fff',
      }}
      titleNumberOfLines={3}
      style={{
        backgroundColor: 'rgba(46, 60, 243, 0.7)',
        marginVertical: 10,
        borderRadius: 7,
      }}
      left={(props) => (
        <Image
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            borderRadius: 50,
          }}
          source={require('../../assets/img/search.png')}
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          maxHeight: 200,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            width: width,
            flexDirection: 'row',
          }}>
          <Icon
            name="leftcircleo"
            style={{paddingVertical: 20, paddingLeft: 10}}
            size={30}
            color="#000"
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              style={styles.image}
              source={require('../../assets/img/third.png')}
            />
          </View>
        </View>
        <Title style={{fontSize: 30}}>FAQ</Title>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <FlatList
          data={tips}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CardQuestion item={item} />}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    </View>
  );
};

export default TipsScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    minHeight: height - 90,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  image: {
    width: 200,
    height: 170,
  },

  marginTopText: {
    marginTop: 200,
  },
});
