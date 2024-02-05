import { VStack, Image, Text, Center, View, Heading} from "native-base"
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundImg  from "@assets/background.png"

export function SignIn() {
    return(
        <VStack flex={1} bg="gray.700">
            <Image 
                source={BackgroundImg} 
                alt=""
                resizeMode="contain"
                position="absolute"
            />
            <Center my={24}>
                <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <MaterialIcons name="fitness-center" size={30} color="#00875F"/>
                    <Heading color={"white"} marginLeft={2}>Gym</Heading>
                </View>

                <Text color="gray.200" bold fontSize="sm">Treine sua Mente e Corpo</Text>
            </Center>
            <Center>
                <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                    Acesse sua Conta
                </Heading>
            </Center>
        </VStack>
    )
}