'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Accordion, Span, Link, VStack } from '@chakra-ui/react';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <Box w="55" bg="cyan.700" color="white" minH="100vh" >
            <Box p={6} fontSize="2xl" fontWeight="bold" borderBottom="1px" borderColor="gray.700">
                Dashboard
            </Box>

            <Accordion.Root collapsible defaultValue={[]}>
                {items.map((item, index) => (
                    <Accordion.Item key={index} value={item.value}>
                        <Accordion.ItemTrigger px={4} py={2} _hover={{ bg: 'cyan.600' }} bg={item.active(pathname) ? 'cyan.600' : undefined}>
                            <Span flex="1">{item.title}</Span>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>

                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <VStack align="stretch" pl={4} spacing={1}>
                                    {item.links.map((link) => (
                                        <Link
                                            as={NextLink}
                                            key={link.href}
                                            href={link.href}
                                            px={4}
                                            py={2}
                                            rounded="md"
                                            fontSize="sm"
                                            bg={pathname === link.href ? 'cyan.700' : undefined}
                                            _hover={{ bg: 'cyan.600' }}
                                            w="full"
                                            textAlign="left"
                                            color="white"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </VStack>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </Box>
    );
};

export default Sidebar;

const items = [
    {
        value: 'employee',
        title: 'Employee Management',
        active: (path) => ['/employee', '/role', '/permission'].includes(path),
        links: [
            { href: '/employee', label: 'Employee' },
            { href: '/role', label: 'Role' },
            { href: '/permission', label: 'Permission' },
        ],
    },

    {
        value: 'products',
        title: 'Products',
        active: (path) => ['/products', '/category', '/unit', '/brand'].includes(path),
        links: [
            { href: '/category', label: 'Category' },
            { href: '/unit', label: 'Unit' },
            { href: '/brand', label: 'Brand' },
            { href: '/products', label: 'All Products' },
        ],
    },
    {
        value: 'purchase',
        title: 'Purchase',
        active: (path) => path.startsWith('/purchase'),
        links: [{ href: '/purchase', label: 'Add Purchase' }],
    },
    {
        value: 'warehouse',
        title: 'Warehouse / Branch',
        active: (path) => path === '/warehouse',
        links: [
            { href: '/warehouse', label: 'Warehouse' },
            { href: '/branch', label: 'Branch' }
        ],

    },


    {
        value: 'transfer',
        title: 'Transfer',
        active: (path) => path.startsWith('/stockTransfer') || path === '/money-transfer-remaining',
        links: [
            { href: '/stockTransfer', label: 'Stock Transfer' },
            // { href: '/money-transfer-remaining', label: 'Money Transfer Remaining' },
        ],
    },

    {
        value: 'settings',
        title: 'Settings',
        active: (path) => path.startsWith('/settings'),
        links: [{ href: '/settings', label: 'settings' }],
    },
    {
        value: 'contact',
        title: 'Contact',
        active: (path) => ['/supplier', '/customer'].includes(path),
        links: [
            { href: '/supplier', label: 'Supplier' },
            { href: '/customer', label: 'Customer' }
        ],
    },
];
