import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Polaroid from "./Polaroid";

// Scroll animation
const scroll = keyframes`
  0% { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
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
  animation: `${scroll} 60s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

const polaroids = [
  {
    imageUrl: "IPA-1.jpg",
    description: [
      "Elisa Tri Meistiawan",
      "4 Mei",
      "082110621133",
      "@iwan_etm",
      "educator45@gmail.com ",
      "“Nak, tajamkan keunggulan pribadimu & terangilah sekitarmu dengan tidak sombong karena kita juga pribadi yang penuh dengan keterbatasan. Keep growing 🙏🏼.”",
    ],
  },
  {
    imageUrl: "IPA-2.jpg",
    description: [
      "FA. Dimas Andika Wahyuanto",
      "11 Juli",
      "085729036488",
      "@fadimasanto",
      "wiryodiharjo90@gmail.com ",
      "“Kamu memiliki potensi yang tak terbatas, hanya perlu diaktifkan. Keep moving forward and think like a proton”",
    ],
  },
  {
    imageUrl: "./IPA-3.jpg",
    description: [
      "Fransisca Wiwik Martasari ",
      "7 Maret",
      "081325373202",
      "@wiwik_martasari",
      "wiexmartasari@gmail.com",
      "Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha ",
    ]
  },
  {
    imageUrl: "./IPA-4.jpg",
    description: [
      "Eleonora Yolanda Endear Ganamurti Sudarbe",
      "20 Januari",
      "089635945348",
      "@yolanda.endear",
      "yolandaendear.sudarbe@gmail.com",
      "Selalu Bahagia dimanapun kalian berada ^_^",
    ]
  },
  {
    imageUrl: "./MAT-1.jpg",
    description: [
      "Martinus Didik Setyawan",
      "22 Februari",
      "081316883877",
      "@martinusdidik",
      "didik@smp.santaursulajakarta.sch.id",
      "Syukuri selalu yang ada...",
    ]
  },
  {
    imageUrl: "./MAT-2.jpg",
    description: [
      "Chatarina Maryani",
      "3 Maret",
      "08128188217",
      "@chatarina_maryani",
      "chatarinamaryani@gmail.com",
      "Nikmatilah masa mudamu dengan bertanggungjawab, dan jadilah wanita yang bermartabat.",
    ]
  },
  {
    imageUrl: "./MAT-3.jpg",
    description: [
      "Emilia Hendra Kristanti",
      "1 Oktober",
      "082225068535",
      "@emiliahendra",
      "emiliahendra1990@gmail.com",
      "Jangan takut untuk mencoba, karena setiap langkah kecil kita, akan membawa kita lebih dekat ke tujuan.",
    ]
  },
  {
    imageUrl: "./IPS-1.jpg",
    description: [
      "Theresia Yulianti",
      "29 Juli",
      "081382450104",
      "-",
      "thresyuli@gmail.com",
      "Jangan pernah berhenti belajar, karena hidup tak pernah berhenti memberikan pelajaran.",
    ]
  },
{
    imageUrl: "./IPS-2.jpg",
    description: [
      "Agustinus Susanto",
      "11 Oktober",
      "081398726745",
      "@ats_susanto",
      "agus@smp.santaursulajakarta.sch.id ",
      "Teruslah bergerak maju, meski langkah kecil sekalipun, adalah tanda bahwa kamu sedang mendekati tujuan besar.",
    ]
  },
  {
    imageUrl: "./IPS-3.jpg",
    description: [
      "Lorencia Helen Dora Sisworo",
      "6 Desember",
      "08112656509",
      "@lhelendora",
      "lorenciahelendora@gmail.com",
      "-",
    ]
  },
  {
    imageUrl: "./PKN-1.jpg",
    description: [
      "Aloysius Krismaryanta ",
      "31 Mei",
      "08161319649",
      "-",
      "krisma31.ak@gmail.com",
      "Belajarlah dari hidup  kesederhanaan Bapa Paus Fransiskus",
    ]
  },
  {
    imageUrl: "./PKN-2.jpg",
    description: [
      "Arny Porba",
      "4 April",
      "081389780562",
      "@arnyporba",
      "arnyporba@gmail.com",
      "-",
    ]
  },
  {
    imageUrl: "./PKN-3.jpg",
    description: [
      "Arya Raka Sadewa ",
      "21 September",
      "082332340556",
      "@arakas_ss",
      "aryaraka799@gmail.com",
      "Sonder",
    ]
  },
  {
    imageUrl: "./ING-1.jpg",
    description: [
      "Vina Agustin",
      "6 Agustus",
      "0818844757",
      "-",
      "vinagustin6@gmail.com",
      "Be the best version of yourself. ",
    ]
  },
  {
    imageUrl: "./ING-2.jpg",
    description: [
      "Khrisna Putuningsih",
      "8 Juni",
      "08161311904",
      "@khrisna.putu",
      "khrisnaputuningsih@gmail.com",
      "Do to others what you want others do to you (Matthew 7:12) ",
    ]
  },
  {
    imageUrl: "./ING-3.jpg",
    description: [
      "Yohana Alaya Prudenti",
      "23 Juni",
      "08112996623",
      "@yohnaap",
      "yohanaalayaprudenti@gmail.com",
      "Life is a box full of surprises.",
    ]
  },
  {
    imageUrl: "./AGA-1.jpg",
    description: [
      "Karinna",
      "28 November",
      "085691942328",
      "@karinnaingleton",
      "karinnaingleton@gmail.com",
      "“Jadilah obor yang mampu menerangi peziarahan hidup”",
    ]
  },
  {
    imageUrl: "./AGA-2.jpg",
    description: [
      "Ignatius Dimmas",
      "9 Juli",
      "08561542234",
      "@ignatiusdimmas",
      "dimaslight9@gmail.com",
      "Don't Rich People Difficult",
    ]
  },
  {
    imageUrl: "./PJOK-1.jpg",
    description: [
      "Edyson Isdy",
      "10 Oktober",
      "081294295960",
      "@edyson.isdy",
      "edysonisdy1967@gmail.com",
      "Jika kamu Serviam sejati terbangmu jauh jangan lupa kembali ke kampus Ursula",
    ]
  },
  {
    imageUrl: "./PJOK-2.jpg",
    description: [
      "Jose Geni",
      "28 Februari",
      "081219083060",
      "@josegeniii.jg",
      "josegeni2802@gmail.com",
      "Perjalananmu mungkin tidak lurus, tapi setiap belokan memiliki makna. Teruslah melangkah, dan kamu akan sampai ke tujuanmu",
    ]
  },
  {
    imageUrl: "./BI-1.jpg",
    description: [
      "Yulia Sri Utami",
      "28 Mei",
      "081843280572",
      "@juliautami ",
      "kotanutama@gmail.com",
      "Peganglah semangat Serviam dalam hidupmu. SERVIAM.",
    ]
  },
  {
    imageUrl: "./BI-2.jpg",
    description: [
      "Antonius Haris Septiaji ",
      "20 September",
      "085713905941",
      "@antoniusharis20",
      "ant.haris20@gmail.com",
      "Bersyukur adalah langkah awal untuk berkembang.",
    ]
  },
  {
    imageUrl: "./BI-3.jpg",
    description: [
      "Yuvensia Kharisma Novena",
      "12 November",
      "081475507844",
      "@ynovena",
      "ynovena@gmail.com",
      "”Hujan mungkin turun seolah akan menyapu segalanya. Tapi begitu matahari mulai bersinar lagi, kehidupan bangkit kembali, apa pun yang terjadi.” -WLGUT-",
    ]
  },
  {
    imageUrl: "./BI-4.jpg",
    description: [
      "Nova Kristina Pakpahan",
      "23 Mei",
      "085283708498",
      "@novacp",
      "novapakpahan19@gmail.com",
      "Hakuna Matata",
    ]
  },
  {
    imageUrl: "./PRA-1.jpg",
    description: [
      "Ermina Kristiyani",
      "23 Februari",
      "087882940581",
      "-",
      "erminakity4@gmail.com",
      "Miliki cukup keberanian untuk memulai dan cukup hati untuk menyelesaikannya",
    ]
  },
  {
    imageUrl: "./PRA-2.jpg",
    description: [
      "Andreas Krisna Putra Wiseno",
      "23 Mei",
      "081296653523",
      "@andreaskrisnapw",
      "andreaskrisnapw@gmail.com",
      "Be Creative 😉",
    ]
  },
  {
    imageUrl: "./PRA-3.jpg",
    description: [
      "Beda Pranowo",
      "4 November",
      "085881526898",
      "-",
      "beda_mercury@yahoo.com",
      "Jadilah pribadi yang sederhana, jujur dan selalu bersyukur. Dan jangan lupa untuk selalu mengandalkan Tuhan. Sukses Selalu. Tuhan Memberkati.",
    ]
  },
  {
    imageUrl: "./BK-1.jpg",
    description: [
      "Dwi Endah Prasetyowati",
      "14 April",
      "081519808178",
      "@endahyuliana",
      "endahkhristiandri77@gmail.com",
      "Success is the sun of small efforts, repeated day-in and day-out",
    ]
  },
  {
    imageUrl: "./BK-2.jpg",
    description: [
      "Dewi Sartika Nadeak",
      "5 Desember",
      "085211004802",
      "@Nadeak_Dewi",
      "nadeakrajagukguk@gmail.com",
      "Konsistensi adalah kunci menuju kesuksesan",
    ]
  },
  {
    imageUrl: "./BK-3.jpg",
    description: [
      "Marcellina Yovita",
      "17 Juli",
      "087875103551",
      "@marcellina.y",
      "marcellina.yovitaa@gmail.com",
      "Do the best and let God do the rest!",
    ]
  },
  {
    imageUrl: "./TIK-1.jpg",
    description: [
      "Yustina Indrati",
      "18 Desember",
      "081289648528",
      "@yustinaindrati",
      "yindrati@gmail.com",
      "Tetap sehat dan semangat untuk angkatan ini, raih kesuksesanmu. Tuhan Memberkati.",
    ]
  },
  {
    imageUrl: "./TIK-2.jpg",
    description: [
      "Robbidin Subagja",
      "20 November",
      "083862418796",
      "@robbidin20",
      "robbidinsubagja@gmail.com",
      "Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu, dan boleh jadi (pula) kamu menyukai sesuatu, padahal ia amat buruk bagimu. Allah mengetahui, sedangkan kamu tidak mengetahui",
    ]
  },
  {
    imageUrl: "./TIK-3.jpg",
    description: [
      "Ruthmana Purba",
      "30 Agustus",
      "082294089173",
      "@ruthmana_purba",
      "ruthmana0@gmail.com",
      "Kesuksesan itu bukan ditunggu, tetapi diwujudkan lewat usaha dan kegigihan",
    ]
  },
  {
    imageUrl: "./TU-1.jpg",
    description: [
      "Synthia Caroline",
      "14 Oktober",
      "08119141480",
      "@mimosben14",
      "syncaroline81@gmail.com",
      "Bersukacitalah dalam pengharapan, sabarlah dalam kesesakan, dan bertekunlah dalam doa! (Roma 12:12)",
    ]
  },
  {
    imageUrl: "./TU-2.jpg",
    description: [
      "Margaretha Yuniaty S.",
      "16 Juni",
      "081318793672",
      "-",
      "rethasanur@gmail.com",
      "ORA ET LABORA",
    ]
  },
  {
    imageUrl: "./TU-3.jpg",
    description: [
      "Fransiskus Herry Diantoro",
      "2 Desember",
      "081212879768",
      "@HERRY_DIANTORO",
      "dianbill22@gmail.com",
      "Jadilah versi terbaik dari dirimu, bukan tiruan dari orang lain. Dunia membutuhkanmu, bukan seseorang yang lain.",
    ]
  },
  {
    imageUrl: "./TU-4.jpg",
    description: [
      "Novitasari Ginting",
      "9 September",
      "085275007251",
      "@novita_sariginting",
      "ovi.sari99@gmail.com",
      "semangat...semangat ...semangat",
    ]
  },
  {
    imageUrl: "./TU-5.jpg",
    description: [
      "Theresia Anita",
      "15 Juni",
      "081298787332",
      "@lunar.eclipse85",
      "lunar.eclipse85@gmail.com",
      "Jangan biarkan kegagalan kemarin membuatmu berhenti, jangan pula berhenti karena keraguanmu.",
    ]
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
        <ScrollContent isPaused={isPaused} speed={60}>
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