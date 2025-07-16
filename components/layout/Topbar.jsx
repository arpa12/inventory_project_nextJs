'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';

export default function Topbar() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Flex
            as="header"
            h="55px"
            bg="cyan.700"
            color="white"
            align="center"
            justify="flex-end"
            px={6}
            position="sticky"
            top={0}
            zIndex={100}
            borderBottom="1px solid"
            borderColor="gray.700"
        >
            <Box position="relative" ref={menuRef}>
                {/* Avatar button */}
                <Box
                    as="button"
                    onClick={() => setOpen((o) => !o)}
                    border="none"
                    bg="transparent"
                    p={0}
                    cursor="pointer"
                    _focus={{ outline: 'none' }}
                >
                    <Image
                        src="/avatar.jpg"
                        alt="User avatar"
                        width={32}
                        height={32}
                        style={{ borderRadius: '50%' }}
                        priority
                    />
                </Box>

                {/* Dropdown */}
                {open && (
                    <VStack
                        as="ul"
                        role="menu"
                        listStyleType="none"
                        m={0}
                        p={0}
                        spacing={0}
                        bg="cyan.800"
                        borderRadius="md"
                        position="absolute"
                        top="40px"
                        right={0}
                        minW="160px"
                        boxShadow="md"

                    >
                        {['Profile', 'Settings', 'Sign out'].map((item) => (
                            <Box
                                as="li"
                                role="menuitem"
                                key={item}
                                px={4}
                                py={2}
                                w="full"
                                cursor="pointer"
                                _hover={{ bg: 'gray.700' }}
                            >
                                <Text fontSize="sm">{item}</Text>
                            </Box>
                        ))}
                    </VStack>
                )}
            </Box>
        </Flex>
    );
}
