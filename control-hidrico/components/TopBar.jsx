import { View, StyleSheet } from 'react-native';
import Menu from './Menu';
import Account from './Account';

export default function TopBar() {
    return (
        <View style={styles.top_bar}>
            <Menu />
            <Account />
        </View>
    );
}

const styles = StyleSheet.create({
    top_bar: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
});