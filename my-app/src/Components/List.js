import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function List({ employees, handleEdit, handleDelete }) {
    return (<>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="center">Firstname</TableCell>
                        <TableCell align="center">Lastname</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Salary</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {employees.length > 0 ?
                        employees.map((emp, i) => (
                            <TableRow
                                key={emp.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <p className=' mb-1'>{i + 1}</p>
                                </TableCell>
                                <TableCell align="center">{emp.first_name}</TableCell>
                                <TableCell align="center">{emp.last_name}</TableCell>
                                <TableCell align="center">{emp.email}</TableCell>
                                <TableCell align="center">{emp.mobile_no}</TableCell>
                                <TableCell align="center">{emp.gender}</TableCell>
                                <TableCell align="center">{emp.salary}</TableCell>
                                <TableCell align="center">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                        <Button startIcon={<EditIcon />} onClick={() => handleEdit(emp.id)}>Edit</Button>
                                        <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(emp.id)} color="error">Delete</Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                        )) :
                        "No records found"}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default List;