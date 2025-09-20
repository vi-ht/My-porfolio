import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
export default function Noti() {
    const {
        isOpen: isVisible,
        onClose,
    } = useDisclosure({ defaultIsOpen: true });

    return isVisible && (
        <Alert
            position="fixed"
            bottom={0}
            right={0}
            bg="#ffe5e5"
            w={{ base: "100%", md: "500px" }}
        >
            <AlertIcon color="#FB797F" />
            <Box>
                <AlertTitle>Special message !</AlertTitle>
                <AlertDescription>
                    My portfolio version 2 is being built, keep track here !{" "}
                    <Link
                        href="https://thanhvi-portfolio-v2.onrender.com/"
                        isExternal
                        fontWeight="bold"
                        color="#FB797F"
                    >
                        Thanh Vi's portfolio (Ver 2){" "}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </AlertDescription>
            </Box>
            <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
            />
        </Alert>
    )
}
