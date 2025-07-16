'use client';

import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    Input,
    Stack,
    Dialog,
    Portal,
    CloseButton,

} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LandingPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Simulated login action
        if (email && password) {
            router.push('/dashboard');
        } else {
            alert("Please enter email and password.");
        }
    };

    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgGradient="linear(to-br, blue.50, purple.50, pink.50)"
        >
            <VStack spacing={8} textAlign="center">
                <Heading
                    size="3xl"
                    bgGradient="linear(to-r, blue.600, purple.600)"
                    bgClip="text"
                    fontWeight="extrabold"
                >
                    Welcome to the App
                </Heading>
                <Text
                    textStyle="5xl"
                    color="gray.600"
                    fontWeight="medium"
                >
                    Manage your inventory, sales, and teams efficiently.
                </Text>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <Button
                            bgGradient="linear(to-r, blue.500, purple.500)"
                            color="white"
                            size="lg"
                            px={8}
                            py={6}
                            borderRadius="xl"
                            fontWeight="bold"
                            boxShadow="lg"
                            _hover={{
                                bgGradient: "linear(to-r, blue.600, purple.600)",
                                transform: "translateY(-2px)",
                                boxShadow: "xl"
                            }}
                            transition="all 0.3s ease"
                        >
                            Login
                        </Button>
                    </Dialog.Trigger>

                    <Portal>
                        <Dialog.Backdrop bg="blackAlpha.600" backdropFilter="blur(5px)" />
                        <Dialog.Positioner>
                            <Dialog.Content
                                maxW="md"
                                bg="white"
                                borderRadius="2xl"
                                boxShadow="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                backdropFilter="blur(10px)"
                            >
                                <Dialog.Header pb={4} pt={6}>
                                    <Dialog.Title
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        bgGradient="linear(to-r, blue.600, purple.600)"
                                        bgClip="text"
                                        textAlign="center"
                                    >
                                        Login to Dashboard
                                    </Dialog.Title>
                                </Dialog.Header>

                                <Dialog.Body py={6}>
                                    <Stack spacing={5}>
                                        <Input
                                            placeholder="Enter Email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            size="lg"
                                            borderRadius="xl"
                                            border="2px solid"
                                            borderColor="gray.200"
                                            _focus={{
                                                borderColor: "blue.500",
                                                boxShadow: "0 0 0 1px blue.500"
                                            }}
                                            _hover={{
                                                borderColor: "gray.300"
                                            }}
                                        />
                                        <Input
                                            placeholder="Enter Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            size="lg"
                                            borderRadius="xl"
                                            border="2px solid"
                                            borderColor="gray.200"
                                            _focus={{
                                                borderColor: "blue.500",
                                                boxShadow: "0 0 0 1px blue.500"
                                            }}
                                            _hover={{
                                                borderColor: "gray.300"
                                            }}
                                        />
                                    </Stack>
                                </Dialog.Body>

                                <Dialog.Footer pt={4} pb={6} gap={3}>
                                    <Dialog.ActionTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            borderRadius="xl"
                                            flex={1}
                                            _hover={{
                                                bg: "gray.50"
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Dialog.ActionTrigger>
                                    <Button
                                        bgGradient="linear(to-r, blue.500, purple.500)"
                                        color="white"
                                        size="lg"
                                        borderRadius="xl"
                                        flex={1}
                                        onClick={handleSubmit}
                                        _hover={{
                                            bgGradient: "linear(to-r, blue.600, purple.600)",
                                            transform: "translateY(-1px)"
                                        }}
                                        transition="all 0.2s ease"
                                    >
                                        Login
                                    </Button>
                                </Dialog.Footer>

                                <Dialog.CloseTrigger asChild>
                                    <CloseButton
                                        size="sm"
                                        position="absolute"
                                        top={4}
                                        right={4}
                                        borderRadius="full"
                                        _hover={{
                                            bg: "gray.100"
                                        }}
                                    />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </VStack>
        </Box>
    );
}