import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Polaroid from "./Polaroid";

const polaroids = [
  {
    imageUrl: "./94-1.jpg",
    description: [
      "Alicia Joceline Sondakh",
      "24 Juni 2010",
      "081266622010",
      "@aliciajceline",
      "alicia.jocln@gmail.com",
      "“I can hear the bells ringing, reminding us why.”",
    ],
  },
  {
    imageUrl: "./94-2.jpg",
    description: [
      "Anastasia Giannina Ridjab",
      "25 November 2009",
      "082111581500",
      "@oreo_team2009",
      "anastasiagiannina2009@gmail.com",
      "“Those who can learn to give, be brought good upon their heart”",
    ],
  },
{
  imageUrl: "./94-3.jpg",
  description: [
    "Angela Tribuana Tunggadewi Tanjaya",
    "12 Januari 2010",
    "081511700500",
    "@enji81019",
    "enji.tanjaya@gmail.com",
    "Jika satu pintu ditutup maka pintu lain akan terbuka!",
  ],
},
{
  imageUrl: "./94-4.jpg",
  description: [
    "Aretha Hartono",
    "13 Januari 2010",
    "08872236228",
    "@aretha.hartono",
    "aretha.hartonoo@gmail.com",
    "“Aude ut unicus sis.”",
  ],
},
{
  imageUrl: "./94-5.jpg",
  description: [
    "Ayanara Kemal Harro",
    "10 Juni 2009",
    "081282038472",
    "@juliefounded",
    "Kyoshiroizy@gmail.com",
    "To paint is the most terrific thing that there is, but to do it well is very difficult.",
  ],
},
{
  imageUrl: "./94-6.jpg",
  description: [
    "Bernadeth Joscelyn Tan",
    "10 Mei 2010",
    "081519300008",
    "@bernadethtan",
    "bernadethtan2020@gmail.com",
    "Dream as if you'll live forever, live as if you'll die today",
  ],
},
{
  imageUrl: "./94-7.jpg",
  description: [
    "Brianna Naraya Atmadjaja",
    "28 April 2010",
    "081808283896",
    "@Biebriii",
    "brianna.atmadjaja@gmail.com",
    "Wear your hair down, and your attitude high",
  ],
},
{
  imageUrl: "./94-8.jpg",
  description: [
    "Brigitta Milana Wahyudi",
    "28 Oktober 2010",
    "087882380679",
    "@brigittamilana__",
    "brigittamw2810@gmail.com",
    "Anyway, don’t be a stranger",
  ],
},
{
  imageUrl: "./94-9.jpg",
  description: [
    "Casey Rae Limas",
    "3 November 2010",
    "081288880311",
    "@casey.limas",
    "caseyraelimas@gmail.com",
    "When you are young they assume you know nothing",
  ],
},
{
  imageUrl: "./94-10.jpg",
  description: [
    "Chevanya Aubrey Jennabelle Aritonang",
    "2 Februari 2010",
    "087817704402",
    "@aubreyaritonang",
    "aubreyyjennabelle@gmail.com",
    "Every bond u break, every step u take, I'll be watching u",
  ],
},
{
  imageUrl: "./94-11.jpg",
  description: [
    "Clarissa Gwen Setiawan",
    "21 Mei 2010",
    "081380072159",
    "@clagwenn",
    "clarissagwen2@gmail.com",
    "Never give up until you find your treasure.",
  ],
},
{
  imageUrl: "./94-12.jpg",
  description: [
    "Emily Poetri Rusly",
    "7 Juli 2010",
    "085159333662",
    "",
    "emmano21233@gmail.com",
    "Success is not final, failure is not fatal. It’s the courage to continue that counts. -Winston Churchill",
  ],
},
{
  imageUrl: "./94-13.jpg",
  description: [
    "Eugenia Joanna Alexandria",
    "23 Oktober 2010",
    "087786526886",
    "@eugjoa",
    "eugeniajoanna123@gmail.com",
    "You gotta seize the opportunity!",
  ],
},
{
  imageUrl: "./94-14.jpg",
  description: [
    "Eugenia Keiko Wijaya",
    "19 Desember 2009",
    "082111213031",
    "@chidory.sakura",
    "tiarakeiko5174@gmail.com",
    "There's always a way to fix any problem",
  ],
},
{
  imageUrl: "./94-15.jpg",
  description: [
    "Fayola Victoria Purnomo",
    "21 Desember 2009",
    "089696102030",
    "@fayola_victoriaa",
    "fayola.v.21@gmail.com",
    "Sorry, gotta go. Harvard's calling.",
  ],
},
{
  imageUrl: "./94-16.jpg",
  description: [
    "Felicia Weenas",
    "24 September 2010",
    "081717111944",
    "@feliciaweenas_",
    "feliciaweenas01@gmail.com",
    "“We didn't realize we were making memories, we just knew we were having fun.”",
  ],
},
{
  imageUrl: "./94-17.jpg",
  description: [
    "Griselle Catalya Speranza",
    "28 Desember 2009",
    "085714108779",
    "@grisellectlva",
    "grisellecatalya596@gmail.com",
    "Life is what happens to u while u are busy making other plans",
  ],
},
{
  imageUrl: "./94-18.jpg",
  description: [
    "Jacquelin Marrie Siahaya",
    "26 April 2010",
    "081288386341",
    "@jomarriaya",
    "j.marrie.siahaya@gmail.com",
    "All in God",
  ],
},
{
  imageUrl: "./94-19.jpg",
  description: [
    "Jasmine Elizabeth Tamin",
    "8 Oktober 2009",
    "08118108109",
    "@jasmine.elizqbeth_",
    "jasmine.elizabeth.0810@gmail.com",
    "“What? Like it's hard?”",
  ],
},
{
  imageUrl: "./94-20.jpg",
  description: [
    "Kayla Theresia",
    "18 Juni 2010",
    "081289220109",
    "@kay_theres",
    "kayla.theresia@gmail.com",
    "“May we meet again under a lovelier sun”",
  ],
},
{
  imageUrl: "./94-21.jpg",
  description: [
    "Kimora Dominic Situmorang",
    "26 Januari 2010",
    "081294410712",
    "@kimoradmnc",
    "kimoradominiq@gmail.com",
    "I don’t want to end the season on a bad episode — Tyler the Creator",
  ],
},
{
  imageUrl: "./94-22.jpg",
  description: [
    "Laurentia Diandra Harsono",
    "13 Januari 2010",
    "088295469585",
    "@bunniebun13",
    "mushybunny4@gmail.com",
    "♡ Believe in yourself just a little and you'll see how much magic you can create ♡",
  ],
},
{
  imageUrl: "./94-23.jpg",
  description: [
    "Louisa Anastasia Lie",
    "11 Desember 2009",
    "082112124549",
    "@louisaanastasialie",
    "louisaalie@gmail.com",
    "Life is too short to wear boring clothes",
  ],
},
{
  imageUrl: "./94-24.jpg",
  description: [
    "Michikha Kristanto",
    "26 April 2010",
    "0817415179",
    "@mmchkk_",
    "michikha.krstnto@gmail.com",
    "You only fail when you stop trying",
  ],
},
{
  imageUrl: "./94-25.jpg",
  description: [
    "Milliana Romauli Kamulyn",
    "29 April 2010",
    "0811810294",
    "@millianaromauli_",
    "milliana.romaulli@gmail.com",
    "Stay in the present, and you never know before you try 🔥",
  ],
},
{
  imageUrl: "./94-26.jpg",
  description: [
    "Quenkelly Patrisha Ameintine Sihombing",
    "9 Desember 2009",
    "081213008689",
    "@quenkellyy",
    "quenkellysihombing@gmail.com",
    "who cares if im pretty if i fail my finals?",
  ],
},
{
  imageUrl: "./94-27.jpg",
  description: [
    "Rafaella Gratia Juean Riyarso",
    "7 Juni 2010",
    "085811603108",
    "@juinjul",
    "remigius040475@gmail.com",
    "“We entered as kids... and we leave as slightly taller kids.”",
  ],
},
{
  imageUrl: "./94-28.jpg",
  description: [
    "Ratu Elnora Ginting",
    "1 Januari 2010",
    "082111889371",
    "@ratueln",
    "ratuelnora0101@gmail.com",
    "It is what it is",
  ],
},
{
  imageUrl: "./94-29.jpg",
  description: [
    "Regina Gracia Johanes",
    "25 November 2009",
    "08111985339",
    "@bugobon.chips_",
    "regina.gracia789@gmail.com",
    "Maturing is realizing that smelling like chlorine all the time is absolutely fine.",
  ],
},
{
  imageUrl: "./94-30.jpg",
  description: [
    "Saskia Nindita Mensana",
    "13 September 2010",
    "085973195455",
    "@saskiamensana",
    "smensana@gmail.com",
    "Made it! #YOLO",
  ],
},
{
  imageUrl: "./94-31.jpg",
  description: [
    "Skye Hartono",
    "29 Oktober 2010",
    "08119666889",
    "@_skye.pie_",
    "skye.hartono@gmail.com",
    "If not now then when?",
  ],
},
{
  imageUrl: "./94-32.jpg",
  description: [
    "Ursula Sahasra Kirana Aryaputri",
    "20 Juni 2010",
    "085692619663",
    "@ursulasahasra",
    "ursulasahasraaryaputri@gmail.com",
    "scott street - 4:09",
  ],
},
{
  imageUrl: "./94-33.jpg",
  description: [
    "Valerie Faye Awindra",
    "17 Februari 2010",
    "085932977227",
    "@Awindra17",
    "valerieawindra@gmail.com",
    "Losing is another way to learn to be better",
  ],
},
{
  imageUrl: "./94-34.jpg",
  description: [
    "Valerie Gaudeo Lie",
    "23 Mei 2010",
    "0811942135",
    "@valeriegaudeo",
    "valeriegaudeol@gmail.com",
    "Every action you take matters",
  ],
},
{
  imageUrl: "./94-35.jpg",
  description: [
    "Valika Arum Murtani",
    "6 November 2009",
    "0811997238",
    "@valikaam",
    "valmurtani@gmail.com",
    "YOLO",
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