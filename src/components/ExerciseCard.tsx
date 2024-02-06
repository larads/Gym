import { HStack, Heading, Image, Text, VStack} from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
    return(
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} rounded="md" mb={3}>
                <Image 
                    source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
                    alt=""
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white" >
                        Remanda unilateral
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        3 séries x 12 repetições
                    </Text>
                </VStack>
                <Entypo name="chevron-thin-right" size={24} color="gray.300" />
            </HStack>
        </TouchableOpacity>
    )
}