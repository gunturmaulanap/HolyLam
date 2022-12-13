function validateForm() {
  let x = document.forms['registrasi']['nama'].value;
  let y = document.forms['registrasi']['pass'].value;
  if (x == '') {
    alert('Username tidak boleh kosong');
    return false;
  } else if (y == '') {
    alert('Password tidak boleh kosong');
    return false;
  } else if (x != 'pabw' && y != '12345') {
    alert('Username dan Password salah');
    return false;
  } else {
    window.location.href = 'index.html';
  }
}
