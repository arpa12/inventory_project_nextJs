'use client';

import {
    Box, Flex, Heading, Button, Table, Dialog, Portal, CloseButton, Field, Fieldset,
    Input, Stack, Icon, Group, NativeSelect, Textarea, Checkbox
} from "@chakra-ui/react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";

export default function CreatePermissionPage() {
    const [values, setValues] = useState(initialValues)
    const [permissionMatrix, setPermissionMatrix] = useState(initialPermissionMatrix)
    const [permissionsList, setPermissionsList] = useState(initialPermissionsList)
    const [newPermissionName, setNewPermissionName] = useState('')
    const [newPermissionDescription, setNewPermissionDescription] = useState('')

    const allChecked = values.every((value) => value.checked)
    const indeterminate = values.some((value) => value.checked) && !allChecked

    const isAllSelectedForAction = (action) => {
        return modules.every(module => permissionMatrix[action][module.key])
    }

    const isSomeSelectedForAction = (action) => {
        return modules.some(module => permissionMatrix[action][module.key])
    }

    const toggleAllForAction = (action, checked) => {
        setPermissionMatrix(prev => ({
            ...prev,
            [action]: modules.reduce((acc, module) => ({
                ...acc,
                [module.key]: checked
            }), {})
        }))
    }

    const toggleAllForModule = (moduleKey, checked) => {
        setPermissionMatrix(prev => {
            const newMatrix = { ...prev }
            permissionTypes.forEach(permission => {
                newMatrix[permission.key] = {
                    ...newMatrix[permission.key],
                    [moduleKey]: checked
                }
            })
            return newMatrix
        })
    }

    const isAllSelectedForModule = (moduleKey) => {
        return permissionTypes.every(permission => permissionMatrix[permission.key][moduleKey])
    }

    const isSomeSelectedForModule = (moduleKey) => {
        return permissionTypes.some(permission => permissionMatrix[permission.key][moduleKey])
    }

    const handlePermissionToggle = (action, moduleKey, checked) => {
        setPermissionMatrix(prev => ({
            ...prev,
            [action]: {
                ...prev[action],
                [moduleKey]: checked
            }
        }))
    }

    const handleSavePermission = () => {
        if (!newPermissionName.trim()) return

        const selectedPermissions = []
        permissionTypes.forEach(permission => {
            modules.forEach(module => {
                if (permissionMatrix[permission.key][module.key]) {
                    selectedPermissions.push(`${module.name} - ${permission.name}`)
                }
            })
        })

        const newPermission = {
            id: Date.now(),
            image: '🔐',
            name: newPermissionName,
            description: newPermissionDescription || selectedPermissions.join(', '),
            permissions: { ...permissionMatrix }
        }

        setPermissionsList(prev => [...prev, newPermission])
        setNewPermissionName('')
        setNewPermissionDescription('')
        setPermissionMatrix(initialPermissionMatrix)
    }

    const items = values.map((item, index) => (
        <Checkbox.Root
            ms="6"
            key={item.value}
            checked={item.checked}
            onCheckedChange={(e) => {
                setValues((current) => {
                    const newValues = [...current]
                    newValues[index] = { ...newValues[index], checked: !!e.checked }
                    return newValues
                })
            }}
        >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>{item.label}</Checkbox.Label>
        </Checkbox.Root>
    ))

    return (
        <DashboardLayout>
            <Box p={4} bg="gray.50">
                                    <Stack spacing={4}>
                                        <Flex gap={4} mt="15px">
                                            <Field.Root>
                                                <Field.Label>Select Role</Field.Label>
                                                <NativeSelect.Root>
                                                    <NativeSelect.Field>
                                                        <option value="1">Admin</option>
                                                        <option value="2">Branch Manager</option>
                                                        <option value="3">Warehouse Manager</option>
                                                        <option value="4">Shopkeeper</option>
                                                        <option value="5">Salesman</option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                </NativeSelect.Root>
                                            </Field.Root>
                                        </Flex>

                                        <Box>
                                            <Heading size="md" mb={4}>Assign Permissions</Heading>

                                            <Box
                                                bg="white"
                                                rounded="lg"
                                                shadow="sm"
                                                overflow="hidden"
                                                border="1px"
                                                borderColor="gray.200"
                                            >
                                                <Table.Root size="sm" variant="simple">
                                                    {/* TABLE HEADER */}
                                                    <Table.Header bg="gray.50">
                                                        <Table.Row>
                                                            <Table.ColumnHeader minW="140px">Modules</Table.ColumnHeader>

                                                            {permissionTypes.map((perm) => (
                                                                <Table.ColumnHeader key={perm.key} textAlign="center">
                                                                    <Stack align="center" spacing={1}>
                                                                        <Box>{perm.name}</Box>
                                                                        {/* column/permission ‘select‑all’ checkbox */}
                                                                        <Checkbox.Root
                                                                            size="sm"
                                                                            checked={
                                                                                isSomeSelectedForAction(perm.key)
                                                                                    ? isAllSelectedForAction(perm.key)
                                                                                        ? true
                                                                                        : 'indeterminate'
                                                                                    : false
                                                                            }
                                                                            onCheckedChange={(e) =>
                                                                                toggleAllForAction(perm.key, !!e.checked)
                                                                            }
                                                                        >
                                                                            <Checkbox.HiddenInput />
                                                                            <Checkbox.Control>
                                                                                <Checkbox.Indicator />
                                                                            </Checkbox.Control>
                                                                        </Checkbox.Root>
                                                                    </Stack>
                                                                </Table.ColumnHeader>
                                                            ))}
                                                        </Table.Row>
                                                    </Table.Header>

                                                    {/* TABLE BODY */}
                                                    <Table.Body>
                                                        {modules.map((module) => (
                                                            <Table.Row key={module.key}>
                                                                {/* module name + row select‑all */}
                                                                <Table.Cell minW="140px">
                                                                    <Flex align="center" gap={2}>
                                                                        <Checkbox.Root
                                                                            size="sm"
                                                                            checked={
                                                                                isSomeSelectedForModule(module.key)
                                                                                    ? isAllSelectedForModule(module.key)
                                                                                        ? true
                                                                                        : 'indeterminate'
                                                                                    : false
                                                                            }
                                                                            onCheckedChange={(e) =>
                                                                                toggleAllForModule(module.key, !!e.checked)
                                                                            }
                                                                        >
                                                                            <Checkbox.HiddenInput />
                                                                            <Checkbox.Control>
                                                                                <Checkbox.Indicator />
                                                                            </Checkbox.Control>
                                                                        </Checkbox.Root>
                                                                        <Box>{module.name}</Box>

                                                                    </Flex>
                                                                </Table.Cell>

                                                                {/* individual cells: module × permission */}
                                                                {permissionTypes.map((perm) => (
                                                                    <Table.Cell key={perm.key} textAlign="center">
                                                                        <Checkbox.Root
                                                                            size="sm"
                                                                            checked={permissionMatrix[perm.key][module.key]}
                                                                            onCheckedChange={(e) =>
                                                                                handlePermissionToggle(perm.key, module.key, !!e.checked)
                                                                            }
                                                                        >
                                                                            <Checkbox.HiddenInput />
                                                                            <Checkbox.Control>
                                                                                <Checkbox.Indicator />
                                                                            </Checkbox.Control>
                                                                        </Checkbox.Root>
                                                                    </Table.Cell>
                                                                ))}
                                                            </Table.Row>
                                                        ))}
                                                    </Table.Body>
                                                </Table.Root>
                                            </Box>
                                        </Box>
                                    </Stack>



                <Flex gap={2} mt={2} justify="flex-end" direction={{ base: "column", sm: "row" }}>
                    <Button
                        variant="outline"
                        size="xs"
                        colorScheme="gray"
                        flex={{ base: "1", sm: "initial" }}
                        minW="100px"
                        py={1}
                        px={2}
                    >
                        Save as Draft
                    </Button>
                    <Button
                        type="submit"
                        size="xs"
                        bg="cyan.700"
                        flex={{ base: "1", sm: "initial" }}
                        minW="100px"
                        py={1}
                        px={2}
                    >
                        Save Permission
                    </Button>
                </Flex>

            </Box>
        </DashboardLayout>
    );
}

