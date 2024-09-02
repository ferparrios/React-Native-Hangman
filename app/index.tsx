import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useEffect, useState } from "react";

const countries = [
  "AFGANISTÁN",
  "ALBANIA",
  "ALEMANIA",
  "ANDORRA",
  "ANGOLA",
  "ANTIGUA Y BARBUDA",
  "ARABIA SAUDITA",
  "ARGELIA",
  "ARGENTINA",
  "ARMENIA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIYÁN",
  "BAHAMAS",
  "BANGLADÉS",
  "BARBADOS",
  "BARÉIN",
  "BÉLGICA",
  "BELICE",
  "BENÍN",
  "BIELORRUSIA",
  "BIRMANIA",
  "BOLIVIA",
  "BOSNIA Y HERZEGOVINA",
  "BOTSUANA",
  "BRASIL",
  "BRUNÉI",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "BUTÁN",
  "CABO VERDE",
  "CAMBOYA",
  "CAMERÚN",
  "CANADÁ",
  "CATAR",
  "CHAD",
  "CHILE",
  "CHINA",
  "CHIPRE",
  "COLOMBIA",
  "COMORAS",
  "COREA DEL NORTE",
  "COREA DEL SUR",
  "COSTA DE MARFIL",
  "COSTA RICA",
  "CROACIA",
  "CUBA",
  "DINAMARCA",
  "DOMINICA",
  "ECUADOR",
  "EGIPTO",
  "EL SALVADOR",
  "EMIRATOS ÁRABES UNIDOS",
  "ERITREA",
  "ESLOVAQUIA",
  "ESLOVENIA",
  "ESPAÑA",
  "ESTADOS UNIDOS",
  "ESTONIA",
  "ETIOPÍA",
  "FILIPINAS",
  "FINLANDIA",
  "FIYI",
  "FRANCIA",
  "GABÓN",
  "GAMBIA",
  "GHANA",
  "GEORGIA",
  "GRANADA",
  "GRECIA",
  "GUATEMALA",
  "GUINEA",
  "GUINEA-BISSAU",
  "GUYANA",
  "HAITÍ",
  "HONDURAS",
  "HUNGRÍA",
  "INDIA",
  "INDONESIA",
  "IRAK",
  "IRÁN",
  "IRLANDA",
  "ISLANDIA",
  "ISRAEL",
  "ITALIA",
  "JAMAICA",
  "JAPÓN",
  "JORDANIA",
  "KAZAJISTÁN",
  "KENIA",
  "KIRGUISTÁN",
  "KIRIBATI",
  "KOSOVO",
  "KUWAIT",
  "LAOS",
  "LESOTO",
  "LETONIA",
  "LÍBANO",
  "LIBERIA",
  "LIBIA",
  "LIECHTENSTEIN",
  "LITUANIA",
  "LUXEMBURGO",
  "MADAGASCAR",
  "MALASIA",
  "MALAWI",
  "MALDIVAS",
  "MALÍ",
  "MALTA",
  "MARRUECOS",
  "MAURICIO",
  "MAURITANIA",
  "MÉXICO",
  "MICRONESIA",
  "MOLDAVIA",
  "MÓNACO",
  "MONGOLIA",
  "MONTENEGRO",
  "MOZAMBIQUE",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NICARAGUA",
  "NÍGER",
  "NIGERIA",
  "NORUEGA",
  "NUEVA ZELANDA",
  "OMÁN",
  "PAÍSES BAJOS",
  "PAKISTÁN",
  "PALAU",
  "PANAMÁ",
  "PAPÚA NUEVA GUINEA",
  "PARAGUAY",
  "PERÚ",
  "POLONIA",
  "PORTUGAL",
  "REINO UNIDO",
  "REPÚBLICA CENTROAFRICANA",
  "REPÚBLICA CHECA",
  "REPÚBLICA DEMOCRÁTICA DEL CONGO",
  "REPÚBLICA DOMINICANA",
  "REPÚBLICA DEL CONGO",
  "RUANDA",
  "RUMANÍA",
  "RUSIA",
  "SAMOA",
  "SAN CRISTÓBAL Y NIEVES",
  "SAN MARINO",
  "SAN VICENTE Y LAS GRANADINAS",
  "SANTA LUCÍA",
  "SANTO TOMÉ Y PRÍNCIPE",
  "SENEGAL",
  "SERBIA",
  "SEYCHELLES",
  "SIERRA LEONA",
  "SINGAPUR",
  "SIRIA",
  "SOMALIA",
  "SRI LANKA",
  "SUAZILANDIA",
  "SUDÁFRICA",
  "SUDÁN",
  "SUDÁN DEL SUR",
  "SUECIA",
  "SUIZA",
  "SURINAM",
  "TAILANDIA",
  "TANZANIA",
  "TAYIKISTÁN",
  "TIMOR ORIENTAL",
  "TOGO",
  "TONGA",
  "TRINIDAD Y TOBAGO",
  "TÚNEZ",
  "TURKMENISTÁN",
  "TURQUÍA",
  "TUVALU",
  "UCRANIA",
  "UGANDA",
  "URUGUAY",
  "UZBEKISTÁN",
  "VANUATU",
  "VATICANO",
  "VENEZUELA",
  "VIETNAM",
  "YEMEN",
  "YIBUTI",
  "ZAMBIA",
  "ZIMBABUE",
];



export default function Page() {
  // const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   const getItems = async () => {
  //     try {
  //       const response = await fetch("https://go-rest-api-1n7e.onrender.com/quotes");
  //       const data = await response.json();
  //       console.log(JSON.stringify(data, null, 2))
  //       setQuotes(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getItems();
  // }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        
        <Link
          asChild
          href={{
            pathname: "/playboard",
            params: { words: countries },
          }}
        >
          {/* <Button title="Go to play" onPress={() => console.log("Toque")} /> */}
          <Pressable>
            <Text>Ir a Playboard</Text>
            <AntDesign name="forward" size={24} color="black" />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
