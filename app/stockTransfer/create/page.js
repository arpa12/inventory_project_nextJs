'use client';

import {Box, Heading, Table, Field, NativeSelect, Input, Group, Button, CloseButton, Dialog, Portal, Icon, Fieldset, Stack, Textarea, Grid, Text, Flex } from "@chakra-ui/react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import {FaPlus} from "react-icons/fa";

export default function CategoryPage() {
    // State for form data - array of rows
    const [rows, setRows] = useState([{
        id: 1,
        item: "",
        batchNo: "",
        quantity: "",
        unit: "1", // pcs
        expiryDate: "",
        rate: "",
        discount: "",
        discountType: "1", // %
        vat: "",
        vatType: "1" // %
    }]);

    // Payment methods state - array of payment method rows
    const [paymentMethods, setPaymentMethods] = useState([{
        id: 1,
        method: "1", // Cash
        amount: ""
    }]);

    // Additional charges state
    const [additionalCharges, setAdditionalCharges] = useState({
        discount: 10,
        vat: 5,
        shipping: 5,
        labour: 5,
        other: 5
    });

    // Temporary state for dialog inputs
    const [tempDiscount, setTempDiscount] = useState("");
    const [tempDiscountType, setTempDiscountType] = useState("1");
    const [tempVat, setTempVat] = useState("");
    const [tempVatType, setTempVatType] = useState("1");
    const [activeRowId, setActiveRowId] = useState(null);

    // Calculate total for a specific row
    const calculateTotal = (row) => {
        const qty = parseFloat(row.quantity) || 0;
        const rate = parseFloat(row.rate) || 0;
        const discount = parseFloat(row.discount) || 0;
        const vat = parseFloat(row.vat) || 0;

        const subtotal = qty * rate;

        // Calculate discount
        let discountAmount = 0;
        if (row.discountType === "1") { // percentage
            discountAmount = (subtotal * discount) / 100;
        } else { // fixed amount
            discountAmount = discount;
        }

        const afterDiscount = subtotal - discountAmount;

        // Calculate VAT
        let vatAmount = 0;
        if (row.vatType === "1") { // percentage
            vatAmount = (afterDiscount * vat) / 100;
        } else { // fixed amount
            vatAmount = vat;
        }

        return afterDiscount + vatAmount;
    };

    // Calculate grand total
    const calculateGrandTotal = () => {
        const itemsTotal = rows.reduce((sum, row) => sum + calculateTotal(row), 0);
        return itemsTotal + additionalCharges.shipping + additionalCharges.labour + additionalCharges.other;
    };

    // Handle input changes
    const handleInputChange = (rowId, field, value) => {
        setRows(prev => prev.map(row =>
            row.id === rowId ? { ...row, [field]: value } : row
        ));
    };

    // Handle payment method input changes
    const handlePaymentMethodChange = (paymentId, field, value) => {
        setPaymentMethods(prev => prev.map(payment =>
            payment.id === paymentId ? { ...payment, [field]: value } : payment
        ));
    };

    // Add new row
    const addNewRow = () => {
        const newRow = {
            id: Date.now(), // Simple ID generation
            item: "",
            batchNo: "",
            quantity: "",
            unit: "1",
            expiryDate: "",
            rate: "",
            discount: "",
            discountType: "1",
            vat: "",
            vatType: "1"
        };
        setRows(prev => [...prev, newRow]);
    };

    // Add new payment method
    const addNewPaymentMethod = () => {
        const newPaymentMethod = {
            id: Date.now(), // Simple ID generation
            method: "1", // Cash
            amount: ""
        };
        setPaymentMethods(prev => [...prev, newPaymentMethod]);
    };

    // Remove specific row
    const removeRow = (rowId) => {
        // Don't allow removing the last remaining row
        if (rows.length > 1) {
            setRows(prev => prev.filter(row => row.id !== rowId));
        }
    };

    // Remove specific payment method
    const removePaymentMethod = (paymentId) => {
        // Don't allow removing the last remaining payment method
        if (paymentMethods.length > 1) {
            setPaymentMethods(prev => prev.filter(payment => payment.id !== paymentId));
        }
    };

    // Handle discount save
    const handleDiscountSave = () => {
        setRows(prev => prev.map(row =>
            row.id === activeRowId ? {
                ...row,
                discount: tempDiscount,
                discountType: tempDiscountType
            } : row
        ));
    };

    // Handle VAT save
    const handleVatSave = () => {
        setRows(prev => prev.map(row =>
            row.id === activeRowId ? {
                ...row,
                vat: tempVat,
                vatType: tempVatType
            } : row
        ));
    };

    return (
        <DashboardLayout>

            <Box p={4} bg="gray.50">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={6}>
                    <Box>
                        <Heading size="lg" color="gray.900" fontWeight="bold">
                            Item Information
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
                                Stock Transfer
                            </Button>
                        </Dialog.Trigger>

                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                                <Dialog.Content maxW="md">
                                    <Dialog.Header pb={2}>
                                        <Dialog.Title fontSize="lg" fontWeight="semibold">
                                            Create New Stock Transfer
                                        </Dialog.Title>
                                    </Dialog.Header>

                                    <Dialog.Body py={4}>
                                        <Fieldset.Root size="md" maxW="full">
                                            <Fieldset.Content>
                                                <Stack spacing={4}>
                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">
                                                            Date * <Field.RequiredIndicator />
                                                        </Field.Label>
                                                        <Input
                                                            name="name"
                                                            type="date"
                                                            placeholder="Enter Unit Name"
                                                            size="md"
                                                            borderRadius="md"
                                                        />
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Field.Label>From *</Field.Label>
                                                        <NativeSelect.Root>
                                                            <NativeSelect.Field>
                                                                <option value="1">Select Warehouse/Branch</option>
                                                                <option value="2">Ahmed LLC</option>

                                                            </NativeSelect.Field>
                                                            <NativeSelect.Indicator />
                                                        </NativeSelect.Root>
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Field.Label>To *</Field.Label>
                                                        <NativeSelect.Root>
                                                            <NativeSelect.Field>
                                                                <option value="1">Select Warehouse/Branch</option>
                                                                <option value="2">Ahmed LLC</option>

                                                            </NativeSelect.Field>
                                                            <NativeSelect.Indicator />
                                                        </NativeSelect.Root>
                                                    </Field.Root>



                                                    <Field.Root>
                                                        <Field.Label fontSize="sm" fontWeight="medium">Comment</Field.Label>
                                                        <Textarea
                                                            placeholder="Write Comment (if any) "
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

                <Grid>
                    {/* Main Table Section */}
                    <Box>
                        <Table.Root size="lg">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader textAlign="center" p={1}>Item</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Batch No</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Quantity</Table.ColumnHeader>
                                    {/*<Table.ColumnHeader textAlign="center" p={1}>Expiry Date</Table.ColumnHeader>*/}
                                    <Table.ColumnHeader textAlign="center" p={1}>Rate</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Discount</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Vat</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Total</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="center" p={1}>Action</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {rows.map((row, index) => (
                                    <Table.Row key={row.id}>
                                        <Table.Cell textAlign="center" p={1}>
                                            <Field.Root>
                                                <NativeSelect.Root value={row.item} onValueChange={(e) => handleInputChange(row.id, 'item', e.value)}>
                                                    <NativeSelect.Field width="220px" size="sm">
                                                        <option value="">Select Item</option>
                                                        <option value="item1">Item 1</option>
                                                        <option value="item2">Item 2</option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                </NativeSelect.Root>
                                            </Field.Root>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            <Field.Root>
                                                <NativeSelect.Root value={row.item} onValueChange={(e) => handleInputChange(row.id, 'item', e.value)}>
                                                    <NativeSelect.Field width="220px" size="sm">
                                                        <option value="">Select Batch</option>
                                                        <option value="item1">Batch 1</option>
                                                        <option value="item2">Batch 2</option>
                                                    </NativeSelect.Field>
                                                    <NativeSelect.Indicator />
                                                </NativeSelect.Root>
                                            </Field.Root>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            <Group gap={1}>
                                                <Field.Root>
                                                    <Input
                                                        type="number"
                                                        name="quantity"
                                                        placeholder="Qty"
                                                        size="xs"
                                                        borderRadius="md"
                                                        value={row.quantity}
                                                        onChange={(e) => handleInputChange(row.id, 'quantity', e.target.value)}
                                                        textAlign="center"
                                                        width="60px"
                                                    />
                                                </Field.Root>

                                                <Field.Root>
                                                    <NativeSelect.Root value={row.unit} onValueChange={(e) => handleInputChange(row.id, 'unit', e.value)}>
                                                        <NativeSelect.Field size="xs" width="50px">
                                                            <option value="1">pcs</option>
                                                            <option value="2">kg</option>
                                                            <option value="3">ltr</option>
                                                        </NativeSelect.Field>
                                                        <NativeSelect.Indicator />
                                                    </NativeSelect.Root>
                                                </Field.Root>
                                            </Group>
                                        </Table.Cell>

                                        {/*<Table.Cell textAlign="center" p={1}>*/}
                                        {/*    <Field.Root>*/}
                                        {/*        <Input*/}
                                        {/*            placeholder="Expiry Date"*/}
                                        {/*            type="date"*/}
                                        {/*            value={row.expiryDate}*/}
                                        {/*            onChange={(e) => handleInputChange(row.id, 'expiryDate', e.target.value)}*/}
                                        {/*            textAlign="center"*/}
                                        {/*            size="xs"*/}
                                        {/*        />*/}
                                        {/*    </Field.Root>*/}
                                        {/*</Table.Cell>*/}

                                        <Table.Cell textAlign="center" p={1}>
                                            <Field.Root>
                                                <Input
                                                    placeholder="Rate"
                                                    type="number"
                                                    value={row.rate}
                                                    onChange={(e) => handleInputChange(row.id, 'rate', e.target.value)}
                                                    textAlign="center"
                                                    size="xs"
                                                    width="70px"
                                                />

                                            </Field.Root>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            <Group gap={1}>
                                                <Field.Root>
                                                    <Input
                                                        type="number"
                                                        name="discount"
                                                        placeholder="Discount"
                                                        size="xs"
                                                        borderRadius="md"
                                                        value={row.discount}
                                                        onChange={(e) => handleInputChange(row.id, 'discount', e.target.value)}
                                                        textAlign="center"
                                                        width="60px"
                                                    />
                                                </Field.Root>

                                                <Field.Root>
                                                    <NativeSelect.Root value={row.discountType} onValueChange={(e) => handleInputChange(row.id, 'discountType', e.value)}>
                                                        <NativeSelect.Field size="xs" width="50px">
                                                            <option value="1">%</option>
                                                            <option value="2">BDT</option>
                                                        </NativeSelect.Field>
                                                        <NativeSelect.Indicator />
                                                    </NativeSelect.Root>
                                                </Field.Root>
                                            </Group>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            <Group gap={1}>
                                                <Field.Root>
                                                    <Input
                                                        type="number"
                                                        name="vat"
                                                        placeholder="VAT"
                                                        size="xs"
                                                        borderRadius="md"
                                                        value={row.vat}
                                                        onChange={(e) => handleInputChange(row.id, 'vat', e.target.value)}
                                                        textAlign="center"
                                                        width="60px"
                                                    />
                                                </Field.Root>

                                                <Field.Root>
                                                    <NativeSelect.Root value={row.vatType} onValueChange={(e) => handleInputChange(row.id, 'vatType', e.value)}>
                                                        <NativeSelect.Field size="xs" width="50px">
                                                            <option value="1">%</option>
                                                            <option value="2">BDT</option>
                                                        </NativeSelect.Field>
                                                        <NativeSelect.Indicator />
                                                    </NativeSelect.Root>
                                                </Field.Root>
                                            </Group>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            <Box fontWeight="semibold" color="green.600" fontSize="sm">
                                                {calculateTotal(row).toFixed(2)}
                                            </Box>
                                        </Table.Cell>

                                        <Table.Cell textAlign="center" p={1}>
                                            {/* Show + button for last row, - button for others when multiple rows exist */}
                                            {rows.length === 1 || index === rows.length - 1 ? (
                                                <Button
                                                    size="xs"
                                                    bg="green.700"
                                                    fontSize="xs"
                                                    onClick={addNewRow}
                                                >
                                                    <Icon fontSize="sm">
                                                        <IoIosAddCircle />
                                                    </Icon>
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="xs"
                                                    bg="red.700"
                                                    fontSize="xs"
                                                    onClick={() => removeRow(row.id)}
                                                >
                                                    <Icon fontSize="sm">
                                                        <RiDeleteBin6Line />
                                                    </Icon>
                                                </Button>
                                            )}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>

                        <Flex gap="2" mt={2}>
                            {/* Payment Method Section */}
                            <Box flex={1}>
                                <Text fontWeight="bold" mb={2} fontSize="sm">Payment Method</Text>
                                <Box>
                                    <Box p={2} borderWidth={1} borderRadius="md" bg="gray.50">
                                        <Stack spacing={2}>
                                            {paymentMethods.map((payment, index) => (
                                                <Group key={payment.id} gap={2}>
                                                    <Field.Root>
                                                        <NativeSelect.Root
                                                            value={payment.method}
                                                            onValueChange={(e) => handlePaymentMethodChange(payment.id, 'method', e.value)}
                                                        >
                                                            <NativeSelect.Field size="xs">
                                                                <option value="1">Cash</option>
                                                                <option value="2">DBBL</option>
                                                                <option value="3">Bkash</option>
                                                            </NativeSelect.Field>
                                                            <NativeSelect.Indicator />
                                                        </NativeSelect.Root>
                                                    </Field.Root>

                                                    <Field.Root>
                                                        <Input
                                                            placeholder="Amount"
                                                            type="number"
                                                            size="xs"
                                                            value={payment.amount}
                                                            onChange={(e) => handlePaymentMethodChange(payment.id, 'amount', e.target.value)}
                                                        />
                                                    </Field.Root>

                                                    {/* Show + button for last payment method, - button for others when multiple exist */}
                                                    {paymentMethods.length === 1 || index === paymentMethods.length - 1 ? (
                                                        <Button
                                                            size="xs"
                                                            bg="green.700"
                                                            fontSize="xs"
                                                            onClick={addNewPaymentMethod}
                                                        >
                                                            <Icon fontSize="sm">
                                                                <IoIosAddCircle />
                                                            </Icon>
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            size="xs"
                                                            bg="red.700"
                                                            fontSize="xs"
                                                            onClick={() => removePaymentMethod(payment.id)}
                                                        >
                                                            <Icon fontSize="sm">
                                                                <RiDeleteBin6Line />
                                                            </Icon>
                                                        </Button>
                                                    )}
                                                </Group>
                                            ))}
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Summary Section */}
                            <Box flex={1}>
                                <Box borderWidth={1} borderRadius="md" p={2}>
                                    <Stack spacing={1}>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Total</Text>
                                            <Text fontWeight="bold" fontSize="sm">{calculateGrandTotal().toFixed(2)}</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Discount</Text>
                                            <Text fontSize="sm">{additionalCharges.discount}</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Vat</Text>
                                            <Text fontSize="sm">{additionalCharges.vat}</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Shipping Charge</Text>
                                            <Text fontSize="sm">{additionalCharges.shipping}</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Labour Cost</Text>
                                            <Text fontSize="sm">{additionalCharges.labour}</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Other Charges</Text>
                                            <Text fontSize="sm">{additionalCharges.other}</Text>
                                        </Flex>
                                        <Box borderTopWidth={1} pt={1}>
                                            <Flex justify="space-between">
                                                <Text fontWeight="bold" fontSize="sm">Subtotal</Text>
                                                <Text fontWeight="bold" fontSize="sm">{calculateGrandTotal().toFixed(2)}</Text>
                                            </Flex>
                                        </Box>
                                        <Flex justify="space-between">
                                            <Text fontSize="sm">Paid Amount</Text>
                                            <Text fontSize="sm">5</Text>
                                        </Flex>
                                        <Flex justify="space-between">
                                            <Text fontWeight="bold" fontSize="sm">Due Amount</Text>
                                            <Text fontWeight="bold" fontSize="sm">5</Text>
                                        </Flex>
                                    </Stack>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Grid>

            </Box>

        </DashboardLayout>
    );
}