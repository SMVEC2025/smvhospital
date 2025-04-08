export function supportsWebGLAndFloatTextures() {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) return false;
      return !!gl.getExtension("OES_texture_float");
    } catch (e) {
      return false;
    }
  }