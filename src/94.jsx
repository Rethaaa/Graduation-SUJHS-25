import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Polaroid from "./Polaroid";

// Scroll animation
const scroll = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
`;

const ScrollContainer = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  padding: "30px",
});

const ScrollContent = styled(Box)(({ isPaused }) => ({
  display: "inline-flex",
  whiteSpace: "nowrap",
  animation: `${scroll} 40s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

const polaroids = [
  {
    imageUrl: "./94-1.jpg",
    description: [
      "Alicia Joceline Sondakh",
      "6/24/2010",
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
      "11/25/2009",
      "082111581500",
      "@oreo_team2009",
      "anastasiagiannina2009@gmail.com",
      "“Those who can learn to give, be brought good upon their heart”",
    ],
  },
{
  imageUrl: "./94-03.jpg",
  description: [
    "Angela Tribuana Tunggadewi Tanjaya",
    "1/12/2010",
    "081511700500",
    "@enji81019",
    "enji.tanjaya@gmail.com",
    "Jika satu pintu ditutup maka pintu lain akan terbuka!",
  ],
},
{
  imageUrl: "./94-04.jpg",
  description: [
    "Aretha Hartono",
    "1/13/2010",
    "08872236228",
    "@aretha.hartono",
    "aretha.hartonoo@gmail.com",
    "",
  ],
},
{
  imageUrl: "./94-05.jpg",
  description: [
    "Ayanara Kemal Harro",
    "6/10/2009",
    "081282038472",
    "@juliefounded",
    "Kyoshiroizy@gmail.com",
    "To paint is the most terrific thing that there is, but to do it well is very difficult.",
  ],
},
{
  imageUrl: "./94-06.jpg",
  description: [
    "Bernadeth Joscelyn Tan",
    "5/10/2010",
    "081519300008",
    "@bernadethtan",
    "bernadethtan2020@gmail.com",
    "Dream as if you'll live forever, live as if you'll die today",
  ],
},
{
  imageUrl: "./94-07.jpg",
  description: [
    "Brianna Naraya Atmadjaja",
    "4/28/2010",
    "081808283896",
    "@Biebriii",
    "brianna.atmadjaja@gmail.com",
    "Wear your hair down, and your attitude high",
  ],
},
{
  imageUrl: "./94-08.jpg",
  description: [
    "Brigitta Milana Wahyudi",
    "10/28/2010",
    "087882380679",
    "@brigittamilana__",
    "brigittamw2810@gmail.com",
    "Anyway, don’t be a stranger",
  ],
},
{
  imageUrl: "./94-09.jpg",
  description: [
    "Casey Rae Limas",
    "11/3/2010",
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
    "2/2/2010",
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
    "5/21/2010",
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
    "7/7/2010",
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
    "10/23/2010",
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
    "12/19/2009",
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
    "12/21/2009",
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
    "9/24/2010",
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
    "12/28/2009",
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
    "4/26/2010",
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
    "10/8/2009",
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
    "6/18/2010",
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
    "1/26/2010",
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
    "1/13/2010",
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
    "12/11/2009",
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
    "4/26/2010",
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
    "4/29/2010",
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
    "12/9/2009",
    "081213008689",
    "@quenkellyy",
    "quenkellysihombing@gmail.com",
    "",
  ],
},
{
  imageUrl: "./94-27.jpg",
  description: [
    "Rafaella Gratia Juean Riyarso",
    "6/7/2010",
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
    "1/1/2010",
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
    "11/25/2009",
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
    "9/13/2010",
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
    "10/29/2010",
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
    "6/20/2010",
    "085692619663",
    "@ursulasahasra",
    "ursulasahasraaryaputri@gmail.com",
    "",
  ],
},
{
  imageUrl: "./94-33.jpg",
  description: [
    "Valerie Faye Awindra",
    "2/17/2010",
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
    "5/23/2010",
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
    "11/6/2009",
    "0811997238",
    "@valikaam",
    "valmurtani@gmail.com",
    "YOLO",
  ],
},
];

const allPolaroids = [...polaroids, ...polaroids];

const InfiniteScrollPolaroids = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleOpen = (cardData) => setExpandedCard(cardData);
  const handleClose = () => setExpandedCard(null);

  return (
    <>
      <ScrollContainer>
        <ScrollContent isPaused={isPaused} speed={40}>
          {allPolaroids.map((data, index) => (
            <Polaroid
              key={index}
              imageUrl={data.imageUrl}
              description={data.description}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => handleOpen(data)}
            />
          ))}
        </ScrollContent>
      </ScrollContainer>

      <Dialog open={Boolean(expandedCard)} onClose={handleClose} maxWidth="sm" fullWidth>
        {expandedCard && (
          <>
            <DialogTitle>{expandedCard.description[0]}</DialogTitle>
            <DialogContent>
              <Box
                component="img"
                src={expandedCard.imageUrl}
                alt="Expanded Polaroid"
                sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
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

export default InfiniteScrollPolaroids;