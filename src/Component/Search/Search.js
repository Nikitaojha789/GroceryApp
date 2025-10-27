import React, { useState, useRef } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import style from './style';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const textInputRef = useRef(null);

    const handleFocus = () => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    };

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        props.onSearch(searchValue);
    };

    return (
        <View style={style.searchInputContainer}>
            {/* Search Icon */}
            <Pressable onPress={handleFocus} style={style.searchIcon}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width={22}
                    height={22}
                    viewBox="0 0 183.792 183.792"
                    {...props}
                >
                    <Path
                        d="M54.734 9.053C39.12 18.067 27.95 32.624 23.284 50.039c-4.667 17.415-2.271 35.606 6.743 51.22 12.023 20.823 34.441 
                        33.759 58.508 33.759a67.31 67.31 0 0 0 22.287-3.818l30.364 52.592 21.65-12.5-30.359-52.583c10.255-8.774 17.638-20.411 21.207-33.73 
                        4.666-17.415 2.27-35.605-6.744-51.22C134.918 12.936 112.499 0 88.433 0 76.645 0 64.992 3.13 54.734 9.053zm70.556 37.206c5.676 9.831 7.184 
                        21.285 4.246 32.25-2.938 10.965-9.971 20.13-19.802 25.806a42.466 42.466 0 0 1-21.199 5.703c-15.163 0-29.286-8.146-36.857-21.259-5.676-9.831-7.
                        184-21.284-4.245-32.25 2.938-10.965 9.971-20.13 19.802-25.807A42.47 42.47 0 0 1 88.433 25c15.164 0 29.286 8.146 36.857 21.259z"
                        fill="#868889"
                    />

                </Svg>




                {/* <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 488.4 488.4"
                >
                    <Path
                        d="M203.2 0c91.2 0 203.2..."
                        fill="#25C0FF"
                    />
                </Svg> */}
            </Pressable>

            {/* Search Input */}
            <TextInput
                ref={textInputRef}
                placeholder="Search keywords.."
                placeholderTextColor="#868CA7"
                style={style.searchInput}
                value={search}
                onChangeText={handleSearch}
            />
        </View>
    );
};

Search.defaultProps = {
    onSearch: () => { },
};

Search.propTypes = {
    onSearch: PropTypes.func,
};

export default Search;
