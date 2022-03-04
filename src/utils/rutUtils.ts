export function unFormatRut(rut) {
  var result = rut;
  result = result.toString().replace(/-/g, "");
  result = result.toString().replace(/\./g, "");
  return result;
}

export function formatRut(rut) {
  if (rut.length > 1) {
    var pos = 0;
    var sInvertido = "";
    var sRut = "";
    for (var i = rut.length - 1; i >= 0; i--) {
      sInvertido += rut.charAt(i);
      if (i === rut.length - 1) sInvertido += "-";
      else if (pos === 3) {
        sInvertido += ".";
        pos = 0;
      }
      pos++;
    }
    for (var j = sInvertido.length - 1; j >= 0; j--) {
      if (sInvertido.charAt(sInvertido.length - 1) !== ".")
        sRut += sInvertido.charAt(j);
      else if (j !== sInvertido.length - 1) sRut += sInvertido.charAt(j);
    }
    return sRut.toUpperCase();
  } else {
    return rut;
  }
}

export function validateNoEmpresa(rutIn) {
  if (quitarDv(rutIn) < 60000000) {
    return true;
  } else { return false }
}

export function validateRut(rutIn) {
  var tmpstr = "";
  if (rutIn.length > 0) {
    var crut = rutIn;
    var largo = crut.length;
    if (largo < 2) {
      return false;
    }
    for (var i = 0; i < crut.length; i++)
      if (
        crut.charAt(i) !== " " &&
        crut.charAt(i) !== "." &&
        crut.charAt(i) !== "-"
      ) {
        tmpstr = tmpstr + crut.charAt(i);
      }
    var rut = tmpstr;
    crut = tmpstr;
    largo = crut.length;
    if (largo > 2) rut = crut.substring(0, largo - 1);
    else rut = crut.charAt(0);

    var dv = crut.charAt(largo - 1);
    if (rut == null || dv == null) return 0;
    var dvr = calcularDv(rut);
    if (dvr !== dv.toLowerCase()) {
      return false;
    }
    return true;
  }

}

export function calcularDv(rut) {
  var dvr = "0";
  var suma = 0;
  var mul = 2;
  for (var i = rut.length - 1; i >= 0; i--) {
    suma = suma + rut.charAt(i) * mul;
    if (mul === 7) mul = 2;
    else mul++;
  }
  var res = suma % 11;
  if (res === 1) dvr = "k";
  else if (res === 0) dvr = "0";
  else {
    var dvi = 11 - res;
    dvr = dvi + "";
  }
  return dvr;
}

export function quitarDv(rut) {
  var tempRut;
  var tempDv;
  var result = rut;
  if (rut && rut.length > 1) {
    tempRut = rut.substring(0, rut.length - 1);
    tempDv = calcularDv(tempRut)
    if (tempRut + tempDv === rut) {
      result = tempRut;
    }
  }
  return result;
}
