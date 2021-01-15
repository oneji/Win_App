import React from 'react';
import {View, TextInput} from 'react-native';
import IconSearch from '../src/assets/icons/IconSearch';
import {Colors} from '../src/Themes';
import {Styles} from './Styles/SearchBarStyle';

const SearchBar = () => {
    return (
        <View style={Styles.searchBarContainer}>
            <View style={Styles.iconWrap}>
                <IconSearch />
            </View>
            <TextInput
                style={Styles}
                placeholder="Поиск по курсам"
                placeholderTextColor={Colors.grey}
            />
        </View>
    );
};

export default SearchBar;
