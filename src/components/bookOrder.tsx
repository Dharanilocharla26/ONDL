import {
    Box,
    Text,
    Heading,
    VStack,
    HStack,
    Icon,
    Divider,
    Checkbox,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    Circle,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
} from "@chakra-ui/react";
import { MdLocationOn, MdRadioButtonChecked, MdSummarize } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { CheckIcon } from "@chakra-ui/icons";
import { useState, useRef, MutableRefObject } from "react";
import type { TouchEvent } from "react";

export default function BookOrder() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);


    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    };

    const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchEnd - touchStart;
        const isDownSwipe = distance > minSwipeDistance;

        if (isDownSwipe) {
            onClose();
        }
    };

    const GradientDivider = () => (
        <Box
            w="100%"
            h="8px"
            bg="gray.200"
            borderRadius="md"
            my={4}
        />
    );
    const DashedDivider = () => (
        <Box w="100%" borderTop="1px dashed" borderColor="gray.300" my={4} />
    );

    return (
        <Box maxW="480px" mx="auto" bg="white">
            <HStack justify="space-between" mb={4} mt={3}>
                <Icon as={IoIosArrowBack} boxSize={6} ml={3} />
                <Heading fontSize="22px">Book Order</Heading>
                <Box boxSize={5} />
            </HStack>
            <Box position="relative" mb={6} px={4} >
                <Box
                    position="absolute"
                    top="12px"
                    left="10%"
                    right="10%"
                    height="2px"
                    bg="gray.200"
                    zIndex={0}
                />
                <Flex justify="space-between" align="center" zIndex={1} position="relative">
                    {["Details", "Package", "Pricing"].map((label, index) => (
                        <Flex direction="column" align="center" key={index}>
                            <Circle
                                size="30px"
                                bg="white"
                                color="gray.500"
                                border="1px"
                                borderColor="gray.500"
                            >
                                <CheckIcon boxSize={3} />
                            </Circle>
                            <Text fontSize="xs" mt={1} color="gray.600">
                                {label}
                            </Text>
                        </Flex>
                    ))}
                    <Flex direction="column" align="center">
                        <Circle size="30px" bg="white" border="2px" borderColor="gray.700">
                            <Icon as={MdSummarize} boxSize={3.5} color="gray.800" />
                        </Circle>
                        <Text fontSize="xs" mt={1} fontWeight="medium" color="gray.800">
                            Summary
                        </Text>
                    </Flex>
                </Flex>
            </Box>
            <Divider borderColor="gray.200" />
            <Box px={4} py={2}>
                <VStack align="start" spacing={2} mb={3} mt={4}>
                    <Text fontWeight="bold" fontSize="md">
                        Customer Details
                    </Text>
                    <HStack align="start" mt={2}>
                        <VStack spacing={2} align="center">
                            <Icon as={MdRadioButtonChecked} boxSize={4} color="gray.400" />
                            <Box w="1px" h="30px" borderLeft="1px dashed" borderColor="gray.400" />
                            <Icon as={MdLocationOn} boxSize={5} color="gray.400" />
                        </VStack>
                        <VStack align="start" spacing={4}>
                            <Box>
                                <Text fontWeight="bold">Bruce Wayne | 9182910120</Text>
                                <Text fontSize="sm" color="gray.600">
                                    Visakhapatnam, Andhra Pradesh, India 520010
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold">Tom Riddle | 9182331034</Text>
                                <Text fontSize="sm" color="gray.600">
                                    Hyderabad, Telangana, India 500001
                                </Text>
                            </Box>
                        </VStack>
                    </HStack>
                </VStack>
            </Box>
            <GradientDivider />
            <Box mb={4} px={4}>
                <Text fontWeight="bold" fontSize="md" mb={2}>
                    Package Details
                </Text>
                <Accordion allowToggle>
                    <AccordionItem border="none">
                        <AccordionButton px={0}>
                            <Box flex="1" textAlign="left" fontWeight="semibold" color="#1B2C4F">
                                Package Details (1)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel px={0} pb={4}>
                            <Flex justify="space-between" color="gray.600" mt={2}>
                                <Text>Package Type</Text>
                                <Text fontWeight="semibold" color="gray.800">Carton Box</Text>
                            </Flex>
                            <Flex justify="space-between" color="gray.600">
                                <Text>Total Weight</Text>
                                <Text fontWeight="semibold" color="gray.800">40 Kg</Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border="none">
                        <AccordionButton px={0}>
                            <Box flex="1" textAlign="left" fontWeight="semibold" color="#1B2C4F">
                                Package Details (2)
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </Box>
            <DashedDivider />
            <Box mb={4} px={4}>
                <Text fontWeight="bold" fontSize="md" mb={2}>
                    Payment Details
                </Text>
                <Flex justify="space-between" color="gray.600">
                    <Text>Payment Type</Text>
                    <Text fontWeight="semibold" color="gray.800">To Pay</Text>
                </Flex>
            </Box>
            <DashedDivider />
            <Box mb={4} px={4}>
                <Text fontWeight="bold" fontSize="md" mb={2}>
                    Pricing Details
                </Text>
                <Flex justify="space-between" color="gray.600">
                    <Text>Pricing Type</Text>
                    <Text fontWeight="semibold" color="gray.800">By Weight</Text>
                </Flex>
            </Box>
            <Box bg="gray.200" px={0} py={5} width="100%" minHeight="140px" >
                <Box
                    bg="#D3D3D3"
                    border="1px solid"
                    borderColor="gray.300"
                    px={4}
                    py={2}
                >
                    <Flex >
                        <Checkbox colorScheme="gray" mt={3} mr={3} borderColor="black" />
                        <Box>
                            <Text fontWeight="semibold" color="gray.800" mb={1}>
                                Order Status Updates for Customers
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                Enable WhatsApp notifications for the customers
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Flex justify="space-between" align="center" px={4} py={4} bg="white">
                <Box>
                    <Text fontWeight="bold" fontSize="25px" color="black">
                        ₹0
                    </Text>
                    <Button
                        variant="link"
                        fontSize="sm"
                        color="black"
                        fontWeight="bold"
                        onClick={onOpen}
                        cursor="pointer"
                        ref={btnRef}
                        p={0}
                        height="auto"
                        minW="auto"
                        textDecor="none"
                        _hover={{ textDecor: "none" }}
                    >
                        View Breakup
                    </Button>
                </Box>
                <Button bg="gray.900" color="white" borderRadius="md" px={14} py={6} mr={4}>
                    Proceed
                </Button>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
                finalFocusRef={btnRef as MutableRefObject<HTMLButtonElement>}
            >
                <DrawerOverlay />
                <DrawerContent
                    borderTopRadius="lg"
                    maxH="70vh"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <Box
                        width="60px"
                        height="5px"
                        bg="gray.300"
                        borderRadius="full"
                        mx="auto"
                        mt={3}
                        mb={2}
                    />
                    <DrawerHeader borderBottomWidth="1px" pb={2}>
                        Fare Breakup
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={3} align="stretch" mt={2}>
                            <Flex justify="space-between">
                                <Text color="gray.600">Freight Value</Text>
                                <Text fontWeight="medium">N/A</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text color="gray.600">LR Charge</Text>
                                <Text fontWeight="medium">30</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text color="gray.600">Additional Charge</Text>
                                <Text fontWeight="medium">N/A</Text>
                            </Flex>
                            <Flex justify="space-between">
                                <Text color="gray.600">GST</Text>
                                <Text fontWeight="medium">30</Text>
                            </Flex>
                            <Divider borderColor="gray.300" />
                            <Flex justify="space-between">
                                <Text fontWeight="bold">Grand Total</Text>
                                <Text fontWeight="bold">N/A</Text>
                            </Flex>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}