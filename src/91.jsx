import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Polaroid from "./Polaroid";

const polaroids = [
  {
    imageUrl: "/91-1.jpg",
    description: [
      "Adinda Breton",
      "26 Januari 2010",
      "08211786553",
      "@adinda.breton",
      "adindabreton10@gmail.com",
      "“Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.” —Oprah Winfrey",
    ],
  },
  {
    imageUrl: "./91-2.jpg",
    description: [
      "Amadea Tirzasinthadewi Sembiring",
      "28 April 2010",
      "08118336228",
      "@aprilamadea",
      "amadeaprilia@gmail.com",
      "“Any star can shine as long as they have the courage to.”",
    ],
  },
  {
    imageUrl: "./91-3.jpg",
    description: [
      "Aretha Karenza Pang",
      "13 September 2010",
      "087888802699",
      "@cozy_1309",
      "arethakarenzapang@gmail.com",
      "Saya laskar Kristus!! Don't overthink it, nanti pusing sendiri yang penting sudah berusaha dan banyak berdoa. ( •̀ ω •́ ) <3",
    ],
  },
  {
    imageUrl: "./91-4.jpg",
    description: [
      "Bernadette Sharon Ohisto",
      "18 November 2009",
      "0811979762",
      "@sharon.ohisto",
      "sharon.ohisto75@gmail.com",
      "Philippians 4:13 “I can bear all things in Him who gives me strength.”",
    ],
  },
  {
    imageUrl: "./91-5.jpg",
    description: [
      "Bianca Madoka Rianto",
      "22 April 2010",
      "0818370055",
      "@biancarianto_",
      "bianca.rianto@gmail.com",
      "Matcha in hand, a Medical degree in mind.",
    ],
  },
  {
    imageUrl: "./91-6.jpg",
    description: [
      "Christie Annabelle Angker",
      "18 Desember 2009",
      "085607297736",
      "@christieannabelle_18",
      "christieannabelle18@gmail.com",
      "Kesuksesan hanya dapat diperoleh bagi mereka yang mau dan berani untuk keluar dari zona nyaman mereka.",
    ],
  },
  {
    imageUrl: "./91-7.jpg",
    description: [
      "Clare Celine Marsono",
      "5 Maret 2010",
      "08194171222",
      "@clare.celinee",
      "clarecelinemarsono@gmail.com",
      "Don’t ever let anyone make you feel like you don’t deserve what you want",
    ],
  },
   {
    imageUrl: "./91-8.jpg",
    description: [
      "Dhifa Putri Faesa",
      "3 Maret 2010",
      "081288213877",
      "@m_divaa03",
      "diva.m0310@gmail.com",
      "“The only way to get what you want in this world, is through HARD WORK”",
    ],
  },
  {
    imageUrl: "./91-9.jpg",
    description: [
      "Emilie Soesanto",
      "26 Oktober 2009",
      "081519098696",
      "@emiliesoesanto",
      "emiliesoesanto@gmail.com",
      "Chase your goals like you chase your phone at 1% battery!",
    ],
  },
  {
    imageUrl: "./91-10.jpg",
    description: [
      "Eugenia Nathanie Kurniawan",
      "24 September 2010",
      "081284837124",
      "@eugn.nk",
      "eugeniakurniawan427@gmail.com",
      "On my way to getting that double degree",
    ],
  },
  {
    imageUrl: "./91-11.jpg",
    description: [
      "Febri Anggara",
      "30 November 2009",
      "082123296034",
      "@jaailers",
      "febrianggara3011@gmail.com",
      "oke.",
    ],
  },
  {
    imageUrl: "./91-12.jpg",
    description: [
      "Florie Amara Kurniadi",
      "15 Maret 2010",
      "0895604925352",
      "@Amxroeee",
      "amara.kurniadi@gmail.com",
      "“All's well, ends well” they said, however I don't think EVERYTHING was well after all.",
    ],
  },
  {
    imageUrl: "./91-13.jpg",
    description: [
      "Gabriele Kimiko Putri Ramali",
      "6 Agustus 2010",
      "087702000688",
      "@kimiko_ramali",
      "kimikoramali0608@gmail.com",
      "If you can imagine it, you can achieve it",
    ],
  },
   {
    imageUrl: "./91-14.jpg",
    description: [
      "Grace Adrienne Tan",
      "29 April 2010",
      "08170815295",
      "@obsecced",
      "grace.adriennetan@gmail.com",
      "The best way to predict the future is to create it.",
    ],
  },
  {
    imageUrl: "./91-15.jpg",
    description: [
      "Isabel Aurelia Tjakrarahardja",
      "18 November 2009",
      "081385750546",
      "@isabelaureliat",
      "isabelaureliaa18@gmail.com",
      "Do what is right, not what is easy",
    ],
  },
  {
    imageUrl: "./91-16.jpg",
    description: [
      "Isabella Sophie Gunawan",
      "9 November 2010",
      "081299960911",
      "@i_sophieg",
      "isabellasophie.gunawan@gmail.com",
      "The sun will never shine brighter than my future. Right, future me?",
    ],
  },
  {
  imageUrl: "./91-17.jpg",
  description: [
    "Ishabella Ayuswari Tabaluyan",
    "15 September 2010",
    "08119308311",
    "@willie_bellie",
    "ishabella.ayuswari@gmail.com",
    "Live in the moment",
  ],
},
{
  imageUrl: "./91-18.jpg",
  description: [
    "Ivana Natasya Quinn Ginting",
    "3 Januari 2010",
    "081283002237",
    "@ivanagintingm",
    "ivananqgm@gmail.com",
    "For though I fall, I will rise again. Though I sit in darkness, the Lord will be my light.",
  ],
},
{
  imageUrl: "./91-19.jpg",
  description: [
    "Jacqueline Olivia Yang",
    "9 Maret 2010",
    "08128882010",
    "@jcqvia",
    "jacqueline.olivia.yang@gmail.com",
    "Time may drift away but the memories will stay with us forever",
  ],
},
{
  imageUrl: "./91-20.jpg",
  description: [
    "Kanaya Shira Dannelle",
    "11 November 2010",
    "081280212804",
    "@nayashiraa",
    "kanayashira11@gmail.com",
    "some people gonna hate you for no reason, and you're gonna shine regardless -sza",
  ],
},
{
  imageUrl: "./91-21.jpg",
  description: [
    "Kenisha Djohan Young",
    "23 Agustus 2009",
    "081238732384",
    "@keniidjohn",
    "kenisha.djohanyoung@gmail.com",
    "These days, I'm letting God handle all things above me",
  ],
},
{
  imageUrl: "./91-22.jpg",
  description: [
    "Kyna Audenie Kamal",
    "16 April 2010",
    "081818475999",
    "@kynaaudi",
    "kyna.kamal@gmail.com",
    "The best protection isn’t a gun or a sword, but the best protection is God and brain!",
  ],
},
{
  imageUrl: "./91-23.jpg",
  description: [
    "Lidya Putri Harsono",
    "11 Oktober 2010",
    "08180617110",
    "@_lidyaisuke",
    "lidyaputrihrsn110@gmail.com",
    "We want our leaders to save the day, but we don’t get to say what they trade away.",
  ],
},
{
  imageUrl: "./91-24.jpg",
  description: [
    "Louisa Amabel Pramesthi",
    "18 Maret 2010",
    "081386926971",
    "@louisaap__",
    "louisaamabel45@gmail.com",
    "Kesuksesan selalu berawal dari mimpi, maka marilah kita tidur.",
  ],
},
{
  imageUrl: "./91-25.jpg",
  description: [
    "Ludmilla Jemima Atkausar",
    "30 Oktober 2010",
    "0816831887",
    "@ludmillaja_",
    "ljatkausar@gmail.com",
    "Do your best and let God do the rest",
  ],
},
{
  imageUrl: "./91-26.jpg",
  description: [
    "Michaela Christalyn",
    "3 Agustus 2010",
    "082211961588",
    "@christaly.n",
    "inichristy0308@gmail.com",
    "Nothing else really matters, just be happy and live your life to the fullest.",
  ],
},
{
  imageUrl: "./91-27.jpg",
  description: [
    "Natania Joanne Hermawan",
    "18 November 2010",
    "081280034850",
    "@natania_hrmwn",
    "natania.joanne@gmail.com",
    "Rereading the same chapter won’t give you a different ending",
  ],
},
{
  imageUrl: "./91-28.jpg",
  description: [
    "Natasha Marianne Subari",
    "8 September 2010",
    "08119910028",
    "@_natashasubari_",
    "natashasubari2010@gmail.com",
    "Be happy not because everything is good, but because you can see the good side of everything.",
  ],
},
{
  imageUrl: "./91-29.jpg",
  description: [
    "Rachel Helena Putri Sipahutar",
    "26 April 2010",
    "081110677775",
    "@rachelhelenaa_",
    "helena.putrisip@gmail.com",
    "Lorem ipsum dolor sit amet",
  ],
},
{
  imageUrl: "./91-30.jpg",
  description: [
    "Rebecca Keisha Fernandi",
    "21 September 2010",
    "0895401663800",
    "@rebeccaakf",
    "rebeccakeisha219@gmail.com",
    "First you Learn, then you remove the L",
  ],
},
{
  imageUrl: "./91-31.jpg",
  description: [
    "Rosabelle Valerie Wijaya",
    "22 April 2010",
    "081290887887",
    "@rosabellevalerie",
    "rosabellewijaya@gmail.com",
    "Everything you lose is a step you take - TS",
  ],
},
{
  imageUrl: "./91-32.jpg",
  description: [
    "Samantha Angelina Malau",
    "9 Juni 2010",
    "082112648707",
    "@saam_angell",
    "samanthaangelinn@gmail.com",
    "Kita ke sana, selagi masih bisa bersama.",
  ],
},
{
  imageUrl: "./91-33.jpg",
  description: [
    "Shannon Deandra Cahyady",
    "18 Maret 2010",
    "087846773377",
    "@shannon.deandra",
    "shonndeandra123@gmail.com",
    "First you learn, then remove the L",
  ],
},
{
  imageUrl: "./91-34.jpg",
  description: [
    "Theresia Rara Andini",
    "8 Januari 2010",
    "087780182626",
    "@raraandnii",
    "raraandinii18@gmail.com",
    "So take a change and don’t ever look back",
  ],
},
{
  imageUrl: "./91-35.jpg",
  description: [
    "Valerie Anabelle",
    "20 November 2009",
    "081385402692",
    "@val_anbl",
    "val.anbll@gmail.com",
    "The important thing is not how long you live. It’s what you do with your life.",
  ],
},
{
  imageUrl: "./91-36.jpg",
  description: [
    "Violeta Chyntia",
    "22 Maret 2010",
    "08118780184",
    "@violetachyntia",
    "Violetachyntia2203@gmail.com",
    "If you want it, you will work for it",
  ],
},
];

