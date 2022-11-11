import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboar.js";
import { useStore } from "../hooks/useStore.js";
import * as images from "../images/images.js";

const TextureSelect = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const options = { dirt, grass, glass, wood, log };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
    console.log(selectedTexture);
  }, [dirt, grass, glass, wood, log]);

  return !visible ? null : (
    <div className="texture-selector">
      {Object.entries(images).map(([imgKey, img]) => {
        return <img key={imgKey} src={img} alt={imgKey} />;
      })}
    </div>
  );
};

export default TextureSelect;
