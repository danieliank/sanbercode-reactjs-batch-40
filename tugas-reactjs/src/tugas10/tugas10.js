import React from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

const Tugas10 = () => {
    return (
        <div className="mt-20 ml-[25%] w-auto">
            <Table className="">
                <Table.Head className="bg-purple-500 text-white">
                    <Table.HeadCell>
                        NO
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NAMA
                    </Table.HeadCell>
                    <Table.HeadCell>
                        MATA KULIAH
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        INDEX NILAI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        ACTION
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            1
                        </Table.Cell>
                        <Table.Cell>
                            John
                        </Table.Cell>
                        <Table.Cell>
                            Algoritma
                        </Table.Cell>
                        <Table.Cell>
                            80
                        </Table.Cell>
                        <Table.Cell>
                            A
                        </Table.Cell>
                        <Table.Cell className="flex gap-5">
                            <Button color="light">
                                Edit
                            </Button>
                            <Button className="bg-red-500">
                                Delete
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            2
                        </Table.Cell>
                        <Table.Cell>
                            Doe
                        </Table.Cell>
                        <Table.Cell>
                            Matematika
                        </Table.Cell>
                        <Table.Cell>
                            70
                        </Table.Cell>
                        <Table.Cell>
                            B
                        </Table.Cell>
                        <Table.Cell className="flex gap-5">
                            <Button color="light">
                                Edit
                            </Button>
                            <Button className="bg-red-500">
                                Delete
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            3
                        </Table.Cell>
                        <Table.Cell>
                            Frank
                        </Table.Cell>
                        <Table.Cell>
                            Kalkulus
                        </Table.Cell>
                        <Table.Cell>
                            60
                        </Table.Cell>
                        <Table.Cell>
                            C
                        </Table.Cell>
                        <Table.Cell className="flex gap-5">
                            <Button color="light">
                                Edit
                            </Button>
                            <Button className="bg-red-500">
                                Delete
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            4
                        </Table.Cell>
                        <Table.Cell>
                            Jason
                        </Table.Cell>
                        <Table.Cell>
                            Basis data
                        </Table.Cell>
                        <Table.Cell>
                            90
                        </Table.Cell>
                        <Table.Cell>
                            A
                        </Table.Cell>
                        <Table.Cell className="flex gap-5">
                            <Button color="light">
                                Edit
                            </Button>
                            <Button className="bg-red-500">
                                Delete
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>

    );
}

export default Tugas10;