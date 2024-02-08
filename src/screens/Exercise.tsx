import { TouchableOpacity } from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Heading, Text, Image, Box, ScrollView} from 'native-base'
import { Button } from '@components/Button';

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
            <ScrollView>
                <VStack p={8}>
                    <Image
                        w="full"
                        h={80}
                        source={{uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
                        alt=''
                        mb={3}
                        resizeMode='cover'
                        rounded="lg"
                    />
                    <Box bg="gray.600" rounded="md" pb={4} px={4}>
                        <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                            <HStack>
                                <MaterialIcons name="fitness-center" size={24} color="#00B37E" />
                                <Text color="gray.200" ml={2}>
                                    3 séries
                                </Text>
                            </HStack>
                            <HStack>
                                <Feather name="repeat" size={24} color="#00B37E" />
                                <Text color="gray.200" ml={2}>
                                    12 repetições
                                </Text>
                            </HStack>
                        </HStack>

                        <Button title='Marcar como Realizado' />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}