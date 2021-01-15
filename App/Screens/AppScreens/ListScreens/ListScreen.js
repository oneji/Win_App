import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';
import { Colors } from '../../../src/Themes';
import { TextComponent } from '../../../Components/TextComponent';
import UserDetails from '../../../Components/UserDetails';
import SearchBar from '../../../Components/SearchBar';
import { Styles } from '../Styles/ListStyle';

import axios from 'axios'

const ListScreen = (props) => {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tags, setTags] = useState([ 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3' ]);

    useEffect(() => {
        axios.get('http://win.e2way.ru/api/courses') 
            .then((response) => {
                setList(response.courses);
                setIsLoading(false);
            })
            .catch(err => {
                alert(err);
            });

        props.navigation.setParams({
            leftComponent: <SearchBar />,
            headerLeftContainerStyle: {
                backgroundColor: Colors.white,
                width: '100%',
                flex: 1,
                paddingHorizontal: 20,
                paddingBottom: 0,
            },
        });

        // console.log(props);
    }, []);


    const handlePressCourse = (item) => {
        props.navigation.navigate('CourseScreen', {item});
    };

    const renderCourse = ({item}) => (
        <TouchableOpacity
            style={Styles.courseContainer}
            onPress={() => handlePressCourse(item)}>
            <View style={Styles.imageContainer}>
                <Image
                    source={{uri: item.img || ''}}
                    style={Styles.image}
                />
                <View style={Styles.priceWrapper}>
                    <TextComponent size={14} weight="Bold" lineHeight={29}>
                        {item.price || 0} руб. стоимость курса
                    </TextComponent>
                </View>
            </View>

            <UserDetails
                name={item.company.name}
                text={item.name}
                photoUri={item.authorAvatar}
                photoSize={50}
                containerStyle={Styles.userDetails}
                    nameTextProps={{
                    size: 20,
                    weight: 'Bold',
                    font: 'Oswald',
                    lineHeight: 22,
                }}
                textProps={{
                    size: 13,
                    lineHeight: 29,
                    weight: 'Regular',
                    color: Colors.grey1,
                }}
            />
        </TouchableOpacity>
    );

    const renderFilters = () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tags.map((item, key) => (
                <TextComponent color={Colors.grey1} key={key} style={Styles.filter}>{`#${item}`}</TextComponent>
            ))}
        </ScrollView>
    );

    return (
        <View style={Styles.container}>
            {
                isLoading ? <Text>Loading...</Text> : 
                <FlatList
                    data={list}
                    renderItem={renderCourse}
                    ListHeaderComponent={renderFilters}
                    ListHeaderComponentStyle={Styles.header}
                />
            }
        </View>
    );
};

export default ListScreen;
