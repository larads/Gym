import { ScrollView, VStack, Image, Center, View, Heading, Text} from "native-base";
import BackgroundImg  from "@assets/background.png"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormProps = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export function SingUp() {
    const navigation = useNavigation()
    const { control } = useForm()

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp() {

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
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>

                    <Controller 
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Nome"
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                    />

                    <Controller 
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                    /> 

                    <Controller 
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                    />

                    <Controller 
                        control={control}
                        name="passwordConfirm"
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Confirmar a Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
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