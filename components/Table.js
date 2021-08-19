import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import UserData from "./Data";

const UserTable = () => {
    return (
        <>
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>SN.</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>role</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        UserData.map((data, index) => {
                            return (
                                <><Tr>
                                    <Td>{index + 1}</Td>
                                    <Td>{data.name}</Td>
                                    <Td>{data.email}</Td>
                                    <Td >{data.role}</Td>
                                    </Tr>
                                </>
                            )
                        })
                    }

                   
                </Tbody>
            </Table>
        </>
    )
}

export default UserTable;























