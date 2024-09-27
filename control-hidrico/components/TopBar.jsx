import { View, Pressable, Image, StyleSheet } from 'react-native';
import account from '../images/account_icon.png';
import menu from "../images/menu_icon.png";

export default function TopBar() {
    return (
        <View style={styles.top_bar}>
            <Pressable>
                <Image source={menu} style={styles.top_bar_icon}/>
            </Pressable>
            <Pressable>
                <Image source={account} style={styles.top_bar_icon}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    top_bar: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
      },
    
      top_bar_icon: {
        width: 50,
        height: 50,
        resizeMode: 'center',
      },
})