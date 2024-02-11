import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Heading,Center, ScrollView, Skeleton, VStack, Text, useToast} from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

export function Profile() {
    const [loading, setLoading] = useState(false)
    const [userPhoto, setUserPhoto] = useState('http://github.com/larads.png')

    const toast = useToast();

    async function handleUserPhotoSelect() {
        setLoading(true)
        try {
            const userPhoto = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            })
            console.log(userPhoto);
            
            if(userPhoto.canceled) {
                return;
            }
    
            if (userPhoto.uri) {

                const photoInfo = await FileSystem.getInfoAsync(userPhoto.uri);
    
                if(photoInfo.exists && photoInfo.size && (photoInfo.size / 1024 /1024 ) > 2) {
                    return toast.show({
                        title: 'Essa Imagem é muito grande. Escolha uma de até 5MB.',
                        placement: 'top',
                        bgColor: 'red.500'
                    })
                }
                console.error('ddd',photoInfo)
                
                setUserPhoto(userPhoto.uri)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>
            <ScrollView contentContainerStyle={{ paddingBottom: 15}}>
                <Center mt={6} px={10}>
                    {
                        loading ?
                            <Skeleton 
                                w={33} h={33} 
                                rounded="full" 
                                startColor={'green.200'} 
                                endColor={'green.500'}/>
                        : <UserPhoto
                            source={{ uri: userPhoto}} 
                            alt=''
                            size={33}
                        />
                    }
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
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