import { ScrollView, VStack, Image, Center, View, Heading, Text} from "native-base";
import BackgroundImg  from "@assets/background.png"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormProps = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const SchemaValidation = yup.object({
    name: yup.string().required('Informe o Nome'),
    email: yup.string().required('Informe o E-mail').email('E-mail Invalido'),
    password: yup.string().required('Informe sua Senha!').min(6,'A senha deve ter pelo menos 6 dígitos'),
    passwordConfirm: yup.string().required('Confirme sua Senha!').oneOf([yup.ref('password'), null], 'Senha Não Confere'),
})

export function SingUp() {
    const navigation = useNavigation()
    const { control, handleSubmit, formState: {errors}} = useForm<FormProps>({
        resolver: yupResolver(SchemaValidation)
    })

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
                        render={({ field: { onChange, value } }) => (
                        <Input 
                            placeholder="Nome"
                            onChangeText={onChange}
                            value={value}
                            errorMessage={errors.name?.message}
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
                            errorMessage={errors.email?.message}
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
                                errorMessage={errors.password?.message}

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
                                errorMessage={errors.passwordConfirm?.message}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyLabel="send"
                            />
                        )}
                    />

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