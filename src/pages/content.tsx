import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  TextInput,
} from "grommet";
import Add from "./add";
import { useDispatch, useSelector } from "react-redux";
import { FormTrash } from "grommet-icons";

const Content = () => {
  const dispatch = useDispatch();
  const StudTeach = useSelector((state: any) => state.user.StudTeach);
  const [value, setValue] = useState("");
  const [add, setAdd] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    dispatch.user.getStudTeachList();
  }, [dispatch.user]);

  useEffect(() => {
    if (StudTeach?.length > 0) {
      setResult(StudTeach);
    }
  }, [StudTeach]);

  const handleAdd = async () => {
    setAdd(true);
    setResult(StudTeach);
  };

  const handleCloseAdd = async () => {
    setValue("");
    setAdd(false);
    setResult(StudTeach);
  };

  const handleDelete = async (data) => {
    setValue("");
    await dispatch.user.deleteData(data);
    dispatch.user.getStudTeachList();
  };

  const onSearch = async (data) => {
    setValue(data);
    let search;
    if (data && StudTeach) {
      search = StudTeach.filter(
        (x) => `${x.name}`.toUpperCase().indexOf(data.toUpperCase()) !== -1
      );
    }
    setResult(search ? search : StudTeach);
  };
  
  return (
    <Box>
      <Box align="center" pad="large">
        {!add && (
          <TextInput
            id="text-input-id"
            name="name"
            value={value}
            placeholder="Please enter the name"
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
        <Table caption="Details">
          <TableHeader>
            <TableRow>
              <TableCell scope="col">
                <Text>Name</Text>
              </TableCell>
              <TableCell scope="col">
                <Text>Role</Text>
              </TableCell>
              {/* ))} */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {result?.length > 0 &&
              result.map((data: any) => (
                <TableRow>
                  <TableCell>
                    <Text>{data.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{data.role}</Text>
                  </TableCell>
                  <TableCell>
                    <Box onClick={() => handleDelete(data)}>
                      <FormTrash size="medium" />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      {!add && (
        <Box align="center">
          <Box direction="row" gap="medium">
            <Button onClick={handleAdd} primary label="Add Deatils" />
          </Box>
        </Box>
      )}
      {add && <Add closeAdd={handleCloseAdd} />}
    </Box>
  );
};

export default Content;
