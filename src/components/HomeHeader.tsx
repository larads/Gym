import { Ionicons } from "@expo/vector-icons";
import { Text, HStack, Heading, VStack, Center } from "native-base";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
    return(
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">Olá</Text>

                <Heading color="gray.100" fontSize="md">
                    Mariana
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Ionicons name="exit-outline" size={30} color="gray.200" />
            </TouchableOpacity>
        </HStack>
    )
}