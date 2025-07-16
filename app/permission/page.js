'use client';

import {
    Box, Flex, Heading, Button, Table, Icon,
} from "@chakra-ui/react";
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from "react-icons/md";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import { useState } from "react";

export default function CategoryPage() {
    const [permissionsList] = useState(initialPermissionsList);

    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Permission List
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    <Link href="/permission/create">
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
                            Create Permission
                        </Button>
                    </Link>
                </Flex>

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
                                <Table.ColumnHeader>Image</Table.ColumnHeader>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Description</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {permissionsList.map((item, index) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell>{item.image}</Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>{item.description}</Table.Cell>
                                    <Table.Cell textAlign="end">
                                        <Flex justify="flex-end" gap={2}>
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

const initialPermissionsList = [
    {
        id: 1,
        image: '👤',
        name: 'Admin Permission',
        description: 'Full access to all modules and actions',
    },
    {
        id: 2,
        image: '📝',
        name: 'Editor Permission',
        description: 'Can view and edit content but cannot delete',
    },
    {
        id: 3,
        image: '👁️',
        name: 'Viewer Permission',
        description: 'Read-only access to selected modules',
    }
];
