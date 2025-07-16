'use client';

import {
    Box, Flex, Heading, Button, Table, Text, Icon, Badge
} from '@chakra-ui/react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useRouter } from 'next/navigation';

export default function SalePage() {
    const router = useRouter();

    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Sale List
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    <Button
                        onClick={() => router.push('/sale/create')}
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
                        Create Sale
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
                                {["SL", "Invoice No", "Date", "Customer", "Amount", "Item Qty", "Action"].map((col) => (
                                    <Table.ColumnHeader
                                        key={col}
                                        fontWeight="semibold"
                                        color="gray.700"
                                        fontSize="sm"
                                        py={3}
                                        px={4}
                                        bg="blue.100"
                                    >
                                        {col}
                                    </Table.ColumnHeader>
                                ))}
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
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell fontSize="sm" py={3} px={4}>{item.invoiceNo}</Table.Cell>
                                    <Table.Cell fontSize="sm" py={3} px={4}>{item.date}</Table.Cell>
                                    <Table.Cell fontSize="sm" py={3} px={4}>{item.customer}</Table.Cell>
                                    <Table.Cell fontSize="sm" py={3} px={4}>{item.amount} ৳</Table.Cell>
                                    <Table.Cell fontSize="sm" py={3} px={4}>{item.itemQty}</Table.Cell>
                                    <Table.Cell py={3} px={4}>
                                        <Flex justify="flex-left" gap={2}>
                                            <Button size="xs" variant="outline" color="green.700">
                                                <Icon>
                                                    <FaEdit />
                                                </Icon>
                                            </Button>
                                            <Button size="xs" variant="outline" color="red.600">
                                                <Icon>
                                                    <MdDeleteOutline />
                                                </Icon>
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

const items = [
    {
        id: 1,
        invoiceNo: "INV-1001",
        date: "2025-07-16",
        customer: "Mr. Rahim",
        amount: 520,
        itemQty: 6
    },
    {
        id: 2,
        invoiceNo: "INV-1002",
        date: "2025-07-15",
        customer: "Ms. Karima",
        amount: 750,
        itemQty: 10
    },
    {
        id: 3,
        invoiceNo: "INV-1003",
        date: "2025-07-14",
        customer: "Akash Enterprise",
        amount: 320,
        itemQty: 3
    }
];
