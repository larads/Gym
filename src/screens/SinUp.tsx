import { ScrollView, VStack, Image, Center, View, Heading, Text} from "native-base";
import BackgroundImg  from "@assets/background.png"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export function SingUp() {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack();
    }

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="gray.700" px={10} pb={20}>
                <Image 
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt=""
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={20}>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <MaterialIcons name="fitness-center" size={30} color="#00875F"/>
                        <Heading color={"white"} marginLeft={2}>Gym</Heading>
                    </View>

                    <Text color="gray.200" bold fontSize="sm">Treine sua Mente e Corpo</Text>
                </Center>

                <Center my={22}>
                    <Input 
                        placeholder="Nome"
                    />

                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                    />

                    <Button title="Criar e Acessar" />
                </Center>

                <Button
                    title="Voltar para o login"
                    variant="outline"
                    mt={24}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    )
}