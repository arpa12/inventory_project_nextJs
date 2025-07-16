'use client';

import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, Textarea
} from '@chakra-ui/react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function CustomerPage() {
    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Customer List
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    {/* Create‑Customer dialog */}
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
                                Create Customer
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">
                                            Create New Customer
                                        </Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    {/* Customer Name */}
                                                    <Field.Root>
                                                        <Field.Label>
                                                            Customer Name <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="customerName"
                                                            placeholder="Enter customer name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Phone */}
                                                    <Field.Root>
                                                        <Field.Label>Phone</Field.Label>
                                                        <Input
                                                            name="phone"
                                                            type="tel"
                                                            placeholder="Enter phone number"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Address */}
                                                    <Field.Root>
                                                        <Field.Label>Address</Field.Label>
                                                        <Textarea
                                                            name="address"
                                                            placeholder="Enter customer address"
                                                            rows={2}
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Comment */}
                                                    <Field.Root>
                                                        <Field.Label>Comment</Field.Label>
                                                        <Textarea
                                                            name="comment"
                                                            placeholder="Notes or comments"
                                                            rows={3}
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* File upload */}
                                                    <Field.Root>
                                                        <Field.Label>Attachment</Field.Label>
                                                        <Input
                                                            name="file"
                                                            type="file"
                                                            size="md"
                                                            borderRadius="md"
                                                            p={1}
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

                {/* Customer Table */}
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
                                {['Image', 'Customer', 'Phone', 'Address', 'Action'].map((h) => (
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
                            {customers.map((c, idx) => (
                                <Table.Row
                                    key={c.id}
                                    _hover={{ bg: 'blue.25' }}
                                    transition="background-color 0.15s"
                                    borderBottom={idx === customers.length - 1 ? 'none' : '1px'}
                                    borderColor="gray.100"
                                >
                                    <Table.Cell py={3} px={4} fontSize="sm">{c.image}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{c.name}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{c.phone}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{c.address}</Table.Cell>
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

/* mock customer data */
const customers = [
    {
        id: 1,
        image: '👤',
        name: 'Anika Rahman',
        phone: '01711‑123456',
        address: '123/A Banani, Dhaka',
    },
    {
        id: 2,
        image: '👤',
        name: 'Tanvir Hasan',
        phone: '01822‑987654',
        address: '56 Gulshan Ave, Dhaka',
    },
];
