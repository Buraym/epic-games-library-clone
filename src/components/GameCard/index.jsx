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
        width: 180,
        height: 340,
        padding: 10,
        backgroundColor: "#0b090a",
        border: "none",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={imagem}
        alt={nome}
        height="250"
        style={{ borderRadius: 10 }}
      />
      <CardContent
        style={{
          flexDirection: "column",
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

    // <div className="card">
    //   <img className="imagem-jogo" src={props.imagem} />
    //   <div className="caixa-nome-opcoes">
    //     <label className="nome-jogo">{props.nome}</label>
    //     <MoreHoriz onClick={() => setOpcoes(!opcoes)} />
    //   </div>
    //   <div className="caixa-botao">
    //     {baixado ? (
    //       <button className="botao" onClick={() => setBaixado(!baixado)}>
    //         <ArrowDownward />
    //         <label>Instalar</label>
    //       </button>
    //     ) : (
    //       <button className="botao" onClick={() => setBaixado(!baixado)}>
    //         <PlayArrow />
    //         <label>Inicializar</label>
    //       </button>
    //     )}
    //   </div>
    //   {opcoes ? (
    //     <div className="caixa-opcoes">
    //       <div className="opcoes-superior">
    //         <div>
    //           <button>
    //             <label>Ir para a página da Store</label>
    //           </button>
    //           <button>
    //             <label>Verificar</label>
    //           </button>
    //           <button>
    //             <label>Criar Um Atalho</label>
    //           </button>
    //           <button>
    //             <label>Sincronizar Dados Agora</label>
    //             <label>última sincronização {props.ultimasincronizacao}</label>
    //           </button>
    //           <button>
    //             <label></label>
    //           </button>
    //           <button>
    //             <label></label>
    //           </button>
    //           <button>
    //             <label>Desinstalar</label>
    //             <label>{props.tamanho}</label>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="linha"></div>
    //       <div className="opcoes-inferior">
    //         <div>
    //           <label>Você Jogou</label>
    //           <label>{props.tempodejogo}</label>
    //         </div>
    //         <div>
    //           <label>Versão</label>
    //           <label>{props.versao}</label>
    //         </div>
    //       </div>
    //     </div>
    //   ) : null}
    // </div>
  );
}
