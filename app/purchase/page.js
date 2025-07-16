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
                            Purchase List
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    <Button
                        onClick={() => router.push('/purchase/create')}
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
                        Create Purchase
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
                                    Bill No
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Challan No
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
                                    Purchase Date
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
                                    Supplier
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
                                        {item.bill_no}
                                    </Table.Cell>

                                    <Table.Cell fontWeight="medium" color="gray.800" py={3} px={4} fontSize="sm">
                                        {item.challan_no}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item. purchase_date}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.supplier}
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
        bill_no: "Dabur Honey 500 mg",
        challan_no: "20 pc",
        purchase_date: "250 BDT",
        supplier: "280 BDT",
        items: "30 BDT",
        amount: "1032",
    },
    {
        id: 2,
        serial: 2,
        bill_no: "Lipton Tea 100 gm",
        challan_no: "50 pc",
        purchase_date: "150 BDT",
        supplier: "180 BDT",
        items: "30 BDT",
        amount: "1032",
    },
    {
        id: 3,
        serial: 3,
        bill_no: "Coca-Cola 1 Litre",
        challan_no: "30 pc",
        purchase_date: "120 BDT",
        supplier: "150 BDT",
        items: "30 BDT",
        amount: "1032",
    },
    {
        id: 4,
        serial: 4,
        bill_no: "Nestle Milk 1 Litre",
        challan_no: "40 pc",
        purchase_date: "110 BDT",
        supplier: "140 BDT",
        items: "30 BDT",
        amount: "1032",
    },
    {
        id: 5,
        serial: 5,
        bill_no: "Pillsbury Flour 1 kg",
        challan_no: "25 pc",
        purchase_date: "100 BDT",
        supplier: "130 BDT",
        items: "30 BDT",
        amount: "1032",
    },

];


