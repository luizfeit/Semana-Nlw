import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatarImg from "../../assets/avatar.png";

import { styles } from "./styles";
import { COLORS } from "../../theme";

const SIZES = {
  SMALL: {
    avatarSize: 28,
    containerSize: 32,
  },
  NORMAL: {
    avatarSize: 42,
    containerSize: 48,
  },
};

// tipagem p/ definir tamanhos do avatar
type Props = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

// img genéria p/ avatar sem foto
const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = "NORMAL" }: Props) {
  const { avatarSize, containerSize } = SIZES[sizes];

  return (
    <>
      <LinearGradient
        colors={[COLORS.PINK, COLORS.YELLOW]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0.9, y: 1 }}
        style={[
          styles.container,
          {
            borderRadius: containerSize / 2,
            height: containerSize,
            width: containerSize,
          },
        ]}
      >
        <Image
          source={{ uri: imageUri || AVATAR_DEFAULT }}
          style={[
            styles.avatar,
            {
              borderRadius: avatarSize / 2,
              height: avatarSize,
              width: avatarSize,
            },
          ]}
        />
      </LinearGradient>
    </>
  );
}
