export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const value = ([...colors]) => {
  colors.map(color => COLORS.indexOf(color));

  return (color[0] * 10) + color[1];
};
