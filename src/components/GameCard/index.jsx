import "../../styles/GameCard.css";
import { useState } from "react";
import {
  MoreHoriz,
  ArrowDownward,
  FileDownload,
  PlayArrow,
  Download,
} from "@mui/icons-material/";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

export default function GameCard({
  imagem,
  nome,
  viewMode,
  ultimasincronizacao,
  tamanho,
  tempodejogo,
  versao,
}) {
  /// Usage of this card: <GameCard imagem="image of the game" nome="name of the game" ultima-sincronizacao="last syncronization with the cloud" tamanho="size of the game" tempo-de-jogo="amount of tiem that you played" versao="version of the game"/>

  const [baixado, setBaixado] = useState(true);
  const [opcoes, setOpcoes] = useState(false);

  return (
    <Card
      style={{
        width: viewMode === "card" ? 180 : "100%",
        height: viewMode === "card" ? 340 : 100,
        padding: 10,
        backgroundColor: viewMode === "card" ? "transparent" : "#252B35",
        border: "none",
        flexDirection: viewMode === "card" ? "column" : "row",
        transition: "ease-in-out 300",
        "& root": {
          "& :hover": {
            backgroundColor: "#252B35",
          },
        },
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={imagem}
        alt={nome}
        style={{
          borderRadius: 10,
          height: viewMode === "card" ? 250 : 100,
          width: viewMode === "list" && 180,
          maxWidth: 180,
          objectFit: "cover",
        }}
      />
      <CardContent
        style={{
          flexDirection: viewMode === "card" ? "column" : "row",
          justifyContent: "flex-start",
          padding: 5,
          alignItems: "center",
          alignContent: "center",
          flexWrap: "nowrap",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          style={{ color: "white" }}
        >
          <Typography
            variant="button"
            style={{ color: "white", width: 130 }}
            noWrap
          >
            {nome}
          </Typography>
          <IconButton>
            <MoreHoriz style={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-sta"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Typography
            variant="button"
            style={{ color: "white", fontSize: 12, alignItems: "baseline" }}
            noWrap
          >
            <FileDownload style={{ width: 15, height: 15, marginRight: 5 }} />
            Instalar
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
