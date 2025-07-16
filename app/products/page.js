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
                            All Products
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                            <Button
                                onClick={() => router.push('/products/create')}
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
                                Create Product
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
                                    Name
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Stock
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
                                    Purchase Price
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
                                    Sale Price
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
                                    Profit
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
                                    Status
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
                                        {item.name}
                                    </Table.Cell>

                                    <Table.Cell fontWeight="medium" color="gray.800" py={3} px={4} fontSize="sm">
                                        {item.Stock}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.purchase_price}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.sale_price}
                                    </Table.Cell>

                                    <Table.Cell textAlign="left" py={3} px={4} fontSize="sm">
                                        {item.profit}
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

                                    <Table.Cell textAlign="left" py={3} px={4}>
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
        serial: 1,
        name: "Dabur Honey 500 mg",
        Stock: "20 pc",
        purchase_price: "250 BDT",
        sale_price: "280 BDT",
        profit: "30 BDT",
        status: "Active",
    },
    {
        id: 2,
        serial: 2,
        name: "Samsung Galaxy M21",
        Stock: "15 pc",
        purchase_price: "18000 BDT",
        sale_price: "20500 BDT",
        profit: "2500 BDT",
        status: "Active",
    },
    {
        id: 3,
        serial: 3,
        name: "Apple Watch SE",
        Stock: "8 pc",
        purchase_price: "25000 BDT",
        sale_price: "28000 BDT",
        profit: "3000 BDT",
        status: "Inactive",
    },
];

