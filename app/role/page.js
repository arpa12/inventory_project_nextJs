'use client';

import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, Group, NativeSelect, Textarea
} from "@chakra-ui/react";
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from "react-icons/md";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function CategoryPage() {
    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Role List
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
                                Create Role
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">
                                            Create New Role
                                        </Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">
                                                            Role Name <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter Role Name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>


                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">Description</Field.Label>
                                                        <Textarea
                                                            placeholder="Enter Role Description"
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
                                    Description
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
                                        fontWeight="semibold"
                                        color="gray.800"
                                        fontSize="sm"
                                        py={3}
                                        px={4}
                                    >
                                        {item.description}
                                    </Table.Cell>

                                    <Table.Cell textAlign="end" py={3} px={4}>
                                        <Flex justify="flex-end" gap={2}>
                                            <Button size="xs" variant="outline" color="green.700">
                                                <Icon>
                                                    <FaEdit  />
                                                </Icon>
                                            </Button>
                                            <Button size="xs" variant="outline" color="red.600">
                                                <Icon>
                                                    <MdDeleteOutline  />
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
        name: "Employee",
        description: "Basic employee with standard access permissions",
    },
    {
        id: 2,
        name: "Branch Manager",
        description: "Manages a specific branch with full branch access",
    },
    {
        id: 3,
        name: "Team Lead",
        description: "Leads a team with moderate management permissions",
    },
    {
        id: 4,
        name: "HR Manager",
        description: "Human resources management with employee data access",
    },
    {
        id: 5,
        name: "Admin",
        description: "Full system access with administrative privileges",
    },
];