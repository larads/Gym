import { VStack, Image, Text, Center, View, Heading, ScrollView} from "native-base"
import { MaterialIcons } from '@expo/vector-icons';
import BackgroundImg  from "@assets/background.png"
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
    const navigation = useNavigation()

    function handleNewAccount(){
        navigation.navigate('SingUp')
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
            
                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                        />

                    <Button title="Acessar"/>
                </Center>

                <Center mt={24}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda não tem acesso?
                    </Text>

                    <Button 
                        title="Criar Conta"
                        variant="outline"
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}