/* Keep your original data exactly */
const initialValues = [
    { label: "Monday", checked: false, value: "monday" },
    { label: "Tuesday", checked: false, value: "tuesday" },
    { label: "Wednesday", checked: false, value: "wednesday" },
    { label: "Thursday", checked: false, value: "thursday" },
];

const modules = [
    { key: 'user', name: 'User' },
    { key: 'category', name: 'Category' },
    { key: 'unit', name: 'Unit' },
    { key: 'brand', name: 'Brand' },
    { key: 'products', name: 'All Products' },
    { key: 'purchase', name: 'Purchase' },
    { key: 'warehouse', name: 'Warehouse' },
    { key: 'branch', name: 'Branch' },
    { key: 'transfer', name: 'Stock Transfer' },


];

const permissionTypes = [
    { key: 'view', name: 'View' },
    { key: 'create', name: 'Create' },
    { key: 'edit', name: 'Edit' },
    { key: 'delete', name: 'Delete' }
];

const initialPermissionMatrix = {
    view: { user: false, product: false, order: false, report: false, settings: false },
    create: { user: false, product: false, order: false, report: false, settings: false },
    edit: { user: false, product: false, order: false, report: false, settings: false },
    delete: { user: false, product: false, order: false, report: false, settings: false }
};

const initialPermissionsList = [];
