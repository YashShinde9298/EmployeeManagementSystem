import { useState } from 'react';
import employeeData from './Employee';
import List from './List';
import AddEmp from './AddEmp';
import EditEmp from './EditEmp';
import Header from './Header';
function Dashboard({ onEdit, onAdd }) {

    const [employees, setEmployees] = useState(employeeData);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmp, setSelectedEmp] = useState(null);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);
        setSelectedEmp(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    }

    return (<>


        {!isAdding && !isEditing && (
            <>
                <Header
                    setIsAdding={setIsAdding}
                />
                <List
                    employees={employees}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </>
        )}

        {isAdding && (
            <AddEmp
                employees={employees}
                setEmployees={setEmployees}
                setIsAdding={setIsAdding}
            />
        )}

        {isEditing && (
            <EditEmp
                employees={employees}
                selectedEmp={selectedEmp}
                setEmployees={setEmployees}
                setIsEditing={setIsEditing}
            />
        )}

    </>);
}

export default Dashboard;