const PolaroidCarousel = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  let visibleCount = 3;
  if (isXs) visibleCount = 1;
  else if (isSm) visibleCount = 2;
  else if (isMd) visibleCount = 2;

  const handlePrev = () => {
    const prevIndex = startIndex - visibleCount;

    if (prevIndex < 0) {
      const lastFullIndex = Math.floor((polaroids.length - 1) / visibleCount) * visibleCount;
      setStartIndex(lastFullIndex); // loop to the last full set
    } else {
      setStartIndex(prevIndex);
    }
  };

  const handleNext = () => {
    const nextIndex = startIndex + visibleCount;

    if (nextIndex >= polaroids.length) {
      setStartIndex(0); // loop back to the beginning
    } else {
      setStartIndex(nextIndex);
    }
  };

  const handleOpen = (cardData) => setExpandedCard(cardData);
  const handleClose = () => setExpandedCard(null);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
        px={2}
        overflow="hidden"
        sx={{height: 600}}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIos />
        </IconButton>

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          {polaroids.slice(startIndex, startIndex + visibleCount).map((data, index) => (
            <Polaroid
              key={index}
              imageUrl={data.imageUrl}
              description={data.description}
              onClick={() => handleOpen(data)}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Dialog open={Boolean(expandedCard)} onClose={handleClose} maxWidth="sm" fullWidth>
        {expandedCard && (
          <>
            <DialogTitle>{expandedCard.description[0]}</DialogTitle>
            <DialogContent>
              <Box
                component="img"
                src={expandedCard.imageUrl}
                alt="Expanded Polaroid"
                sx={{ width: "100%", borderRadius: 2, mb: 2 }}
              />
              {expandedCard.description.map((text, i) => (
                <Typography key={i} variant="body1" gutterBottom>
                  {text}
                </Typography>
              ))}
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default PolaroidCarousel;