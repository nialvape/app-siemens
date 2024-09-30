import { View, Text, StyleSheet } from 'react-native';
import Menu from './Menu';
import Account from './Account';

export default function TopBar() {
    return (
        <View style={styles.top_bar}>
            <Menu />
            <Text style={styles.title}>Water Kaisen</Text>
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
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4E8098',
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
    },
});
