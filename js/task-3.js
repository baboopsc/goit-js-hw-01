function getElementWidth(content, padding, border) {
  // Metinleri (50px gibi) sayıya çeviriyoruz (50 gibi)
  const contentNum = Number.parseFloat(content);
  const paddingNum = Number.parseFloat(padding);
  const borderNum = Number.parseFloat(border);
  
  // box-sizing: border-box mantığı: content + 2*padding + 2*border
  const totalWidth = contentNum + (paddingNum * 2) + (borderNum * 2);
  return totalWidth;
}

// Mentorun kontrolü için test kodları:
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200