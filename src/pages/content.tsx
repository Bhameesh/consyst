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
} from "grommet";
import Add from "./add";
import { useDispatch, useSelector } from "react-redux";
import { FormTrash } from "grommet-icons";

const Content = () => {
  const dispatch = useDispatch();
  const StudTeach = useSelector((state: any) => state.user);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    dispatch.user.getStudTeachList();
  }, [dispatch.user]);

  const handleAdd = async () => {
    setAdd(true);
  };

  const handleCloseAdd = async () => {
    setAdd(false);
  };

  const handleDelete = async (data) => {
    await dispatch.user.deleteData(data);
    dispatch.user.getStudTeachList();
  };
  return (
    <Box>
      <Box align="center" pad="large">
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
            {StudTeach?.StudTeach.length > 0 &&
              StudTeach.StudTeach.map((data) => (
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
