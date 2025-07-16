'use client';

import {
    Box, Flex, Heading, Button, Table, Badge, Icon,
} from '@chakra-ui/react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useRouter } from 'next/navigation';

export default function EmployeePage() {
    const router = useRouter();

    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Employees
                        </Heading>
                        <Box h={1} w={10} bg="blue.500" mt={1} rounded="full" />
                    </Box>

                    <Button
                        onClick={() => router.push('/employee/create')}
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
                        Create Employee
                    </Button>
                </Flex>

                {/* Employee Table */}
                <Box
                    bg="white"
                    rounded="lg"
                    shadow="md"
                    overflow="hidden"
                    border="1px"
                    borderColor="gray.200"
                >
                    <Table.Root variant="simple" size="md">
                        <Table.Header bg="gray.50">
                            <Table.Row>
                                {[
                                    'SL', 'Name', 'Nickname', 'Role', 'Phone', 'Email',
                                    'DOB', 'Blood Group', 'Status', 'Action',
                                ].map((h) => (
                                    <Table.ColumnHeader
                                        key={h}
                                        fontWeight="semibold"
                                        color="gray.700"
                                        fontSize="sm"
                                        py={3}
                                        px={4}
                                        bg="blue.100"
                                    >
                                        {h}
                                    </Table.ColumnHeader>
                                ))}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {employees.map((emp, idx) => (
                                <Table.Row
                                    key={emp.id}
                                    _hover={{ bg: 'blue.25' }}
                                    transition="background-color 0.15s"
                                    borderBottom={idx === employees.length - 1 ? 'none' : '1px'}
                                    borderColor="gray.100"
                                >
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.serial}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.name}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.nickname}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.role}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.phone}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.email}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.dob}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">{emp.bloodGroup}</Table.Cell>
                                    <Table.Cell py={3} px={4} fontSize="sm">
                                        <Badge colorScheme={emp.status === 'Active' ? 'green' : 'red'}>
                                            {emp.status}
                                        </Badge>
                                    </Table.Cell>
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

/* mock data — replace with real records */
const employees = [
    {
        id: 1,
        serial: 1,
        name: 'motaleb Hossain',
        nickname: 'Motaleb',
        role: 'Branch Manager',
        phone: '01711‑123456',
        email: 'motaleb@example.com',
        dob: '1990‑05‑15',
        bloodGroup: 'A+',
        status: 'Active',
    },
    {
        id: 2,
        serial: 2,
        name: 'Sadia Karim',
        nickname: 'Sadia',
        role: 'Employee',
        phone: '01822‑987654',
        email: 'sadia@example.com',
        dob: '1995‑09‑20',
        bloodGroup: 'O+',
        status: 'Active',
    },
    {
        id: 3,
        serial: 3,
        name: 'Rafiq Ahmed',
        nickname: 'Rafiq',
        role: 'Employee',
        phone: '01933‑555555',
        email: 'rafiq@example.com',
        dob: '1992‑12‑03',
        bloodGroup: 'B‑',
        status: 'Inactive',
    },
];
