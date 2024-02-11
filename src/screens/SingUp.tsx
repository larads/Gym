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
    const { control, handleSubmit, formState: {errors}} = useForm<FormProps>()

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp({name, email, password, passwordConfirm}: FormProps) {
        console.log({ name, email, password, passwordConfirm})
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
                        rules={{
                            required: 'Informe o nome'
                        }}
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Nome"
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                    />
                    <Text color={'red.500'}>{errors.name?.message }</Text>

                    <Controller 
                        control={control}
                        name="email"
                        rules={{
                            required: 'Informe E-mail',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'E-mail Inválido'
                            }
                        }}
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
                    <Text color={'red.500'}>{errors.email?.message }</Text>

                    <Controller 
                        control={control}
                        name="password"
                        rules={{
                            required: 'Informe uma Senha!'
                        }}
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                        />
                        )}
                    />
                    <Text color={'red.500'}>{errors.password?.message }</Text>


                    <Controller 
                        control={control}
                        name="passwordConfirm"
                        rules={{
                            required: 'Confime a Senha!'
                        }}
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Confirmar a Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            value={value}
                            onSubmitEditing={handleSubmit(handleSignUp)}
                            returnKeyLabel="send"
                        />
                        )}
                    />
                    <Text color={'red.500'}>{errors.passwordConfirm?.message }</Text>


                    <Button 
                        title="Criar e Acessar"
                        onPress={handleSubmit(handleSignUp)}                    
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