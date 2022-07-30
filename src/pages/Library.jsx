import "../styles/Library.css";
import GameCard from "../components/GameCard";
import ImagemJogo1 from "../assets/Sonic_Mania_(artwork).jpg";
import ImagemJogo2 from "../assets/Sludge-Life.jpg";
import ImagemJogo3 from "../assets/horizon-chase-turbo-feat12.jpg";
import ImagemJogo4 from "../assets/pathway_cover.jpg";
import ImagemJogo5 from "../assets/pine.jpg";
import ImagemJogo6 from "../assets/minit.png";
import {
  LocalOffer,
  People,
  KeyboardArrowLeft,
  Cached,
  FormatListBulleted,
  ExpandMore,
  GridViewSharp,
} from "@mui/icons-material/";
import { SiEpicgames, SiUnrealengine } from "react-icons/si";
import { Search } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
  Avatar,
  Badge,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SearchInput from "../components/SearchInput";
import { useState } from "react";

const library = [
  {
    imagem: ImagemJogo1,
    nome: "Sonic Mania",
    ultimasincronizacao: "18/12/2020 18:36:40",
    tamanho: "211.18MB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
  {
    imagem: ImagemJogo2,
    nome: "Sludge Life",
    ultimasincronizacao: "18/04/2021 18:36:40",
    tamanho: "690.20MB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
  {
    imagem: ImagemJogo3,
    nome: "Horizon Chase Turbo",
    ultimasincronizacao: "18/04/2021 18:36:40",
    tamanho: "1.8GB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
  {
    imagem: ImagemJogo4,
    nome: "Pathway",
    ultimasincronizacao: "18/05/2021 18:36:40",
    tamanho: "690.20MB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
  {
    imagem: ImagemJogo5,
    nome: "Pine",
    ultimasincronizacao: "18/04/2021 18:36:40",
    tamanho: "1.8GB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
  {
    imagem: ImagemJogo6,
    nome: "Minit",
    ultimasincronizacao: "18/04/2021 18:36:40",
    tamanho: "1.8GB",
    tempodejogo: "3hours 54mins",
    versao: "1.003045",
  },
];

function Library() {
  const [sorting, setSorting] = useState("Alfabética A-Z");
  const [viewMode, setViewMode] = useState("card");

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="flex-start"
      wrap="wrap"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "#161a1d",
      }}
    >
      <Grid item xs={2}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
          wrap="wrap"
          sx={{ width: "100%", marginTop: 7 }}
        >
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            alignContent="flex-start"
            wrap="wrap"
            style={{ height: 90, marginBottom: 10 }}
          >
            <SiEpicgames style={{ width: 37, height: 37, color: "white" }} />
          </Grid>
          <Button
            variant="text"
            style={{
              display: "flex",
              width: "70%",
              height: 70,
              marginLeft: "10px",
              padding: 15,
              justifyContent: "flex-start",
              borderRadius: 5,
            }}
          >
            <LocalOffer
              style={{
                width: 25,
                height: 25,
                marginRight: 20,
                color: "white",
              }}
            />
            <Typography
              variant="button"
              style={{ color: "white", fontSize: 17 }}
            >
              Store
            </Typography>
          </Button>
          <Button
            variant="text"
            style={{
              display: "flex",
              width: "70%",
              height: 70,
              marginLeft: "10px",
              padding: 15,
              justifyContent: "flex-start",
              borderRadius: 5,
            }}
          >
            <GridViewSharp
              style={{
                width: 25,
                height: 25,
                marginRight: 20,
                color: "white",
              }}
            />
            <Typography
              variant="button"
              style={{ color: "white", fontSize: 17 }}
            >
              Biblioteca
            </Typography>
          </Button>
          <Button
            variant="text"
            style={{
              display: "flex",
              width: "70%",
              height: 70,
              marginLeft: "10px",
              padding: 15,
              justifyContent: "flex-start",
              borderRadius: 5,
            }}
          >
            <SiUnrealengine
              style={{
                width: 25,
                height: 25,
                marginRight: 20,
                color: "white",
              }}
            />
            <Typography
              variant="button"
              style={{ color: "white", fontSize: 17 }}
            >
              Store
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            style={{ width: "100%" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              alignContent="center"
              style={{
                padding: 18,
                paddingLeft: 33,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                style={{
                  width: "60%",
                }}
              >
                <IconButton style={{ marginRight: 10 }}>
                  <KeyboardArrowLeft style={{ color: "white" }} />
                </IconButton>
                <SearchInput type={false} placeholder="Pesquisar" />
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                style={{
                  width: "40%",
                }}
              >
                <Typography variant="button" style={{ color: "white" }}>
                  Lista de Desejos
                </Typography>
                <Typography variant="button" style={{ color: "white" }}>
                  Carrinhos
                </Typography>
                <Divider
                  variant="middle"
                  sx={{ backgroundColor: "white", color: "white" }}
                  flexItem
                  orientation="vertical"
                />
                <IconButton style={{ marginRight: 10 }}>
                  <People style={{ color: "white" }} />
                </IconButton>
                <Badge
                  overlap="circular"
                  color="success"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  style={{ backgroundColor: "#202232", borderRadius: "50%" }}
                >
                  <Avatar style={{ backgroundColor: "rgb(255, 255, 255, 0)" }}>
                    M
                  </Avatar>
                </Badge>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                style={{
                  width: "80%",
                  marginTop: 15,
                }}
              >
                <Typography
                  variant="button"
                  style={{ color: "white", marginLeft: 13 }}
                >
                  Classificar por:
                </Typography>
                <select
                  value={sorting}
                  onChange={(ev) => setSorting(ev.target.value)}
                  style={{
                    padding: 5,
                    fontSize: 17,
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    outline: "none",
                    appearance: "none",
                    accentColor: "transparent",
                  }}
                >
                  <option value={"Jogado recentemente"}>
                    {"Jogado recentemente"}
                  </option>
                  <option value={"Alfabética A-Z"}>{"Alfabética A-Z"}</option>
                  <option value={"Alfabética Z-A"}>{"Alfabética Z-A"}</option>
                </select>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                style={{
                  width: "20%",
                  marginTop: 15,
                }}
              >
                <IconButton onClick={() => setViewMode("card")}>
                  <GridViewSharp style={{ color: "white" }} />
                </IconButton>
                <IconButton onClick={() => setViewMode("list")}>
                  <FormatListBulleted style={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <Cached style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            alignContent="flex-start"
            wrap="wrap"
            sx={{ padding: 5 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              alignContent="flex-start"
              wrap="wrap"
              sx={{ width: "80%" }}
            >
              {viewMode === "card"
                ? library.map((jogo) => (
                    <GameCard
                      imagem={jogo.imagem}
                      nome={jogo.nome}
                      ultimasincronizacao={jogo.ultimasincronizacao}
                      tamanho={jogo.tamanho}
                      tempodejogo={jogo.tempodejogo}
                      versao={jogo.versao}
                      viewMode="card"
                    />
                  ))
                : library.map((jogo) => (
                    <GameCard
                      imagem={jogo.imagem}
                      nome={jogo.nome}
                      ultimasincronizacao={jogo.ultimasincronizacao}
                      tamanho={jogo.tamanho}
                      tempodejogo={jogo.tempodejogo}
                      versao={jogo.versao}
                      viewMode="list"
                    />
                  ))}
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              alignContent="flex-start"
              wrap="wrap"
              sx={{ width: "17%", marginLeft: "3%" }}
            >
              <Typography variant="button" style={{ color: "white" }}>
                Filtros
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                  height: 40,
                  borderRadius: 5,
                  color: "white",
                  backgroundColor: "#252B35",
                  borderColor: "#252B35 ",
                  border: "none",
                  paddingLeft: 15,
                }}
              >
                <Search
                  style={{
                    color: "white",
                    width: 20,
                    height: 40,
                    marginRight: 5,
                  }}
                />
                <input
                  style={{
                    height: 20,
                    borderRadius: 5,
                    color: "white",
                    backgroundColor: "#252B35",
                    paddingLeft: 10,
                    borderColor: "#252B35 ",
                    border: "none",
                    outline: "none",
                    fontWeight: "bolder",
                    width: "100%",
                  }}
                  placeholder="Títulos"
                />
              </div>
              <Divider
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 5,
                }}
                orientation="horizontal"
                flexItem
              />
              <Accordion
                elevation={0}
                sx={{
                  backgroundColor: "transparent",
                  width: "100%",
                  border: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: "white" }} />}
                  style={{ width: "100%" }}
                >
                  <Typography variant="button" style={{ color: "white" }}>
                    Generos
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginBottom: 8,
                      }}
                    >
                      Aventura[9]
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Ação[10]
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Ação e Aventura[1]
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Construção de Cidades[1]
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Corrida[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Esportes[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Estratégia[8]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Indie[4]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Jogos de Turno[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Mundo Aberto[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Narração[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Plataforma[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Quebra-Cabeça[4]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      RPG[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Roguelite[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Simulação[3]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Sobrevivência[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Tiro[1]
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Divider
                style={{
                  backgroundColor: "white",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                orientation="horizontal"
                flexItem
              />
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "rgb(255, 255, 255, 0)", width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: "white" }} />}
                  style={{ width: "100%" }}
                >
                  <Typography
                    variant="button"
                    style={{ color: "white" }}
                    noWrap
                  >
                    Recursos
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Conquistas[1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Compatíveis com controle[9]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Competitivo[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Cooperativo[8]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Jogos para um Jogador[2]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Multijogador[7]
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Divider
                style={{
                  backgroundColor: "white",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                orientation="horizontal"
                flexItem
              />
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "rgb(255, 255, 255, 0)", width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: "white" }} />}
                  style={{ width: "100%" }}
                >
                  <Typography
                    variant="button"
                    style={{ color: "white" }}
                    noWrap
                  >
                    Tipo
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Jogos[27]
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Divider
                style={{
                  backgroundColor: "white",
                  marginTop: 5,
                  marginBottom: 5,
                }}
                orientation="horizontal"
                flexItem
              />
              <Accordion
                elevation={0}
                sx={{ backgroundColor: "rgb(255, 255, 255, 0)", width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: "white" }} />}
                  style={{ width: "100%" }}
                >
                  <Typography
                    variant="button"
                    style={{ color: "white" }}
                    noWrap
                  >
                    Plataforma
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      MacOS [6]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Win32 [1]
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                  >
                    <Typography
                      variant="button"
                      style={{
                        color: "grey",
                        width: "100%",
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    >
                      Windows [27]
                    </Typography>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Library;
