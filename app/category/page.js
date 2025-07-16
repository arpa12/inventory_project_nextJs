'use client';
import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset, For,
    Input, Stack, Textarea, Icon
} from "@chakra-ui/react";
import { FaPlus } from 'react-icons/fa';

import DashboardLayout from "@/components/layout/DashboardLayout";


export default function CategoryPage() {

    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            All Categories
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

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
                            >
                                <Icon>
                                    <FaPlus />
                                </Icon>
                                Create Category
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">Create New Category</Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">
                                                            Category Name <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter Category Name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">Category Code</Field.Label>
                                                        <Input
                                                            name="Code"
                                                            placeholder="Enter Category Code"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">Description</Field.Label>
                                                        <Textarea
                                                            placeholder="Enter Category Description"
                                                            size="md"
                                                            borderRadius="md"
                                                            rows={3}
                                                        />
                                                    </Field.Root>
                                                </Stack>
                                            </Fieldset.Content>
                                        </Fieldset.Root>
                                    </Dialog.Body>

                                    <Dialog.Footer pt={2} gap={2}>
                                        <Dialog.ActionTrigger asChild>
                                            <Button variant="outline" size="md">Cancel</Button>
                                        </Dialog.ActionTrigger>
                                        <Button bg="cyan.700" size="md">Save</Button>
                                    </Dialog.Footer>

                                    <Dialog.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Dialog.CloseTrigger>
                                </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>
                </Flex>

                {/* Table Container */}
                <Box bg="white" rounded="lg" shadow="md" overflow="hidden" border="1px" borderColor="gray.200">
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
                                    Product
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Category
                                </Table.ColumnHeader>
                                <Table.ColumnHeader
                                    textAlign="end"
                                    fontWeight="semibold"
                                    color="gray.700"
                                    fontSize="sm"
                                    py={3}
                                    px={4}
                                    bg="blue.100"
                                >
                                    Price
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
                                    <Table.Cell
                                        fontWeight="medium"
                                        color="gray.800"
                                        py={3}
                                        px={4}
                                        fontSize="sm"
                                    >
                                        {item.name}
                                    </Table.Cell>
                                    <Table.Cell
                                        color="gray.600"
                                        py={3}
                                        px={4}
                                    >
                                        <Box
                                            as="span"
                                            bg="blue.50"
                                            color="blue.700"
                                            px={2}
                                            py={1}
                                            rounded="md"
                                            fontSize="xs"
                                            fontWeight="medium"
                                        >
                                            {item.category}
                                        </Box>
                                    </Table.Cell>
                                    <Table.Cell
                                        textAlign="end"
                                        fontWeight="semibold"
                                        color="green.600"
                                        fontSize="md"
                                        py={3}
                                        px={4}
                                    >
                                        ${item.price}
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
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },

]