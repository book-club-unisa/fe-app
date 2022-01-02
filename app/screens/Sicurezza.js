import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function Sicurezza(props) {
  return (
    <Screen>
      <View style={styles.tutto}>
        <Text style={styles.supTitolo}> Sicurezza {"\n"} </Text>
        <Text style={styles.titolo}> Trattamento dei dati personali </Text>
        <Text>
          L'associazione Book Club tratta i tuoi dati nel rispetto del
          REGOLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO E DEL CONSIGLIO del
          27 aprile 2016 relativo alla protezione delle persone fisiche con
          riguardo al trattamento dei dati personali, nonché alla libera
          circolazione di tali dati e che abroga la direttiva 95/46/CE
          (regolamento generale sulla protezione dei dati).
          {"\n"}I dati saranno trattati nel rispetto della normativa in materia
          di privacy e dei princìpi di correttezza, di liceità, di trasparenza e
          di tutela della Sua riservatezza e dei Suoi diritti{"\n"} {"\n"}
        </Text>

        <Text style={styles.titolo}> Età minima partecipanti </Text>

        <Text>
          Se ha meno di 16 anni non può fornirci alcun dato personale né può
          registrarsi sul nostro sito, ed in ogni caso non ci assumiamo
          responsabilità per eventuali dichiarazioni mendaci da Lei fornite.
          Qualora ci accorgessimo dell’esistenza di dichiarazioni non veritiere
          procederemo con la cancellazione immediata di ogni dato personale
          acquisito.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  supTitolo: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    fontWeight: "bold",
    fontSize: 28,
    color: colors.blu,
  },

  titolo: {
    fontWeight: "bold",
    color: colors.blu,
    fontSize: 20,
  },

  tutto: {
    margin: 10,
    top: 80,
  },
});

export default Sicurezza;
