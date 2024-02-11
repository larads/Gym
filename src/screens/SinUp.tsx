import { ScrollView, VStack, Image, Center, View, Heading, Text} from "native-base";
import BackgroundImg  from "@assets/background.png"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

type FormProps = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export function SingUp() {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp() {
        console.log({
          name,
          email,
          password,
          passwordConfirm
        });
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
                    <Text color={'white'}>Crie sua conta</Text>
                    <Input 
                        placeholder="Nome"
                    />

                    <Input 
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={setEmail}
                    />

                    <Input 
                        placeholder="Senha"
                        secureTextEntry
                        onChangeText={setPassword}
                    />

                    <Input 
                        placeholder="Confirmar a Senha"
                        secureTextEntry
                        onChangeText={setPasswordConfirm}
                    />

                    <Button 
                        title="Criar e Acessar"
                        onPress={handleSignUp}                    
                    />
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