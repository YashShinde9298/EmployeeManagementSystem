import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, createTheme } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function AddEmp({ employees, setEmployees, setIsAdding }) {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    const [salary, setSalary] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();
        const id = employees.length + 1;
        const newEmployee = {
            id, first_name, last_name, email, gender, mobile_no, salary
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);
    }

    const defaultTheme = createTheme();
    return (<>
        <ThemeProvider theme={defaultTheme
        }>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit Details
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleAdd} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    autoFocus
                                    onChange={e => setFirstName(e.target.value)}
                                    value={first_name}
                                    ref={textInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="family-name"
                                    onChange={e => setLastName(e.target.value)}
                                    value={last_name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="mobile_no"
                                    label="Phone No."
                                    type="text"
                                    id="mobile_no"
                                    autoComplete="mobile_no"
                                    onChange={e => setMobileNo(e.target.value)}
                                    value={mobile_no}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="gender"
                                    label="Gender"
                                    type="text"
                                    id="gender"
                                    autoComplete="gender"
                                    onChange={e => setGender(e.target.value)}
                                    value={gender}
                                />
                            </Grid><Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="salary"
                                    label="Salary"
                                    type="text"
                                    id="salary"
                                    autoComplete="salary"
                                    onChange={e => setSalary(e.target.value)}
                                    value={salary}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Employee
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </>);
}

export default AddEmp;