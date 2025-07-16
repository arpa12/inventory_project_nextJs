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
    Checkbox,
    Flex, Textarea,
} from "@chakra-ui/react"
import DashboardLayout from "@/components/layout/DashboardLayout";

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
                            Employee Information
                        </Fieldset.Legend>
                        <Fieldset.HelperText
                            fontSize="xs"
                            color="gray.600"
                            textAlign="center"
                            mb={1}
                        >
                            Please provide your information  below.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content spacing={2} mt={2}>
                        <Flex gap={2} direction={{ base: "column", md: "row" }}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Name</Field.Label>
                                <Input
                                    name="name"
                                    placeholder="Enter Your name"
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Nickname</Field.Label>
                                <Input
                                    name="nickname"
                                    type="text"
                                    placeholder="Enter Your Nickname"
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Role</Field.Label>
                                <NativeSelect.Root size="xs">
                                    <NativeSelect.Field
                                        name="role"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                        py={1}
                                        px={2}
                                    >
                                        <option value="">Select Your Role</option>
                                        <option value="branch_manager">Branch Manager</option>
                                        <option value="employee">Employee</option>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>
                            </Field.Root>
                        </Flex>

                        <Flex gap={2} direction={{ base: "column", md: "row" }}>
                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Phone</Field.Label>
                                <Input
                                    name="phone"
                                    type="tel"
                                    placeholder="Enter Phone Number"
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Email</Field.Label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email Address"
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Date of Birth</Field.Label>
                                <Input
                                    name="dob"
                                    type="date"
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Blood Group</Field.Label>
                                <NativeSelect.Root size="xs">
                                    <NativeSelect.Field
                                        name="bloodGroup"
                                        bg="gray.50"
                                        _hover={{ bg: "white" }}
                                        _focus={{ bg: "white" }}
                                        focusBorderColor="blue.500"
                                        py={1}
                                        px={2}
                                    >
                                        <For each={["Select Blood Group", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}>
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

                        <Field.Root>
                            <Field.Label fontWeight="semibold" color="gray.700" mb={0} fontSize="sm">Emergency Contact</Field.Label>
                            <Input
                                name="emergencyContact"
                                type="tel"
                                placeholder="Enter Emergency Contact Number"
                                size="xs"
                                focusBorderColor="blue.500"
                                bg="gray.50"
                                _hover={{ bg: "white" }}
                                _focus={{ bg: "white" }}
                                py={1}
                                px={2}
                            />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label
                                fontSize="sm"
                                fontWeight="semibold"
                                color="gray.700"
                                mb={0}
                            >
                                Address
                            </Field.Label>
                            <Textarea
                                name="address"
                                placeholder="Enter complete address..."
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
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Bank Name</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="bankName"
                                    type="text"
                                    placeholder="Enter Bank Name"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Branch</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="branch"
                                    type="text"
                                    placeholder="Enter Branch Name"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>

                            <Field.Root flex="1">
                                <Field.Label fontWeight="semibold" color="gray.700" mb={1} fontSize="sm">Account Number</Field.Label>
                                <Input
                                    size="xs"
                                    w="full"
                                    h="6"
                                    name="accountNumber"
                                    type="text"
                                    placeholder="Enter Account Number"
                                    focusBorderColor="blue.500"
                                    bg="gray.50"
                                    _hover={{ bg: "white" }}
                                    _focus={{ bg: "white" }}
                                />
                            </Field.Root>
                        </Stack>

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
                                <Checkbox.Label fontWeight="medium" fontSize="xs">Is Archived</Checkbox.Label>
                            </Checkbox.Root>
                        </Flex>

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
                                Save Employee
                            </Button>
                        </Flex>
                    </Fieldset.Content>
                </Fieldset.Root>
            </Box>
        </DashboardLayout>
    );
}