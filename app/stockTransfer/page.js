'use client';

import {Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, NativeSelect, Textarea, Badge} from "@chakra-ui/react";
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from "react-icons/md";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from 'next/navigation';

export default function CategoryPage() {
    const router = useRouter();
    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            All Stock Transfers
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    <Button
                        onClick={() => router.push('/stockTransfer/create')}
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
                    >
                        <Icon>
                            <FaPlus />
                        </Icon>
                        Create Transfer
                    </Button>
                </Flex>

                {/* Table Container */}
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
                                <Table.ColumnHeader
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    SL
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Transfer No
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Date
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    From
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    To
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Items
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Amount (BDT)
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="left"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Action
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {items.map((item, index) => (
                                <Table.Row
                                    key={item.id}
                                    _hover={{ bg: "blue.25" }}
                                    transition="background-color 0.15s"
                                    borderBottom={index === items.length - 1 ? "none" : "1px"}
                                    borderColor="gray.100"
                                >
                                    <Table.Cell fontWeight="medium" color="gray.800" py={3} px={4} fontSize="sm">
                                        {item.serial}
                                    </Table.Cell>

                                    <Table.Cell fontWeight="medium" color="gray.800" py={3} px={4} fontSize="sm">
                                        {item.transferNo}
                                    </Table.Cell>

                                    <Table.Cell fontWeight="medium" color="gray.800" py={3} px={4} fontSize="sm">
                                        {item.date}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item. from}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.to}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.items}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.amount}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        <Badge bg={item.status === "Active" ? "green"
                                            : item.status === "Inactive" ? "red"
                                                : item.status === "New" ? "purple"
                                                    : "gray"}
                                               color="white">
                                            {item.status}
                                        </Badge>
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

const items = [
    {
        id: 1,
        serial: 1,
        transferNo: 'TR‑1001',
        date: '2025‑07‑14',
        from: 'Central Warehouse',
        to: 'Banani Branch',
        items: 120,
        amount: 125000,
    },
    {
        id: 2,
        serial: 2,
        transferNo: 'TR‑1002',
        date: '2025‑07‑13',
        from: 'Central Warehouse',
        to: 'Dhanmondi Branch',
        items: 80,
        amount: 76000,
    },
    {
        id: 3,
        serial: 3,
        transferNo: 'TR‑1003',
        date: '2025‑07‑12',
        from: 'Gulshan Hub',
        to: 'Mirpur Depot',
        items: 60,
        amount: 54000,

    },
];


