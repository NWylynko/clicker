export function textCutOff(text, maxlength = 40) {
  if (text == null) {
    return "";
  }
  if (text.length <= maxlength) {
    return text;
  }
  let t = text.substring(0, maxlength);
  let re = /\s+\S*$/;
  let m = re.exec(t);
  t = t.substring(0, m.index);
  t = t.replace(/(?:\r\n|\r|\n)/g, '');
  return t + "...";
}
