import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export interface GameData {
  name: string;
  date: string;
  authors: string;
}

export interface GamesOverviewProps {
  data: GameData[];
}

export const GamesOverview = ({ data }: GamesOverviewProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Авторы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((game: GameData) => (
            <TableRow>
              <TableCell>{game.name}</TableCell>
              <TableCell>{game.date}</TableCell>
              <TableCell>
                {game.authors.split(",").map((author: string) => `${author}, `)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
