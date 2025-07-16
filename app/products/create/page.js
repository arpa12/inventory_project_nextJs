'use client';

import {
    Button,
    Field,
    Fieldset,
    For,
    Input,
    NativeSelect,
    Stack,
    Box,
    FileUpload,
    Checkbox,
    Flex, Textarea,
} from "@chakra-ui/react"
import DashboardLayout from "@/components/layout/DashboardLayout";
import { HiUpload } from "react-icons/hi"

export default function CategoryPage() {
    return (
        <DashboardLayout>
            <Box maxW="5xl" mx="auto" p={2} bg="gray.50" >
                <Fieldset.Root
                    size="sm"
                    maxW="6xl"
                    mx="auto"
                    bg="white"
                    p={3}
                    borderRadius="md"
                    boxShadow="sm"
                    border="1px solid"
                    borderColor="gray.200"
                >
                    <Stack spacing={1}>
                        <Fieldset.Legend
                            fontSize="lg"
                            fontWeight="bold"
                            color="gray.800"
                            textAlign="center"
                        >
                            Product Information
                        </Fieldset.Legend>
                        <Fieldset.HelperText
                            fontSize="xs"
                            color="gray.600"
                            textAlign="center"
                            mb={1}
                        >
                            Please provide your product details below.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content spacing={2} mt={2}>
                        <Flex gap={2} direction={{ base: "column", md: "row" }}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Product Name</Field.Label>
                                <Input
                                    name="name"
                                    placeholder="Enter product name"
                                    size="xs"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                    py={1}
                                    px={2}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Product Code / SKU</Field.Label>
                                <Input
                                    name="email"
                                    type="text"
                                    placeholder="Enter SKU/Code"
                                    size="xs"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                    py={1}
                                    px={2}
                                />
                            </Field.Root>
                        </Flex>

                        <Flex gap={2} direction={{ base: "column", md: "row" }}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Brand</Field.Label>
                                <NativeSelect.Root size="xs">
                                    <NativeSelect.Field
                                        name="Brand"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                        py={1}
                                        px={2}
                                    >
                                        <For each={["Select Brand", "Apple", "Samsung"]}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Category</Field.Label>
                                <NativeSelect.Root size="xs">
                                    <NativeSelect.Field
                                        name="Brand"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                        py={1}
                                        px={2}
                                    >
                                        <For each={["Select Category", "Electronics", "Grocery"]}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>
                        </Flex>

                        <FileUpload.Root>
                            <Field.Root>
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Product Image</Field.Label>
                            </Field.Root>
                            <FileUpload.HiddenInput />
                            <FileUpload.Trigger asChild>
                                <Button
                                    variant="outline"
                                    size="xs"
                                    w="full"
                                    h="6"
                                    borderStyle="dashed"
                                    borderWidth="1px"
                                    borderColor="blue.300"
                                    color="blue.600"
                                    fontSize="xs"
                                    _hover={{
                                        borderColor: "blue.500",
                                        bg: "blue.50"
                                    }}
                                    leftIcon={<HiUpload />}
                                    py={1}
                                    px={2}
                                >
                                    Upload Product Image
                                </Button>
                            </FileUpload.Trigger>
                            <FileUpload.List mt={1} />
                        </FileUpload.Root>

                        <Flex
                            gap={2}
                            direction={{ base: "column", sm: "row" }}
                            bg="gray.50"
                            p={2}
                            borderRadius="md"
                            flexWrap="wrap"
                        >
                            <Checkbox.Root>
                                <Checkbox.HiddenInput />
                                <Checkbox.Control colorScheme="blue" size="sm" />
                                <Checkbox.Label fontWeight="medium" fontSize="xs">Has Manufacturing/Expiry Date</Checkbox.Label>
                            </Checkbox.Root>
                            <Checkbox.Root>
                                <Checkbox.HiddenInput />
                                <Checkbox.Control colorScheme="blue" size="sm" />
                                <Checkbox.Label fontWeight="medium" fontSize="xs">Has Unique Code / IMEI</Checkbox.Label>
                            </Checkbox.Root>
                            <Checkbox.Root>
                                <Checkbox.HiddenInput />
                                <Checkbox.Control colorScheme="blue" size="sm" />
                                <Checkbox.Label fontWeight="medium" fontSize="xs">Is Archived</Checkbox.Label>
                            </Checkbox.Root>
                        </Flex>

                        <Field.Root>
                            <Field.Label
                                fontSize="sm"
                                fontWeight="semibold"
                                color="gray.700"
                                mb={0}
                            >
                                Product Details
                            </Field.Label>
                            <Textarea
                                placeholder="Enter detailed product description..."
                                size="xs"
                                borderRadius="md"
                                rows={1}
                                focusBorderColor="blue.500"
                                bg="gray.50"
                                _hover={{ bg: "white" }}
                                _focus={{ bg: "white" }}
                                resize="vertical"
                                py={1}
                                px={2}
                            />
                        </Field.Root>

                        <Stack direction={{ base: "column", lg: "row" }} gap={4} mt={2}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Purchase Price</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="0.00"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Purchase Unit</Field.Label>
                                <NativeSelect.Root size="md">
                                    <NativeSelect.Field
                                        size="xs"
                                        w="full"
                                        h="6"
                                        name="Brand"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                    >
                                        <For each={["Select Unit", "Kilogram", "Piece"]}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Sale Price</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="0.00"
                                    size="md"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Sale Unit</Field.Label>
                                <NativeSelect.Root size="md">
                                    <NativeSelect.Field
                                        size="xs"
                                        w="full"
                                        h="6"
                                        name="Brand"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                    >
                                        <For each={["Select Unit", "Kilogram", "Piece"]}>
                                            {(item) => (
                                                <option key={item} value={item}>
                                                    {item}
                                                </option>
                                            )}
                                        </For>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>
                        </Stack>

                        <Stack direction={{ base: "column", lg: "row" }} gap={4}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">VAT (%)</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="0"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Discount (%)</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="0"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Minimum Sale</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="1"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Stock Alert</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="name"
                                    type="number"
                                    placeholder="10"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>
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
                                Save Product
                            </Button>
                        </Flex>
                    </Fieldset.Content>
                </Fieldset.Root>
            </Box>
        </DashboardLayout>
    );
}