import {FlatList, ListRenderItem, StyleSheet, Text, View,Image} from "react-native";
import React from "react";
import {GroupType} from "@/types/groupType";
import Colors from "@/constants/Colors";
import {Ionicons} from "@expo/vector-icons";

const GroupListing = ({listings} : {listings: GroupType[]}) => {
  const renderItem: ListRenderItem<GroupType> = ({item}) => {
      return(
           <View style={styles.item}>
               <Image source = {{uri: item.image}} style={styles.image}/>
               <View>
                     <Text style={styles.itemTxt}>{item.name}</Text>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Ionicons name="star" size={14} color={Colors.primaryColor}/>
    <Text style={styles.itemRating}>{item.rating}</Text>
    <Text style={styles.itemReviews}>({item.reviews})</Text>
</View>
               </View>
           </View>
      );
  }

    return(
        <View style={{marginVertical: 20, marginLeft:10}}>
            <Text style={styles.title}>
               Popular Hotels
            </Text>
            <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default GroupListing;

const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 10
    },
    item:{
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    itemTxt:{
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginBottom:8,
    },
    itemRating:{
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
        marginLeft: 5,

    },
    itemReviews:{
        fontSize: 14,
       color: '#999',
    }
});

