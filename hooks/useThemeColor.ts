/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { darkTheme, lightTheme } from '@/theme/themes';
import { useColorScheme } from 'react-native';

// import { Colors } from '@/constants/Colors';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof lightTheme & keyof typeof darkTheme
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    return colorFromProps;
}
