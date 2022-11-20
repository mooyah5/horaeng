import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {font} from '../../styles/colorAndFontTheme';
import Btn from '../common/Btn_short';

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  section1: {flex: 5},
  section2: {flex: 16, paddingHorizontal: 24},
  section3: {flex: 4, flexDirection: 'row', paddingHorizontal: 24},

  infoBox: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
    alignSelf: 'center',
  },
  textBox: {
    width: '100%',
    paddingHorizontal: 40,
    overflow: 'scroll',
  },
  title: {
    fontFamily: font.beeBold,
    fontSize: 26,
    paddingTop: 40,
    alignSelf: 'center',
  },
  text: {fontFamily: font.beeBold, fontSize: 16, paddingHorizontal: 20},
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  emptyArea: {flex: 2},
});

interface Props {
  navigation: StackNavigationProp<ParamListBase, 'InfoOfAnimal'>;
  route: any;
}

// TODO 멸종위기 동물 관련 정보 채우기
const animal = {
  1: {
    name: '벵갈호랑이',
    image: require('../../assets/image/animals/info/tiger.png'),
    content:
      '인도와 방글라데시 사이 맹그로브 숲 순다르반스를 비롯한 아시아의 특정 지역에서만 사는 벵갈호랑이. 이미 개체 수가 줄어들기 시작하였고 앞으로 50년 안에 멸종할 수 있다는 우려가 나왔다. 방글라데시독립대 연구결과에 따르면 벵골호랑이는 오는 2070년이면 서식지가 완전히 사라지는 탓에 결국 멸종할 것으로 전망된다.',
  },
  2: {
    name: '오목눈이',
    image: require('../../assets/image/animals/info/bird.png'),
    content:
      '아무렇게나 버려지는 마스크, 또는 쓰레기 운반 과정이나 매립지에서 마스크가 바람에 날아가면서 마스크 귀걸이로 인해 동물들이 다리 등 신체에 감기면서 고통받고 있다.',
  },
  3: {
    name: '아프리카코끼리',
    image: require('../../assets/image/animals/info/elephant.png'),
    content:
      '1976년부터 지난 40년 동안, 셀루스 동물보호구역에 서식하는 아프리카코끼리는 매년 2,500마리씩 개체 수가 줄어 현재는 40년 전보다 90%가 줄었다. 가장 큰 원인은 유해한 산업 활동 및 밀렵 활동으로 꼽힌다. 지난 2012년에는 석유 및 가스 미네랄 추출로 인해 셀루스 지역의 약 75%가 손상되었고, 그곳에 서식하던 동물들 또한 서식지를 잃으며 큰 피해를 입었다. 이대로 계속 방치한다면 몇년 후 더이상 우리는 아프리카코끼리를 탄자니아 셀루스 지역에서 볼 수 없게 될지도 모른다.',
  },
  4: {
    name: '바다거북이',
    image: require('../../assets/image/animals/info/turtle.png'),
    content:
      '산란지가 오염이나 개발로 인해 훼손되거나 알이나 거북이 사람에 의해 무분별하게 포획된 결과 바다거북이는 멸종위기종으로 등록되었다. 온난화로 인해 암컷만 태어나는 것도 문제이며, 바다거북의 경우 부화시기 온도가 높아질수록 암컷이 태어날 확률이 높아지기 떄문이다. 또한 플라스틱 조각이 바다거북의 주식인 해조류, 해파리와 비슷하게 보이기 때문에 플라스틱, 비닐 조각을 삼키를 경우가 많다.',
  },
  5: {
    name: '펭귄',
    image: require('../../assets/image/animals/info/penguin.png'),
    content:
      '남극의 해빙은 펭귄의 번식과 생활에서 매우 중요한 역할을 하지만 최근 기후변화로 인해 해빙의 면적이 계속해서 감소하면 펭귄의 생존에 큰 위협이 된다. 뿐만 아니라 펭귄의 주요 먹이인 크릴을 잡아들이는 인류의 무분별한 조업활동과 남극 개발활동 또한 펭귄을 위협하는 큰 요소이다. 탄소 배출량이 현재 수준으로 유지될 시 2015년에는 펭귄의 서식지 70%가 사자리고 2100년에는 펭귄 98%가 서식지를 잃어 멸종에 이를 수 있다고 밝혀지기도 했다.',
  },
};

const InfoOfAnimal = ({navigation, route}: Props) => {
  const {params} = route;
  const animalId: 1 | 2 | 3 | 4 | 5 = params.id;

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.section1} />
      <View style={styles.section2}>
        <Image
          source={require('../../assets/image/box_large.png')}
          style={styles.infoBox}
        />
        <ScrollView style={styles.textBox}>
          <Text style={styles.title}>[{animal[animalId].name}]</Text>
          <Image source={animal[animalId].image} style={styles.image} />
          <Text style={styles.text}>{animal[animalId].content}</Text>
        </ScrollView>
      </View>
      <View style={styles.section3}>
        <View style={styles.emptyArea} />
        <Btn txt="창 닫기" clickEvent={navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

export default InfoOfAnimal;
