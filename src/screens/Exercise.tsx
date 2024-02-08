import { HStack, VStack, Heading, Text} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function Exercise() {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack();
    }

    return(
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12} pb={3}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Ionicons name="arrow-back" size={24} color="#00B37E" />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada frontal
                    </Heading>

                    <HStack>
                        <Ionicons name="person-outline" size={17} color='#7C7C8A'/>
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    )
}