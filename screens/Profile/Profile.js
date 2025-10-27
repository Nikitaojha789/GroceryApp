import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import style from './style';

// SVG icons import
import AboutIcon from '../../assets/images/about.svg';
import OrderIcon from '../../assets/images/orders.svg';
import FavouritesIcon from '../../assets/images/favourites.svg';
import AddressIcon from '../../assets/images/address.svg';
import CreditIcon from '../../assets/images/credit.svg';
import TransactionsIcon from '../../assets/images/transactions.svg';
import BellIcon from '../../assets/images/bell.svg';
import SignIcon from '../../assets/images/sign.svg';

import GoIcon from '../../assets/images/go.svg';

const ListItem = ({ Icon, title, onPress }) => {
    return (
        <Pressable style={style.listItem} onPress={onPress}>
            {/* Left Icon */}
            <Icon width={20} height={20} style={style.leftIcon} />

            {/* Title */}
            <Text style={style.listText}>{title}</Text>

            {/* Right Arrow */}
            <GoIcon width={16} height={16} style={style.goIcon} />
        </Pressable>
    );
};

const Profile = () => {
    return (
        <View style={style.container}>
            {/* Top Section */}
            <View style={style.topSection}>
                <Image
                    source={require('../../assets/images/Profile.png')}
                    style={style.profileImage}
                />
                <Text style={style.name}>Olivia Austin</Text>
                <Text style={style.email}>oliviaustin@gmail.com</Text>
            </View>

            {/* Bottom Section */}
            <View style={style.bottomSection}>
                <ListItem Icon={AboutIcon} title="About me" onPress={() => { }} />
                <ListItem Icon={OrderIcon} title="My Orders" onPress={() => { }} />
                <ListItem Icon={FavouritesIcon} title="My Favorites" onPress={() => { }} />
                <ListItem Icon={AddressIcon} title="Address" onPress={() => { }} />
                <ListItem Icon={CreditIcon} title="Credit Cards" onPress={() => { }} />
                <ListItem Icon={TransactionsIcon} title="Transactions" onPress={() => { }} />
                <ListItem Icon={BellIcon} title="Notifications" onPress={() => { }} />
                <ListItem Icon={SignIcon} title="Sign out" onPress={() => { }} />
            </View>
        </View>
    );
};

export default Profile;
