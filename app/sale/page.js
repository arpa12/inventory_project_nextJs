'use client';

import {
    Box, Heading, Table, Field, NativeSelect, Input, Group, Button, Icon,
    Stack, Textarea, Grid, Text, Flex, InputGroup
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useRef } from "react";
import { FaPlus, FaPrint, FaSearch } from "react-icons/fa";

export default function Sale() {
    const [scannedProducts, setScannedProducts] = useState([
        { id: 1, sl: 1, barcode: "10012916", itemName: "FRESH PREMIUM MASALA TEA 250BAG 50G", qty: 1.0, rate: 85.00, vat: 0.00, discount: 0.0, amount: 85.00 },
        { id: 2, sl: 2, barcode: "10011160", itemName: "TOKA BIKA CAPPUCCINO 25G ID", qty: 1.0, rate: 50.00, vat: 0.00, discount: 0.0, amount: 50.00 },
        { id: 3, sl: 3, barcode: "10012916", itemName: "FRESH PREMIUM MASALA TEA 250BAG 50G", qty: 1.0, rate: 85.00, vat: 0.00, discount: 0.0, amount: 85.00 },
        { id: 4, sl: 4, barcode: "10011160", itemName: "TOKA BIKA CAPPUCCINO 25G ID", qty: 1.0, rate: 50.00, vat: 0.00, discount: 0.0, amount: 50.00 },
        { id: 5, sl: 5, barcode: "10012916", itemName: "FRESH PREMIUM MASALA TEA 250BAG 50G", qty: 1.0, rate: 85.00, vat: 0.00, discount: 0.0, amount: 85.00 },
        { id: 6, sl: 6, barcode: "10011160", itemName: "TOKA BIKA CAPPUCCINO 25G ID", qty: 1.0, rate: 50.00, vat: 0.00, discount: 0.0, amount: 50.00 }
    ]);

    const [paymentMethods, setPaymentMethods] = useState([{ id: 1, method: "1", amount: "" }]);
    const [customerInfo, setCustomerInfo] = useState("");
    const [barcodeInput, setBarcodeInput] = useState("");
    const [specialDiscount, setSpecialDiscount] = useState("0");
    const [invoiceNotes, setInvoiceNotes] = useState("");

    const paidAmountRef = useRef(null);


    const productDatabase = {
        "10012916": { name: "FRESH PREMIUM MASALA TEA 250BAG 50G", rate: 85.00 },
        "10011160": { name: "TOKA BIKA CAPPUCCINO 25G ID", rate: 50.00 },
        "10011170": { name: "NESCAFE CLASSIC COFFEE 50G", rate: 120.00 },
        "10011180": { name: "LIPTON GREEN TEA 25 BAGS", rate: 95.00 }
    };

    const calculateTotals = () => {
        const totalBill = scannedProducts.reduce((sum, item) => sum + item.amount, 0);
        const totalvat = scannedProducts.reduce((sum, item) => sum + item.vat, 0);
        const totalDiscount = scannedProducts.reduce((sum, item) => sum + (item.amount * item.discount / 100), 0);
        const totalAmount = totalBill - totalDiscount + totalvat;
        const paidAmount = paymentMethods.reduce((sum, payment) => sum + (parseFloat(payment.amount) || 0), 0);
        const change = paidAmount - totalAmount;
        return { totalBill, totalvat, totalDiscount, totalAmount, paidAmount, change };
    };

    const handleBarcodeScan = (e) => {
        if (e.key === 'Enter' && barcodeInput.trim()) {
            const product = productDatabase[barcodeInput.trim()];
            if (product) {
                const existingIndex = scannedProducts.findIndex(p => p.barcode === barcodeInput.trim());
                if (existingIndex > -1) {
                    setScannedProducts(prev => prev.map((item, i) =>
                        i === existingIndex
                            ? { ...item, qty: item.qty + 1, amount: (item.qty + 1) * item.rate }
                            : item
                    ));
                } else {
                    const newProduct = {
                        id: Date.now(),
                        sl: scannedProducts.length + 1,
                        barcode: barcodeInput.trim(),
                        itemName: product.name,
                        qty: 1.0,
                        rate: product.rate,
                        vat: 0.00,
                        discount: 0.0,
                        amount: product.rate
                    };
                    setScannedProducts(prev => [...prev, newProduct]);
                }
            }
            setBarcodeInput("");
        }
    };

    const updateQuantity = (id, newQty) => {
        if (newQty <= 0) return removeProduct(id);
        setScannedProducts(prev => prev.map(item =>
            item.id === id ? { ...item, qty: newQty, amount: newQty * item.rate } : item
        ));
    };

    const removeProduct = (id) => {
        setScannedProducts(prev => prev.filter(item => item.id !== id));
    };

    const handlePaymentMethodChange = (paymentId, field, value) => {
        setPaymentMethods(prev => prev.map(payment =>
            payment.id === paymentId ? { ...payment, [field]: value } : payment
        ));
    };

    const totals = calculateTotals();

    return (
        <Box p={{ base: 2, md: 4 }} bg="gray.50" minH="100vh" overflowX="hidden">
            <Flex direction={{ base: "column", md: "row" }} gap={4}>
                {/* Left Panel */}
                <Box flex="1" bg="white" rounded="md" shadow="sm" p={2}>
                    {/* Top Input Row */}
                    <Flex gap={4} wrap="wrap" align="flex-end" mb={4}>
                        {/* Barcode Input */}
                        <Box flex="1" minW="200px">
                            <Text fontSize="sm" fontWeight="medium" mb={1}>Barcode:</Text>
                            <InputGroup size="sm">
                                <Input
                                    value={barcodeInput}
                                    onChange={(e) => setBarcodeInput(e.target.value)}
                                    onKeyPress={handleBarcodeScan}
                                    placeholder="Scan barcode..."
                                />
                            </InputGroup>
                            <Text fontSize="xs" color="gray.600" mt={1}>Stock: 9999</Text>
                        </Box>

                        {/* Customer Search */}
                        <Box w="180px">
                            <Text fontSize="sm" fontWeight="medium" mb={1}>Customer:</Text>
                            <InputGroup size="sm">
                                <Input
                                    mb={6}
                                    value={customerInfo}
                                    onChange={(e) => setCustomerInfo(e.target.value)}
                                    placeholder="Search..."
                                />
                            </InputGroup>
                        </Box>

                        {/* Customer Name */}
                        <Box w="160px">
                            <Text fontSize="sm" fontWeight="medium" mb={1}>Name</Text>
                            <Text fontSize="sm" color="gray.800" border="1px solid #E2E8F0" px={2} py={1} rounded="md" bg="gray.50"  mb={6}>
                                {customerInfo || "N/A"}
                            </Text>
                        </Box>

                        {/* Customer Points */}
                        <Box w="120px">
                            <Text fontSize="sm" fontWeight="medium" mb={1}>Points</Text>
                            <Text fontSize="sm" color="gray.800" border="1px solid #E2E8F0" px={2} py={1} rounded="md" bg="gray.50"  mb={6}>
                                {customerInfo ? 120 : 0}
                            </Text>
                        </Box>
                    </Flex>


                    {/* Product Table */}
                    <Box border="1px" borderColor="gray.200" rounded="md" overflow="auto" h="60vh">
                        <Table.Root size="sm">
                            <Table.Header bg="blue.100">
                                <Table.Row>
                                    {["SL", "Barcode", "Item", "Qty", "Rate", "VAT", "Disc", "Amount", "Act"].map(h => (
                                        <Table.ColumnHeader fontSize="sm" py={1} px={1} textAlign="center" key={h}>{h}</Table.ColumnHeader>
                                    ))}
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {scannedProducts.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.Cell textAlign="center" fontSize="sm">{item.sl}</Table.Cell>
                                        <Table.Cell textAlign="center" fontSize="sm">{item.barcode}</Table.Cell>
                                        <Table.Cell fontSize="sm" isTruncated>{item.itemName}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Flex align="center" justify="center" gap={1}>
                                                <Button size="xs" onClick={() => updateQuantity(item.id, item.qty - 1)}>-</Button>
                                                <Field.Root>
                                                    <Input
                                                        size="xs"
                                                        type="number"
                                                        value={item.qty.toFixed(1)}
                                                        textAlign="center"
                                                        w="50px"
                                                    />
                                                </Field.Root>
                                                <Button size="xs" onClick={() => updateQuantity(item.id, item.qty + 1)}>+</Button>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell textAlign="center" fontSize="sm">{item.rate.toFixed(2)}</Table.Cell>
                                        <Table.Cell textAlign="center" fontSize="sm">{item.vat.toFixed(2)}</Table.Cell>
                                        <Table.Cell textAlign="center" fontSize="sm">{item.discount.toFixed(1)}</Table.Cell>
                                        <Table.Cell textAlign="center" fontWeight="medium" fontSize="sm">{item.amount.toFixed(2)}</Table.Cell>
                                        <Table.Cell textAlign="center">
                                            <Button size="xs" variant="outline" color="red.600" onClick={() => removeProduct(item.id)}>
                                                <Icon as={RiDeleteBin6Line} fontSize="md" />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </Box>
                </Box>

                {/* Right Panel */}
                <Box w={{ base: "100%", md: "400px" }} bg="white" rounded="md" shadow="sm" p={2}>
                    <Stack spacing={2}>
                        <Flex gap={2}>
                            {/* Paid Amount */}
                            <Box
                                flex="1"
                                bg="blue.600"
                                color="white"
                                p={2}
                                rounded="md"
                                cursor="pointer"
                                onClick={() => paidAmountRef.current?.focus()}
                            >
                                <Text fontSize="sm" fontWeight="medium">Paid Amount</Text>
                                <Input
                                    ref={paidAmountRef}
                                    mt={1}
                                    size="sm"
                                    placeholder="Enter amount"
                                    fontSize="sm"
                                    color="white"
                                    borderColor="whiteAlpha.500"
                                    _placeholder={{ color: "whiteAlpha.700" }}
                                    _focus={{ borderColor: "white", bg: "blue.500" }}
                                    value={paymentMethods[0]?.amount}
                                    onChange={(e) => handlePaymentMethodChange(paymentMethods[0]?.id, 'amount', e.target.value)}
                                />
                            </Box>

                            {/* Change */}
                            <Box flex="1" bg="pink.500" color="white" p={2} rounded="md">
                                <Text fontSize="sm" fontWeight="medium">Change</Text>
                                <Text fontSize="lg" fontWeight="bold">{totals.change.toFixed(2)}</Text>
                            </Box>
                        </Flex>


                        <Flex align="center" gap={4} mb={2}>
                            <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
                                Discount (%):
                            </Text>
                            <NativeSelect.Root value={specialDiscount} onValueChange={(e) => setSpecialDiscount(e.value)}>
                                <NativeSelect.Field size="sm" w="160px">
                                    <option value="0">None</option>
                                    <option value="5">5%</option>
                                    <option value="10">10%</option>
                                </NativeSelect.Field>
                            </NativeSelect.Root>
                        </Flex>

                        <Box bg="gray.100" p={2} rounded="md">
                            <Stack spacing={1}>
                                {[["Total Bill", totals.totalBill], ["Total VAT", totals.totalvat], ["Total Discount", totals.totalDiscount], ["Other Discount", 0.00]].map(([label, val], i) => (
                                    <Flex justify="space-between" fontSize="sm" key={i}>
                                        <Text>{label}</Text>
                                        <Text>{(+val).toFixed(2)}</Text>
                                    </Flex>
                                ))}
                                <Flex justify="space-between" fontWeight="bold" bg="gray.200" p={1} rounded>
                                    <Text>Total Amount</Text>
                                    <Text>{totals.totalAmount.toFixed(0)}</Text>
                                </Flex>
                            </Stack>
                        </Box>
                        <Flex justify="space-between" align="center">
                            <Text fontSize="sm" w="200px">Cash Amount</Text>
                            <Field.Root>
                                <Input
                                    ref={paidAmountRef}
                                    mt={1}
                                    size="sm"
                                    placeholder="Enter amount"
                                    fontSize="sm"
                                    _placeholder={{ color: "gray.700" }}
                                    _focus={{ borderColor: "white", bg: "gray.200" }}
                                    value={paymentMethods[0]?.amount}
                                    onChange={(e) => handlePaymentMethodChange(paymentMethods[0]?.id, 'amount', e.target.value)}
                                />
                            </Field.Root>
                        </Flex>
                        <Box>
                            <Flex gap={3} >
                                <NativeSelect.Root value={paymentMethods[0]?.method} onValueChange={(e) => handlePaymentMethodChange(paymentMethods[0]?.id, 'method', e.value)}>
                                    <NativeSelect.Field size="sm" w="200px">
                                        <option value="1">Payment Type</option>
                                        <option value="2">Cash</option>
                                        <option value="3">Card</option>
                                        <option value="4">Mobile</option>
                                    </NativeSelect.Field>
                                </NativeSelect.Root>
                                <Input
                                    size="sm"
                                    w="200px"
                                    type="number"
                                    value={paymentMethods[0]?.amount}
                                    onChange={(e) => handlePaymentMethodChange(paymentMethods[0]?.id, 'amount', e.target.value)}
                                    placeholder="0.00" />
                            </Flex>

                            <Box>
                                <Text fontWeight="medium" mb={1}>Invoice Notes</Text>
                                <Textarea size="sm" h="20px" value={invoiceNotes} onChange={(e) => setInvoiceNotes(e.target.value)} />
                            </Box>
                        </Box>

                    </Stack>
                </Box>
            </Flex>

            <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" mt={4} bg="blue.900" color="white" p={2} rounded="md" gap={2}>
                <Flex gap={2} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                    {["Hold (F9)", "Recall (F10)", "Exchange (F5)", "Return", "Lock Session"].map((text, i) => (
                        <Button key={i} size="sm" bg="blue.700" _hover={{ bg: "blue.600" }} fontSize="sm">{text}</Button>
                    ))}
                </Flex>
                <Button size="md" bg="green.600" _hover={{ bg: "green.500" }} fontWeight="bold">
                    <Icon as={FaPrint} mr={1} />
                    Print {totals.totalAmount.toFixed(0)}
                </Button>
            </Flex>
        </Box>
    );
}
