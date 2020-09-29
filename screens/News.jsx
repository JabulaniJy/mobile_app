import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Card from '../shared/card';

export default function News({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'SAA mothballed as government still searches for money',image:'',
      body: 'South African Airways’ Business Rescue Practitioners (BRPs) say they have taken a decision to suspend all airline operations with immediate effect, while they wait for an outcome to the group’s funding issues. The administrators said on Tuesday (29 September) that, while progress has been made to source funding for the group’s rescue plan, until the issue has been resolved, the group needs to look at other options. They noted that certain funders have indicated a willingness to provide a portion of the funding required for the implementation of the Business Rescue Plan, and they are engaging with government in relation to the securing of the remaining funding that is required to fully implement the plan.', 
      key: '1' },
    { title: 'Government is ready to turn its attention back to NHI: Mkhize', image:'', 
      body: 'Health Minister Dr Zweli Mkhize says the risk of complacency amongst members of the public could become South Africa’s biggest drawback and result in a second wave of Covid-19 that is more devastating than the first. Speaking during a webinar on Tuesday (29 September) commemorating World Environmental Health Day, the health minister warned that as the country moves through alert level one, the risk of complacency amongst community members can become the biggest drawback',
      key: '2' },
    { title: 'Shaping the futures of South Africans through training and employment',image:'', 
      body: 'Currently, 10.3 million young South Africans are actively looking for a job. According to a BusinessTech article, the South African government has identified a number of challenges that continue to contribute to the high unemployment rate amongst the youth in South Africa. Some of the key issues include limited skill acquisition and the resultant inadequate preparation of youth for the world of work, rapid changes in the labour market fuelled by digitisation and automation, as well as socio-economic challenges. To help create change in the lives of these young South Africans, Atvance Academy is offering young people who have no other access to further education a chance at a better life through free accredited training.', 
      key: '3' },
    { title: 'Blue Label implements salary freeze for 2021',image:'', 
    body: 'Blue Label Telecom says it will implement a salary freeze for 2021 to navigate any further economic or operational impacts.The group published its annual report for the 2020 financial year on Tuesday (29 September), outlining its remuneration structure in the year ahead, while also revealing the pay data for the company’s top executives. The group said it managed to retain over 91% of its employees, “and the decision to not implement salary increases this year has put us in a position to maintain remuneration at all levels throughout the organisation”. Blue Label employs 922 people, excluding its international operations.', 
    key: '4' }, 
    { title: 'Tax cut proposed for South African cars',image:'', 
    body: 'South Africa’s car manufacturers have asked the government to reduce taxes on new vehicle purchases as part of a proposed stimulus package for the coronavirus-hit sector. Reuters reports that the proposal has been mooted by the National Association of Automobile Manufacturers of South Africa (Naamsa) as a way of boosting the local sales of new cars.  Automakers want to lower the tax rate for new vehicles from 42% of the price currently to between 35% and 38%, Naamsa chief executive Mike Mabasa said. Removing a tax on carbon dioxide emissions imposed at purchase and reducing an ad valorem levy – a value-based tax on items considered a luxury in South Africa – could together boost new sales by almost 28,400, Naamsa’s presentation showed. South Africa’s car sales were significantly impacted by the coronavirus pandemic and have still not returned to pre-lockdown levels, sales data shows. However, the country’s new-vehicle market showed signs of further growth in August, in line with the government’s move to open up the country’s economy over the past month.', 
    key: '5' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity  style={styles.textTouch} onPress={() => navigation.navigate('NewsStory', item)}>
          <Card>
            <View>
            <Image style={styles.Image} source={require('../assets/logo.png')} />
              <Text style={styles.titleText}>{ item.title }</Text>
              <Text>touch to read story</Text>
            </View>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding: 40,  
    },

    textTouch:{
        marginBottom:20,
    },
    titleText:{
      color:'black',
      fontWeight:'bold',
      fontSize:20,
    }

})
