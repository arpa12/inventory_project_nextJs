'use client';

import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, Textarea
} from '@chakra-ui/react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Company Settings
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    {/* Create‑Settings dialog */}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <Button
                                bg="cyan.700"
                                size="md"
                                px={4}
                                py={2}
                                shadow="md"
                                _hover={{ transform: 'translateY(-1px)', shadow: 'lg' }}
                                transition="all 0.2s"
                                borderRadius="md"
                                fontWeight="medium"
                                fontSize="sm"
                                leftIcon={<FaPlus />}
                            >
                                Add Settings
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">
                                            New Company Settings
                                        </Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    {/* Company Name */}
                                                    <Field.Root>
                                                        <Field.Label>
                                                            Company Name <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="companyName"
                                                            placeholder="Enter company name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Contact Number */}
                                                    <Field.Root>
                                                        <Field.Label>Contact Number</Field.Label>
                                                        <Input
                                                            name="contact"
                                                            type="tel"
                                                            placeholder="Enter contact number"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Logo upload */}
                                                    <Field.Root>
                                                        <Field.Label>Logo (image file)</Field.Label>
                                                        <Input
                                                            name="logo"
                                                            type="file"
                                                            accept="image/*"
                                                            size="md"
                                                            borderRadius="md"
                                                            p={1}
                                                        />
                                                    </Field.Root>

                                                    {/* Address */}
                                                    <Field.Root>
                                                        <Field.Label>Address</Field.Label>
                                                        <Textarea
                                                            name="address"
                                                            placeholder="Enter company address"
                                                            rows={2}
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>


                                                </Stack>
                                            </Fieldset.Content>
                                        </Fieldset.Root>
                                    </Dialog.Body>

                                    <Dialog.Footer pt={2} gap={2}>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline" size="md">
                                                Cancel
                                            </Button>
                                        </Dialog.ActionTrigger>
                                        <Button bg="cyan.700" size="md">
                                            Save
                                        </Button>
                                    </Dialog.Footer>

                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                </Flex>

                {/* Settings Table */}
                <Box
                    bg="white"
                    rounded="lg"
                    shadow="md"
                    overflow="hidden"
                    border="1px"
                    borderColor="gray.200"
                >
                    <Table.Root size="md" variant="simple">
                        <Table.Header bg="gray.50">
                            <Table.Row>
                                {['Logo', 'Company Name', 'Address', 'Contact', 'Action'].map((h) => (
                                    <Table.ColumnHeader
                                        key={h}
                                        bg="blue.100"
                                        fontWeight="semibold"
                                        color="gray.700"
                                        fontSize="sm"
                                        py={3}
                                        px={4}
                                    >
                                        {h}
                                    </Table.ColumnHeader>
                                ))}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {settings.map((s, idx) => (
                                <Table.Row
                                    key={s.id}
                                    _hover={{ bg: 'blue.25' }}
                                    transition="background-color 0.15s"
                                    borderBottom={idx === settings.length - 1 ? 'none' : '1px'}
                                    borderColor="gray.100"
                                >
                                    <Table.Cell py={3} px={4} fontSize="sm">
                                        {/* Replace with <Image src={s.logo} … /> if you have URLs */}
                                        {s.logo}
                                    </Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.company}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.address}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.contact}</Table.Cell>
                                    <Table.Cell py={3} px={4}>
                                        <Flex gap={2}>
                                            <Button size="xs" variant="outline" color="green.700">
                                                <Icon as={FaEdit} />
                                            </Button>
                                            <Button size="xs" variant="outline" color="red.600">
                                                <Icon as={MdDeleteOutline} />
                                            </Button>
                                        </Flex>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </Box>
        </DashboardLayout>
    );
}

/* mock settings data */
const settings = [
    {
        id: 1,
        logo: '🏢',               // replace with image URL if needed
        company: 'TechSoft Ltd.',
        address: '123/4 Kawran Bazar, Dhaka',
        contact: '+880 1711‑123456',
    },
];
