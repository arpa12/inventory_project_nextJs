'use client';

import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, Textarea
} from '@chakra-ui/react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function SupplierPage() {
    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Supplier List
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    {/* Create‑Supplier dialog */}
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
                                Create Supplier
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">
                                            Create New Supplier
                                        </Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    {/* Supplier Name */}
                                                    <Field.Root>
                                                        <Field.Label>
                                                            Supplier Name <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="supplierName"
                                                            placeholder="Enter supplier name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Phone & Email */}
                                                    <Flex gap={2} direction={{ base: 'column', md: 'row' }}>
                                                        <Field.Root flex="1">
                                                            <Field.Label>Phone</Field.Label>
                                                            <Input
                                                                name="phone"
                                                                type="tel"
                                                                placeholder="Enter phone number"
                                                                size="md"
                                                                borderRadius="md"
                                                            />
                                                        </Field.Root>

                                                        <Field.Root flex="1">
                                                            <Field.Label>Email</Field.Label>
                                                            <Input
                                                                name="email"
                                                                type="email"
                                                                placeholder="Enter email address"
                                                                size="md"
                                                                borderRadius="md"
                                                            />
                                                        </Field.Root>
                                                    </Flex>

                                                    {/* Address */}
                                                    <Field.Root>
                                                        <Field.Label>Address</Field.Label>
                                                        <Textarea
                                                            name="address"
                                                            placeholder="Enter supplier address"
                                                            rows={2}
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Company name & address */}
                                                    <Field.Root>
                                                        <Field.Label>Company Name</Field.Label>
                                                        <Input
                                                            name="companyName"
                                                            placeholder="Enter company name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Field.Label>Company Address</Field.Label>
                                                        <Textarea
                                                            name="companyAddress"
                                                            placeholder="Enter company address"
                                                            rows={2}
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    {/* Designation */}
                                                    <Field.Root>
                                                        <Field.Label>Designation</Field.Label>
                                                        <Input
                                                            name="designation"
                                                            placeholder="Enter designation"
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

                {/* Supplier Table */}
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
                                {['Image', 'Supplier', 'Company', 'Phone', 'Email', 'Action'].map((h) => (
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
                            {suppliers.map((s, idx) => (
                                <Table.Row
                                    key={s.id}
                                    _hover={{ bg: 'blue.25' }}
                                    transition="background-color 0.15s"
                                    borderBottom={idx === suppliers.length - 1 ? 'none' : '1px'}
                                    borderColor="gray.100"
                                >
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.image}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.name}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.company}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.phone}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{s.email}</Table.Cell>
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

/* mock supplier data */
const suppliers = [
    {
        id: 1,
        image: '📦',
        name: 'Rahman Traders',
        company: 'Rahman Group',
        phone: '01711‑123456',
        email: 'info@rahman.com',
    },
    {
        id: 2,
        image: '🚚',
        name: 'Global Supplies',
        company: 'Global Logistics Ltd.',
        phone: '01822‑987654',
        email: 'contact@global.com',
    },
];
