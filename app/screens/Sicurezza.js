import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function Sicurezza(props) {
  return (
    <Screen>
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Sicurezza</Text>
        </View>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.titolo}>Trattamento dei dati personali</Text>
          <Text style={styles.text}>
            L'associazione Book Club tratta i tuoi dati nel rispetto del
            REGOLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO E DEL CONSIGLIO del
            27 aprile 2016 relativo alla protezione delle persone fisiche con
            riguardo al trattamento dei dati personali, nonché alla libera
            circolazione di tali dati e che abroga la direttiva 95/46/CE
            (regolamento generale sulla protezione dei dati).
            {"\n"}I dati saranno trattati nel rispetto della normativa in
            materia di privacy e dei princìpi di correttezza, di liceità, di
            trasparenza e di tutela della Sua riservatezza e dei Suoi diritti
            {"\n"} {"\n"}
          </Text>

          <Text style={styles.titolo}>Età minima partecipanti</Text>

          <Text style={styles.text}>
            Se ha meno di 16 anni non può fornirci alcun dato personale né può
            registrarsi sul nostro sito, ed in ogni caso non ci assumiamo
            responsabilità per eventuali dichiarazioni mendaci da Lei fornite.
            Qualora ci accorgessimo dell’esistenza di dichiarazioni non
            veritiere procederemo con la cancellazione immediata di ogni dato
            personale acquisito.
          </Text>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titolo: {
    fontWeight: "bold",
    color: colors.blu,
    fontSize: 21,
    marginBottom: 2,
  },

  header: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  textHeader: {
    fontSize: 35,
    color: colors.blu,
    fontWeight: "bold",
    flex: 5,
  },

  textContainer: {
    marginHorizontal: 15,
    height: "100%",
  },

  text: {
    fontSize: 15,
    textAlign: "justify",
  },
});

export default Sicurezza;
