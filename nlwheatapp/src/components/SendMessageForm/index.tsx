import React, { useState } from "react";

import { Alert, Keyboard, TextInput, View } from "react-native";
import { api } from "../../services/api";
import { COLORS } from "../../theme";
import { Button } from "../Button";

import { styles } from "./styles";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      try {
        await api.post("/messages", { message: messageFormatted });
      } catch (err) {
        console.log(err);
      }

      setMessage("");
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert("Mensagem enviada com sucesso!");
    } else {
      Alert.alert("Escreva a mensagem para enviar.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={!sendingMessage}
        keyboardAppearance="dark"
        maxLength={140}
        multiline
        onChangeText={setMessage}
        placeholder="Qual a sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        value={message}
      />

      <Button
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
        title="Enviar Mensagem"
      />
    </View>
  );
}
