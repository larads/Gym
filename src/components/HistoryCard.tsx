import { HStack, Heading, VStack, Text } from "native-base";

export function HistoryCard() {
    return(
        <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" justifyContent="space-around" alignItems="center">
            <VStack mr={5} flex={1}>
                <Heading color="white" fontSize="md" textTransform="capitalize">
                    Costas
                </Heading>

                <Text color="gray.100" fontSize="lg" numberOfLines={1}>
                    Puxada frontal
                </Text>
            </VStack>

            <Text color="gray.100" fontSize="md">08:56</Text>
        </HStack>
    )
}