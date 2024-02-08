import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Heading,Center, ScrollView, Skeleton, VStack, Text} from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

export function Profile() {
    const [loading, setLoading] = useState(false)
    return(
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>
            <ScrollView>
                <Center mt={6} px={10}>
                    {
                        loading ?
                            <Skeleton 
                                w={33} h={33} 
                                rounded="full" 
                                startColor={'green.200'} 
                                endColor={'green.500'}/>
                        : <UserPhoto
                            source={{ uri: 'http://github.com/larads.png'}} 
                            alt=''
                            size={33}
                        />
                    }
                    <TouchableOpacity>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
                            Alterar Foto
                        </Text>
                    </TouchableOpacity>
                    <Input
                        placeholder="Nome"
                        bg="gray.600"
                    />
                    <Input
                        placeholder="E-mail"
                        bg="gray.600"
                    />
                </Center>

                <VStack px={10} mt={12} mb={9}>
                    <Heading color="gray.200" fontSize="md" mb={2}>
                        Alterar Senha
                    </Heading>

                    <Input 
                        bg="gray.600"
                        placeholder='Senha Antiga'
                        secureTextEntry
                    />
                    <Input 
                        bg="gray.600"
                        placeholder='Nova Senha'
                        secureTextEntry
                    />

                    <Input 
                        bg="gray.600"
                        placeholder='Confirmar a nova Senha'
                        secureTextEntry
                    />

                    <Button 
                        title='Atualizar'
                        mt={4}
                    />

                </VStack>
            </ScrollView>
        </VStack>
    )
}